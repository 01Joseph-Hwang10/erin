import os
from constants import COMPONENTS_ROOT
import re

def get_prop(key: str, code: str) -> str:
    search_obj = re.compile('// %s: ([0-9]+)' % key).search(code)
    if search_obj == None:
        return ""
    return search_obj.group(1)


for filename in os.listdir(COMPONENTS_ROOT):

    filepath = os.path.join(COMPONENTS_ROOT, filename)
    with open(filepath, 'r') as rf:
        codes = rf.read()
    width = get_prop('width', codes)
    height = get_prop('height', codes)
    view_box = "0 0 %s %s" % (width, height)
    codes = codes.replace('{...props}', '{...props}\n%sviewBox="%s"' % (' ' * 6, view_box))
    # print(codes)
    with open(filepath, 'w') as wf:
        wf.write(codes)
