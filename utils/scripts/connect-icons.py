import re
import os
from termcolor import colored

EXCLUDE_FILES = [
    'time-dial.tsx',
    'toggle-pages.tsx',
    'page-button.tsx',
]

ROOT = '/mnt/wsl/erin_app/components/editor'

EXCLUDE_PATHS = [
    os.path.join(ROOT, 'base'),
    os.path.join(ROOT, 'bottom-float'),
    os.path.join(ROOT, 'bottom-float/animation-timeline'),
    ROOT
]

for (path, dirs, filenames) in os.walk(ROOT):

    if path in EXCLUDE_PATHS:
        continue

    for filename in filenames:
        if filename in EXCLUDE_FILES:
            continue
        file = os.path.join(path, filename)
        with open(file, 'r') as rf:
            code = rf.read()
        button_type = 'toggle'
        if re.compile('renderIcon').search(code):
            button_type = 'press'
        component_name = re.compile(
            'const ([A-Za-z]+): React.FC').findall(code)[0]
        code = code.replace('import { ICON_COLOR } from "../../base/constants;"',
                            'import { ICON_COLOR } from "../../base/constants"')
        with open(file, 'w') as wf:
            wf.write(code)
