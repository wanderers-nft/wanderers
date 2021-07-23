import os.path
import random
from pprint import pprint
from typing import List, Dict

from PIL import Image

folder = "source"


def chance(prob):
    return random.random() < prob


# Get categories
def fetch_categories(manifest) -> List:
    # Get all categories
    categories = manifest["categories"]

    if manifest["multiple"]:
        categories = list(filter(lambda cat: chance(cat["rarity"]), categories))
    else:
        categories = random.choices(
            population=categories, weights=[x["rarity"] for x in categories], k=1
        )

    return categories


# Get list of files to fetch
def files_in_category(category) -> List:
    files = category["files"]

    if category["multiple"]:
        files = list(filter(lambda cat: chance(cat["rarity"]), files))
    else:
        files = random.choices(
            population=files, weights=[x["rarity"] for x in files], k=1
        )

    return files


def get_files(attrib: str, category: str, files: str) -> List:
    images = []
    for i in range(0, 131):
        file_name = f"{folder}/{attrib}/{category}/{files}/{files}_{i:05}.png"

        # FIXME: All files should have 131 frames
        if not os.path.isfile(file_name):
            file_name = f"{folder}/{attrib}/{category}/{files}/{files}_{0:05}.png"

        images.append(Image.open(file_name))

    return images


def get(attrib) -> [List, Dict]:
    categories = fetch_categories(attrib)
    files_list = [
        (category["category"], files_in_category(category)) for category in categories
    ]
    fs = [
        get_files(attrib["attribute"], c[0], f["file"])
        for c in files_list
        for f in c[1]
    ]
    data = {attrib["attribute"]: [f["file"] for c in files_list for f in c[1]]}
    return fs, data
    # Read files


def get_stars() -> List:
    return get_files("stars", "stars", "stars")
