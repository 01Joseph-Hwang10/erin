
ROOT='/mnt/wsl/erin_app'
FROM='/mnt/c/Users/josep/storage/fonts'
TO="$ROOT/assets"

cd $ROOT
if [ ! -d 'assets' ]; then
    mkdir assets
fi

cd assets

if [ ! -d 'fonts' ]; then
    mkdir fonts
fi

cp -rf $FROM $TO

