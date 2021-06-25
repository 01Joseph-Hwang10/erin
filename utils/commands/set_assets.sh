
ROOT='/mnt/wsl/erin_app'
FROM='/mnt/c/Users/josep/storage/assets'

if [ -d $FROM ]; then
    cp -rf $FROM $ROOT
    echo 'Assets loaded!'
else
    echo 'No assets found'
fi

