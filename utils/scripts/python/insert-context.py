import os, re
from constants import ROOT
from tqdm import tqdm

print('Initializing...')

components_root = os.path.join(ROOT, 'assets/stickers/stickers-component')

print('Inserting context...')

def get_comment_value(key: str, code: str) -> str:
    search_obj = re.compile('// %s: ([0-9]+)' % key).search(code)
    if search_obj == None:
        raise Exception
    return search_obj.group(1)
    

for filename in tqdm(os.listdir(components_root), desc="Processing"):
    filepath = os.path.join(components_root, filename)
    with open(filepath, 'r') as rf:
        codes = rf.read()
    vb_width = get_comment_value('width', codes)
    vb_height = get_comment_value('height', codes)
    component_declare_part = re.compile('function.*\{').search(codes).group()
    codes = codes.replace(component_declare_part, component_declare_part + '\n%sconst stickerScale = useContext(StickerScaleContext);' % (" " * 2))
    import_part = 'import * as React from "react";'
    codes = codes.replace(
        import_part, 
        import_part + '\n' + '\n'.join([
            'import { useContext } from "react";', 
            'import { StickerScaleContext } from "@components/editor/workspace/erin-components/sticker/sticker-scale-context";'
        ])
    )
    codes = codes.replace('width={' + vb_width + '}', 'width={' + ('%s * stickerScale' % vb_width) + '}')
    codes = codes.replace('height={' + vb_height + '}', 'height={' + ('%s * stickerScale' % vb_height) + '}')
    # print(codes)
    with open(filepath, 'w') as wf:
        wf.write(codes)
