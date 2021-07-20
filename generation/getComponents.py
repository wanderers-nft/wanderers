from PIL import Image

folder = "source"


def get_cockpit():
    cockpit = "cockpit/cockpit-1"
    images = []
    for i in range(1000, 1131):
        f = Image.open(f'{folder}/{cockpit}/cockpit-{i}.png').convert('RGBA')
        images.append(f)
    return images


def get_leftarm():
    leftarm = "leftarm/leftarm-1"
    images = []
    for i in range(1000, 1131):
        f = Image.open(f'{folder}/{leftarm}/leftarm-{i}.png').convert('RGBA')
        images.append(f)
    return images


def get_rightarm():
    leftarm = "rightarm/rightarm-1"
    images = []
    for i in range(1000, 1131):
        f = Image.open(f'{folder}/{leftarm}/rightarm-{i}.png').convert('RGBA')
        images.append(f)
    return images


def get_legs():
    legs = "legs"
    images = []
    for i in range(0, 131):
        f = Image.open(f'{folder}/{legs}/legs{i:03}.png').convert('RGBA')
        images.append(f)
    return images


def get_panels():
    panel = "panels/panel-d"
    images = []
    for i in range(0, 131):
        f = Image.open(f'{folder}/{panel}/panel-d{i:03}.png').convert('RGBA')
        images.append(f)
    return images


def get_space():
    space = "space/planet-1"
    images = []
    for i in range(1000, 1131):
        f = Image.open(f'{folder}/{space}/planet-{i}.png').convert('RGBA')
        images.append(f)
    return images


def get_stars():
    stars = "stars"
    images = []
    for i in range(0, 131):
        f = Image.open(f'{folder}/{stars}/stars{i:03}.png').convert('RGBA')
        images.append(f)
    return images


def get_windows():
    windows = "windows/window-1"
    images = []
    for i in range(1000, 1131):
        f = Image.open(f'{folder}/{windows}/window-{i}.png').convert('RGBA')
        images.append(f)
    return images
