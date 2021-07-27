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
    code = code.replace(')' + '}', '}' + ')')
    with open(filepath, 'w') as wf:
        wf.write(code)