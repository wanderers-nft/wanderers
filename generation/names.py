import json

f = json.load(open("files_manifest.json"))

data = {}

for a in f:
    for c in a["categories"]:
        for fi in c["files"]:
            data[fi["file"]] = ""

with open(f"names2.json", "w") as w:
    json.dump(data, w)