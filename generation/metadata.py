import json
import os

import hidden_metadata

cid = "QmaSZ34iHpAJRhtF8Xe1ETf7RCr1NiduVE3g8gxpmFdCdo"


def main():
    names = json.load(open("names.json"))
    for filename in os.scandir("/mnt/e/output/metadata"):
        if len(filename.name.split(".")) != 2:
            continue
        transformed = transform_json(
            json.load(open(filename.path)), names, filename.name.split(".")[0]
        )

        with open(filename.path.split(".")[0], "w") as o:
            json.dump(transformed, o)


def transform_json(data, names, file_name):
    print(file_name)
    metadata = {
        "animation_url": f"ipfs://{cid}/{file_name}.mp4",
        "image": f"ipfs://{cid}/{file_name}.mp4",
        "attributes": [],
    }
    for x in data.items():
        # For each sub-item in attribute
        for y in x[1]:
            metadata["attributes"].append(
                {"trait_type": names[x[0]], "value": names[y]}
            )
    # Hidden attributes
    if int(file_name) in hidden_metadata.ws16:
        metadata["attributes"].append(
            {"trait_type": "special", "value": "Warp Squad Sixteen"}
        )
    if int(file_name) in hidden_metadata.gm:
        metadata["attributes"].append(
            {"trait_type": "special", "value": "Guardian Marked"}
        )
    if int(file_name) in hidden_metadata.radioactive:
        metadata["attributes"].append(
            {"trait_type": "special", "value": "RADIOACTIVE"}
        )

    return metadata


if __name__ == "__main__":
    main()
