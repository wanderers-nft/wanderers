import gc
import json
import multiprocessing
import os
from dataclasses import dataclass
from typing import List

from tqdm import tqdm

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
    manifest = Manifest(json.load(open('manifest_prototypev2.json')))

    procs = 2
    n = 50
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
        frames = get_attributes(manifest)
        combine_attributes(frames, str(n))
        print(f'Done {n}')
    pass


def get_attributes(manifest: Manifest) -> Frames:
    # Get each of them according to manifest
    leftarm = get(manifest.attribute("leftarm"))
    legs = get(manifest.attribute("legs"))
    panels = get(manifest.attribute("panels"))
    rightarm = get(manifest.attribute("rightarm"))
    spaces = get(manifest.attribute("space"))
    stars = get_stars()
    cockpit = get(manifest.attribute("cockpit"))
    window = get(manifest.attribute("window"))

    return Frames(leftarm, legs, panels, rightarm, spaces, stars, cockpit, window)


def combine_attributes(frames: Frames, prefix: str):
    os.makedirs(f'output/{prefix}', exist_ok=True)

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

        frame.save(f'output/{prefix}/{prefix}_{n:05}.png')


if __name__ == "__main__":
    main()
