import os
from constants import COMPONENTS_ROOT
import re

def get_vp_regex(key: str, codes: str):
    return re.compile('%s=\{([0-9]+) \* stickerScale\}' % key).search(codes)

for filename in os.listdir(COMPONENTS_ROOT):

    filepath = os.path.join(COMPONENTS_ROOT, filename)
    with open(filepath, 'r') as rf:
        codes = rf.read()
    width_regex = get_vp_regex('width', codes)
    height_regex = get_vp_regex('height', codes)
    width = int(width_regex.group(1))
    height = int(height_regex.group(1))
    # Resize part
    i = 1
    while True:
        if width * i > 200:
            width = width * i
            i = 1
            break
        i += 1
    while True:
        if height * i > 200:
            height = height * i
            i = 1
            break
        i += 1
    # Resize part ends
    codes = codes.replace(
        width_regex.group(0), 
        width_regex.group(0).replace(width_regex.group(1), str(width)))
    codes = codes.replace(
        height_regex.group(0),
        height_regex.group(0).replace(height_regex.group(1), str(height))
    )
    with open(filepath, 'w') as wf:
        wf.write(codes)
