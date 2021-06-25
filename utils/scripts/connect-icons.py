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
        # try:
        #     import_part = re.compile(
        #         'import { ICON_SIZE } from "../../base/contants";').findall(code)[0]
        #     code = code.replace(
        #         import_part,
        #         '\n'.join([
        #             'import { Dispatch } from "redux";',
        #             'import { RootState } from "../../../../redux/root-reducer";',
        #             'import { connect, ConnectedProps } from "react-redux";',
        #             'import { ICON_COLOR } from "../../base/constants;"'
        #         ])
        #     )
        code = code.replace('import { ICON_COLOR } from "../../base/constants;"',
                            'import { ICON_COLOR } from "../../base/constants"')
        # except:
        #     import_part = re.compile('\n*const').findall(code)[0]
        #     code = code.replace(
        #         import_part,
        #         '\n'.join([
        #             '',
        #             'import { Dispatch } from "redux";',
        #             'import { RootState } from "../../../../redux/root-reducer";',
        #             'import { connect, ConnectedProps } from "react-redux";',
        #             'import { ICON_COLOR } from "../../base/constants;"',
        #             '',
        #             'const'
        #         ])
        #     )
        # dispatch_part = 'import { Dispatch } from "redux";\n'
        # code = code.replace(
        #     dispatch_part,
        #     ''
        # )
        # declaration_part = re.compile(
        #     'const %s: React.FC = \({' % component_name).findall(code)[0]
        # code = code.replace(
        #     declaration_part,
        # '\n'.join(
        #     ['type %sReduxProps = ConnectedProps<typeof connector>' % component_name,
        #      '',
        #      'interface %sProps extends %sReduxProps {}' % (
        #          component_name, component_name),
        #      '',
        #      'const %s: React.FC = ({' % component_name,
        #      '  iconSize',
        #      '}) => {']
        # )
        #     'const %s: React.FC<%sProps> = ({' % (
        #         component_name, component_name)
        # )
        # export_part = re.compile(
        #     f'export default {component_name}').findall(code)[0]
        # code = code.replace(
        #     export_part,
        # '\n'.join([
        #     'const mapStateToProps = (state: RootState) => {',
        #     '  return {',
        #     '    iconSize: state.editor.settings.iconSize,',
        #     '  }',
        #     '}',
        #     '',
        #     'const connector = connect(mapStateToProps, { });',
        #     '',
        #     export_part,
        # ])
        # 'export default connector(%s)' % component_name
        # )
        # if button_type == 'press':
        #     size_part = re.compile('size={ICON_SIZE}').findall(code)[0]
        #     code = code.replace(
        #         size_part,
        #         'size={iconSize}'
        #     )
        #     color_part = re.compile('color="white"').findall(code)[0]
        #     code = code.replace(
        #         color_part,
        #         'color={ICON_COLOR}'
        #     )
        with open(file, 'w') as wf:
            wf.write(code)
