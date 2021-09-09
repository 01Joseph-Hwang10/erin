import os
import re
from constants import ROOT
from tqdm import tqdm

print('Initializing...')

component_root = os.path.join(ROOT, 'assets/stickers/stickers-component')

def get_prop(key: str, code: str) -> str:
    search_obj = re.compile('%s=\{([0-9]+)\}' % key).search(code)
    if search_obj == None:
        return ""
    return search_obj.group(1)

print('Inserting Viewbox comment...')

for filename in tqdm(os.listdir(component_root), desc="Processing"):
    filepath = os.path.join(component_root, filename)
    with open(filepath, 'r') as rf:
        codes = rf.read()
    codes = codes.replace(
        'function', 
        '// Viewbox\n// width: %s\n// height: %s\nfunction' % (
            get_prop('width', codes), get_prop('height', codes)
        )
    )
    with open(filepath, 'w') as wf:
        wf.write(codes)