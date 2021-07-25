import requests
from bs4 import BeautifulSoup
import os
from constants import ROOT
import re

COLOR_DATA = f'{ROOT}/src/color-palette.ts'
WEB_URL = 'https://www.w3.org/TR/css-color-3/'

web = requests.get(WEB_URL)
parsed = BeautifulSoup(web.text, 'html.parser')

# There are two table class-named colortable, one is basic one, and another one is extended
color_table = parsed.find_all('table', {'class': 'colortable'})[1]

named_colors = [
    dfn.text for dfn in color_table.find_all('dfn')
]

colors = re.compile('(#[A-Za-z0-9]{6})').findall(color_table.text)


with open(COLOR_DATA, 'w') as wf:
    wf.write('\n'.join([
        '',
        'export type NamedColors = ',
        *[f'  | "{named_color}"' for named_color in named_colors],
        '',
        'export const namedColors: NamedColors[] = [',
        *[f'  "{named_color}",' for named_color in named_colors],
        '];',
        '',
        'export const colors = [',
        *[f'  "{color}",' for color in colors],
        '];',
        '',
    ]))
