import os
from constants import ROOT
import re

TARGET = os.path.join(ROOT, 'assets/stickers/stickers-component')

EXCLUDES = []

def indent(str, indent):
    return ' ' * indent + str

SUCCESSFUL = "Unknown"
DEBUG = True

for filename in os.listdir(TARGET):
    if filename in EXCLUDES:
        continue
    filepath = os.path.join(TARGET, filename)
    with open(filepath, 'r') as rf:
        code = rf.read()
    viewbox_regex = re.compile(r'viewBox="0 0 ([0-9]+) ([0-9]+)"').search(code)
    width = int(viewbox_regex.group(1))
    height = int(viewbox_regex.group(2))
    for i in range(10):
        if width * i >= 200:
            width *= i
            break
    for i in range(10):
        if height * i >= 200:
            height *= i
            break
    if DEBUG:
       print(filename)
    #    print(code)
    #    print(SUCCESSFUL)
    else:
        with open(filepath, 'w') as wf:
            wf.write(code)