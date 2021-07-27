import os
from constants import ROOT
import re

TARGET = os.path.join(ROOT, 'assets/stickers/stickers-component')

def indent(str, indent):
    return ' ' * indent + str

for filename in os.listdir(TARGET):
    filepath = os.path.join(TARGET, filename)
    with open(filepath, 'r') as rf:
        code = rf.read()
    returns = re.compile(r'<View.*(<Svg.*</Svg>).*</View>', re.DOTALL).search(code)
    root = returns.group(0)
    svg = returns.group(1)
    code = code.replace(root, svg)
    width = re.compile(r'// width: ([0-9]+)').search(code).group(1)
    height = re.compile(r'// height: ([0-9]+)').search(code).group(1)
    code = code.replace(r'width={"100%"}', 'width={ %s * baseScale * lastScale }' % width )
    code = code.replace(r'height={"100%"}', 'height={ %s * baseScale * lastScale }' % height )
    code = code.replace(r'import { View } from "react-native";' + '\n', '')
    # print(code)
    with open(filepath, 'w') as wf:
        wf.write(code)