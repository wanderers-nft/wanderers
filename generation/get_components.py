import os.path
import random
from typing import List, Dict

from PIL import Image

folder = "source"


def chance(prob):
    return random.random() < prob


# Get categories
def fetch_categories(manifest) -> List:
    # Get all categories
    categories = manifest["categories"]

    # If not multiple then pick one based on relative rarity.
    # However, if there are multiple available, then all categories are selected. The base chance will
    # be compounded by individual files.
    if not manifest["multiple"]:
        categories = random.choices(
            population=categories, weights=[x["rarity"] for x in categories], k=1
        )

    return categories


# Get list of files to fetch
def files_in_category(category) -> List:
    files = category["files"]

    if category["multiple"]:
        # Since the base category rarity was not filtered out, it is multiplied here
        files = list(
            filter(lambda file: chance(file["rarity"] * category["rarity"]), files)
        )
    else:
        # If there is only one choice, then try base chance.
        if not chance(category["rarity"]):
            return []

        files = random.choices(
            population=files, weights=[x["rarity"] for x in files], k=1
        )

    return files


def get_files(attrib: str, category: str, files: str) -> List:
    images = []
    # Hack: determine if files start at 0 or 1
    start, end = 0, 131
    if not os.path.isfile(f"{folder}/{attrib}/{category}/{files}/{files}_{0:05}.png"):
        start, end = 1, 132

    for i in range(start, end):
        file_name = f"{folder}/{attrib}/{category}/{files}/{files}_{i:05}.png"

        # Give us the file name
        images.append(file_name)

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


def get_base() -> List:
    return get_files("base", "base", "base")
