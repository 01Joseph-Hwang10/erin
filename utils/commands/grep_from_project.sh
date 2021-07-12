
ROOT='mnt/wsl/erin_app'

cd $ROOT

grep -r --exclude-dir=node_modules --exclude-dir=android --exclude-dir=ios --exclude-dir='.vscode' --exclude-dir='.expo' --exclude-dir=assets --exclude="package.json" --exclude="package-lock.json" --exclude=".gitignore" --exclude=".gitattributes" --exclude=".eslintrc.js" --exclude=".buckconfig" --exclude="tsconfig.json" "$1"
