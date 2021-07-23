import json
import multiprocessing
import os
from dataclasses import dataclass
from typing import List, Dict

from generation.get_components import get, get_stars


@dataclass
class Frames:
    leftarm: List
    legs: List
    panels: List[List]
    rightarm: List
    space: List[List]
    stars: List
    cockpit: List
    window: List


class Manifest:
    def __init__(self, manifest):
        self.manifest = manifest

    def attribute(self, attr: str):
        return [x for x in self.manifest if x["attribute"] == attr][0]


def main():
    manifest = Manifest(json.load(open("manifest_prototypev2.json")))

    procs = 2
    n = 100
    increment = int(n / procs)
    jobs = []
    start = 0
    stop = increment

    for i in range(0, procs):
        process = multiprocessing.Process(target=worker, args=(start, stop, manifest))
        start = stop
        stop += increment

        jobs.append(process)

    [j.start() for j in jobs]
    [j.join() for j in jobs]

    return


def worker(start: int, stop: int, manifest: Manifest):
    for n in range(start, stop):
        frames, data = get_attributes(manifest)

        os.makedirs(f"output/{str(n)}", exist_ok=True)
        with open(f"output/{str(n)}/metadata.json", "w") as f:
            json.dump(data, f)

        combine_attributes(frames, str(n))
        print(f"Done {n}")
    pass


def get_attributes(manifest: Manifest) -> [Frames, Dict]:
    # Get each of them according to manifest
    data = {}

    leftarm, d = get(manifest.attribute("leftarm"))
    data.update(d)

    legs, d = get(manifest.attribute("legs"))
    data.update(d)

    panels, d = get(manifest.attribute("panels"))
    data.update(d)

    rightarm, d = get(manifest.attribute("rightarm"))
    data.update(d)

    spaces, d = get(manifest.attribute("space"))
    data.update(d)

    stars = get_stars()

    cockpit, d = get(manifest.attribute("cockpit"))
    data.update(d)

    window, d = get(manifest.attribute("window"))
    data.update(d)

    return Frames(leftarm, legs, panels, rightarm, spaces, stars, cockpit, window), data


def combine_attributes(frames: Frames, prefix: str):
    for (n, star) in enumerate(frames.stars):
        frame = star.copy()

        for space in [x[n] for x in frames.space]:
            frame.paste(space, mask=space)

        for panel in [x[n] for x in frames.panels]:
            frame.paste(panel, mask=panel)

        for window in [x[n] for x in frames.window]:
            frame.paste(window, mask=window)

        for cockpit in [x[n] for x in frames.cockpit]:
            frame.paste(cockpit, mask=cockpit)

        for leg in [x[n] for x in frames.legs]:
            frame.paste(leg, mask=leg)

        for leftarm in [x[n] for x in frames.leftarm]:
            frame.paste(leftarm, mask=leftarm)

        for rightarm in [x[n] for x in frames.rightarm]:
            frame.paste(rightarm, mask=rightarm)

        frame.save(f"output/{prefix}/{prefix}_{n:05}.png")


if __name__ == "__main__":
    main()
