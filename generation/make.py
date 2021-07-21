import json
from dataclasses import dataclass

from generation.getComponents import *

number = 10


@dataclass
class Frames:
    leftarm: List[Image]
    legs: List[Image]
    panels: List[List[Image]]
    rightarm: List[Image]
    space: List[List[Image]]
    stars: List[Image]
    cockpit: List[Image]
    window: List[Image]


def main():
    manifest = json.load(open('manifest_prototypev2.json'))
    frames = get_attributes(manifest)
    combine_attributes(frames)
    return


def get_attributes(manifest) -> Frames:
    # Get each of them according to manifest
    leftarm = get_leftarm(manifest)
    legs = get_legs(manifest)
    panels = get_panels(manifest)
    rightarms = get_rightarm(manifest)
    spaces = get_space(manifest)
    stars = get_stars(manifest)
    cockpits = get_cockpit(manifest)
    windows = get_windows(manifest)

    return Frames(leftarm, legs, panels, rightarms, spaces, stars, cockpits, windows)


def combine_attributes(frames: Frames):
    # TODO
    pass
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
