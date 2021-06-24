import re
import os

EXCLUDE_FILES = [
    'time-dial.tsx',
    'toggle-pages.tsx',
    'page-button.tsx',
]

ROOT = '/mnt/wsl/erin_app/components/editor'

EXCLUDE_PATHS = [
    os.path.join(ROOT, 'base'),
    os.path.join(ROOT, 'bottom-float'),
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
        code.replace(
            'import { ICON_SIZE } from "../../base/contants";\n',
            'import { Dispatch } from "redux";\nimport { RootState } from "../../../../redux/root-reducer";\n'
        )
        code.replace(
            'import { ICON_SIZE } from "../../base/contants"\n',
            'import { Dispatch } from "redux";\nimport { RootState } from "../../../../redux/root-reducer";\n'
        )
        component_name = re.compile('export default ([a-z]+)').findall(code)[0]
        code.replace(
            f'export default {component_name}',
            'const mapStateToProps = (state: RootState) => { \n  return {\n    iconSize: state.editor.settings.iconSize,\n  }\n}'
        )
