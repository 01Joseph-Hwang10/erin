import os
from constants import ROOT
import re

TARGET = os.path.join(ROOT, 'assets/stickers/stickers-component')

for filename in os.listdir(TARGET):
    filepath = os.path.join(TARGET, filename)
    with open(filepath, 'r') as rf:
        code = rf.read()
    code = code.replace(re.compile(r'function [a-zA-Z0-9]+\(props\: SvgProps\) {').findall()[0], '\n'.join([
        'interface SvgStickerProps extends SvgProps {',
        '  baseScale: number',
        '}',
        '',
        'const %s: React.FC<SvgStickerProps> = (props) => {' % filename.split('.')[0],
        ''
    ]))