import json
import os


def main():
    names = json.load(open("names.json"))
    for filename in os.scandir("output/metadata"):
        transformed = transform_json(json.load(open(filename.path)), names)

        with open(filename.path, "w") as o:
            json.dump(transformed, o)


def transform_json(data, names):
    transformed = []
    for x in data.items():
        # For each sub-item in attribute
        for y in x[1]:
            transformed.append(
                {"trait_type": names[x[0]], "value": names[y]}
            )
    return transformed


if __name__ == "__main__":
    main()
