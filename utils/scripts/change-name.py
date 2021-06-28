import os

ROOT = '/mnt/wsl/erin_app/components'

for (path, dirs, filenames) in os.walk(ROOT):

    for filename in filenames:
        file = os.path.join(path, filename)
        with open(file, 'r') as rf:
            code = rf.read()
        code = code.replace(
            'state.editorGeneric',
            'state.editor.generic'
        )
        with open(file, 'w') as wf:
            wf.write(code)
