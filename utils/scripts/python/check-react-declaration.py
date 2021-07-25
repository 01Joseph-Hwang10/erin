import os
from constants import ROOT
import re

EXCLUDE_DIR = [
    'node_modules',
    'android',
    'ios',
    'utils',
    'assets',
    '.vscode',
    '.expo',
    '__tests__'
]

REGEXP = 'import React[a-zA-Z, \{\}]*from [\"|\']react[\"|\'][;]*'

for root, dirs, files in os.walk(ROOT):
    at_exclude_dir = False
    for exclude_dir in EXCLUDE_DIR:
        if exclude_dir in root.split('/'):
            at_exclude_dir = True
    if at_exclude_dir:
        continue
    for file in files:
        file_ext = file.split('.')[-1]
        if file_ext == 'tsx':
            regex = re.compile(REGEXP)
            file_path = os.path.join(root, file)
            with open(file_path, 'r') as rf:
                code = rf.read()
            if len(regex.findall(code)) == 0:
                print(file_path)

print("search done")
