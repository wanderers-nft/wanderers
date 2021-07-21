import json
from dataclasses import dataclass
from typing import List

from tqdm import tqdm

from generation.get_components import get, get_stars

number = 10


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
    frames = get_attributes(manifest)
    combine_attributes(frames)
    return


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


def combine_attributes(frames: Frames):
    for (n, star) in tqdm(enumerate(frames.stars)):
        for space in [x[n] for x in frames.space]:
            star.paste(space, mask=space)

        for panel in [x[n] for x in frames.panels]:
            star.paste(panel, mask=panel)

        for window in [x[n] for x in frames.window]:
            star.paste(window, mask=window)

        for cockpit in [x[n] for x in frames.cockpit]:
            star.paste(cockpit, mask=cockpit)

        for leg in [x[n] for x in frames.legs]:
            star.paste(leg, mask=leg)

        for leftarm in [x[n] for x in frames.leftarm]:
            star.paste(leftarm, mask=leftarm)

        for rightarm in [x[n] for x in frames.rightarm]:
            star.paste(rightarm, mask=rightarm)

        star.save(f'output/output{n:05}.png')

    # for (i, (leftarm, leg, panel, rightarm, space, star, cockpit, window)) in enumerate(
    #         zip(leftarms, legs, panels, rightarms, spaces, stars, cockpits, windows)):
    #     # Star is base
    #     star.paste(space, mask=space)
    #     star.paste(panel, mask=panel)
    #     star.paste(window, mask=window)
    #     star.paste(cockpit, mask=cockpit)
    #     star.paste(leg, mask=leg)
    #     star.paste(leftarm, mask=leftarm)
    #     star.paste(rightarm, mask=rightarm)
    # 
    #     star.save(f'output/output{i:03}.png')


if __name__ == "__main__":
    main()
