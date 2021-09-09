import os
from pathlib import Path

ROOT = Path(os.path.dirname(os.path.abspath(__file__))).parent.parent.parent.absolute()
COMPONENTS_ROOT = os.path.join(ROOT, 'assets/stickers/stickers-component')
