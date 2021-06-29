import os

ROOT = '/mnt/wsl/erin_app'
FONTS_DIR = f'{ROOT}/assets/fonts/'
FONT_DATA = f'{ROOT}/components/editor/bottom-float/font-style-members/font-style.data.ts'

for _, __, filenames in os.walk(FONTS_DIR):
    with open(FONT_DATA, 'w') as wf:
        wf.write('\n'.join([
            '',
            'const fontStyles: string[] = [',
            *[f'  "{filename.split(".")[0]}",' for filename in filenames],
            '];',
            '',
            'export default fontStyles;'
        ]))
    break
