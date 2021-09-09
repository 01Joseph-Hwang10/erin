import os
from constants import ROOT

FONTS_DIR = os.path.join(ROOT,'assets/fonts/')
FONT_DATA = os.path.join(ROOT,'components/editor/bottom-float/font-style-members/font-style.data.ts')

for _, __, filenames in os.walk(FONTS_DIR):
    with open(FONT_DATA, 'w') as wf:
        wf.write('\n'.join([
            '',
            'export type FontStyles = ',
            *[f'  | "{filename.split(".")[0]}"' for filename in filenames],
            '',
            '',
            'const fontStyles: FontStyles[] = [',
            *[f'  "{filename.split(".")[0]}",' for filename in filenames],
            '];',
            '',
            'export default fontStyles;'
            '',
        ]))
    break
