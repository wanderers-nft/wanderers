import json
import os

cid = "QmTXVyW3KT2fia9J2RCtFKJnzVoBK6MqahmqWa2E3y2hdR"


def main():
    names = json.load(open("names.json"))
    for filename in os.scandir("output/metadata"):
        transformed = transform_json(
            json.load(open(filename.path)),
            names,
            filename.name.split('.')[0]
        )

        with open(filename.path.split('.')[0], "w") as o:
            json.dump(transformed, o)


def transform_json(data, names, file_name):
    metadata = {
        "animation_url": f"ipfs://{cid}/{file_name}.mp4",
        "image": f"ipfs://{cid}/{file_name}.mp4",
        "attributes": []
    }
    for x in data.items():
        # For each sub-item in attribute
        for y in x[1]:
            metadata["attributes"].append(
                {"trait_type": names[x[0]], "value": names[y]}
            )
    return metadata


if __name__ == "__main__":
    main()
