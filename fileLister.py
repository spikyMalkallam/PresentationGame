from os import listdir
from os.path import isfile, join
onlyfiles = [f for f in listdir("images") if isfile(join("images", f))]
print(onlyfiles)
print("---------------------------------")

with open('prompts.txt') as f:
    lines = f.readlines()
    print(lines)