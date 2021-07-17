
ROOT='/mnt/wsl/erin_app'
FROM='/mnt/c/Users/josep/storage/assets'
# ASSETS="$ROOT/assets"
ANDROID_MAIN="$ROOT/android/app/src/main"
# ANDROID_ASSETS="$ANDROID_MAIN/assets"

if [ -d $FROM ]; then
    cp -rf $FROM $ROOT
    cp -rf $FROM $ANDROID_MAIN
    echo 'Assets loaded!'
else
    echo 'No assets found'
fi

