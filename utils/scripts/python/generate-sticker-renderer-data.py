from constants import ROOT
import os

SOURCE = os.path.join(ROOT, "assets/stickers/stickers-component")
TARGET = os.path.join(ROOT, "components/common/stickers/sticker-renderer.data.tsx")

wf = open(TARGET, 'w')

def writeline(str="", indent=0):
    wf.write(" " * indent + str)
    wf.write('\n')

def writelines(lines, indent=0):
    wf.write(
        '\n'.join(
            [
                " " * indent + line for line in lines
            ]
        )
    )
    wf.write('\n')

try:

    stickers = os.listdir(SOURCE)

    writeline('import React from "react";')
    writeline('import { SvgProps } from "react-native-svg";')

    sticker_components = []

    for sticker in stickers:
        sticker_component = sticker.split('.')[0]
        sticker_components.append(sticker_component)
        writeline('import %s from "@assets/stickers/stickers-component/%s"%s' % ( sticker_component, sticker_component, ';' ))

    writeline()
    writeline()

    writeline('export const stickerTable: Record<string, React.FC<SvgProps>> = {')
    for sticker_component in sticker_components:
        writeline("\"%s\": %s ," % ( sticker_component.replace("Sticker", '').replace("D", "-"), sticker_component ) , 2)
    writeline("};")
    writeline()
    writeline('export const stickerIds = Object.keys(stickerTable);')
    writeline()

except Exception as e:
    print(e)

wf.close()
