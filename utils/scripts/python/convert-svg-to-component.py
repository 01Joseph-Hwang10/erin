import requests
import json
import os
from tqdm import tqdm
from constants import ROOT

print('Initializing...')

API = 'https://api.react-svgr.com/api/svgr'
SVG_ROOT = os.path.join(ROOT, 'assets/stickers/stickers-svg')
TARGET = os.path.join(ROOT, 'assets/stickers/stickers-component')

options = {
    "native": True,
    "typescript": True,
}

headers = {
    "Content-Type": "application/json"
}

print('Converting svgs to react components...')

for filename in tqdm(os.listdir(SVG_ROOT), desc="Processing"):
    with open(os.path.join(SVG_ROOT, filename), 'r') as rf:
        code = rf.read()

    data = {
        "code": code,
        "options": options
    }

    res = requests.post(url=API,data=json.dumps(data),headers=headers, timeout=5000)

    result_code = res.json()['output']
    component_name = filename.split('.')[0].replace('-', 'D')
    result_code = result_code.replace("SvgComponent", component_name).replace('      xmlns="http://www.w3.org/2000/svg"\n', '')
    component_path = os.path.join(TARGET, '%s.tsx' % component_name )
    with open(component_path, 'w') as wf:
        wf.write(result_code)

print("Generating successfully done!")