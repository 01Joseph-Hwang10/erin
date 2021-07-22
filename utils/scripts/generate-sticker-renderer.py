from constants import ROOT
import os

SOURCE = os.path.join(ROOT, "assets/stickers")
TARGET = os.path.join(ROOT, "components/common/stickers/sticker-renderer.tsx")

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

    stickers = filter(lambda file: os.path.isfile(os.path.join(SOURCE, file)), os.listdir(SOURCE))

    writeline('import React from "react";')

    sticker_components = []

    for sticker in stickers:
        sticker_component = sticker.split('.')[0].replace('-', 'D')
        sticker_components.append(sticker_component)
        writeline('import Sticker%s from "@assets/stickers/%s"%s' % ( sticker_component, sticker, ';' ))

    writeline()
    writeline()

    writelines([
        "interface StickerRendererProps {",
        "  stickerId: string,",
        "}",
        "",
        "const StickerRenderer: React.FC<StickerRendererProps> = ({",
        "  stickerId",
        "}) => {",
    ])

    writeline()

    writeline("switch (stickerId) {", 2)

    for sticker, sticker_component in zip(stickers, sticker_components):
        writeline('case ' + '"' + sticker.split('.')[0] + '"' + ':', 2)
        writeline('return ' + '<Sticker' + sticker_component + ' />' + ';', 4)

    writeline('default:', 2)
    writeline('return <></>;', 4)
    writeline('}', 2)

    writeline()

    writeline("};")

    writeline()

    writeline("export default StickerRenderer;")

except Exception as e:
    print(e)

wf.close()
