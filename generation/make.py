import json
import multiprocessing
import os
import random
from dataclasses import dataclass
from shutil import copy
from typing import List, Dict

from PIL import Image

from generation.get_components import get, get_base


@dataclass
class Frames:
    leftarm: List
    panels: List[List]
    rightarm: List
    space: List[List]
    base: List
    cockpit: List
    window: List


class Manifest:
    def __init__(self, manifest):
        self.manifest = manifest

    def attribute(self, attr: str):
        return [x for x in self.manifest if x["attribute"] == attr][0]


class AudioManifest:
    def __init__(self, manifest):
        self.manifest = manifest

    def get(self):
        selected = random.choices(
            population=self.manifest, weights=[x["rarity"] for x in self.manifest], k=1
        )
        return selected[0]


def main():
    manifest = Manifest(json.load(open("files_manifest.json")))
    music = AudioManifest(json.load(open("audio_manifest.json")))

    procs = 20
    n = 1000
    increment = int(n / procs)
    jobs = []
    start = 0
    stop = increment

    for i in range(0, procs):
        process = multiprocessing.Process(
            target=worker, args=(start, stop, manifest, music)
        )
        start = stop
        stop += increment

        jobs.append(process)

    [j.start() for j in jobs]
    [j.join() for j in jobs]

    return


def worker(start: int, stop: int, manifest: Manifest, music: AudioManifest):
    for n in range(start, stop):
        frames, data = get_attributes(manifest)
        os.makedirs(f"output/{str(n)}", exist_ok=True)

        # Get music and copy to metadata
        selected_music = music.get()
        data["music"] = [selected_music["file"]]

        # Copy audio file
        copy(f"source/audio/{selected_music['file']}.mp3", f"output/{str(n)}/music.mp3")

        with open(f"output/{str(n)}/metadata.json", "w") as f:
            json.dump(data, f)

        combine_attributes(frames, str(n))
        print(f"Done {n}")


def get_attributes(manifest: Manifest) -> [Frames, Dict]:
    # Get each of them according to manifest
    data = {}

    leftarm, d = get(manifest.attribute("left-arm"))
    data.update(d)

    panels, d = get(manifest.attribute("panels"))
    data.update(d)

    rightarm, d = get(manifest.attribute("right-arm"))
    data.update(d)

    spaces, d = get(manifest.attribute("space"))
    data.update(d)

    base = get_base()

    cockpit, d = get(manifest.attribute("cockpits"))
    data.update(d)

    window, d = get(manifest.attribute("windows"))
    data.update(d)

    return Frames(leftarm, panels, rightarm, spaces, base, cockpit, window), data


def combine_attributes(frames: Frames, prefix: str):
    for (n, star) in enumerate(frames.base):
        # override frame
        # if n != 65:
        #     continue

        frame = Image.open(star)

        for space in [x[n] for x in frames.space]:
            space = Image.open(space)
            frame.paste(space, mask=space)

        for panel in [x[n] for x in frames.panels]:
            panel = Image.open(panel)
            frame.paste(panel, mask=panel)

        for window in [x[n] for x in frames.window]:
            window = Image.open(window)
            frame.paste(window, mask=window)

        for cockpit in [x[n] for x in frames.cockpit]:
            cockpit = Image.open(cockpit)
            frame.paste(cockpit, mask=cockpit)

        for leftarm in [x[n] for x in frames.leftarm]:
            leftarm = Image.open(leftarm)
            frame.paste(leftarm, mask=leftarm)

        for rightarm in [x[n] for x in frames.rightarm]:
            rightarm = Image.open(rightarm)
            frame.paste(rightarm, mask=rightarm)

        # frame.save(f"output/{prefix}_{n:05}.png")
        frame.save(f"output/{prefix}/{prefix}_{n:05}.png")


if __name__ == "__main__":
    main()
