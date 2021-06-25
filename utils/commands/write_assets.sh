
ROOT='/mnt/wsl/erin_app'
FROM="$ROOT/assets"
TO="/mnt/c/Users/josep/storage"

if [ -d $FROM ]; then
    cp -rf $FROM $TO
    echo "Assets saved!"
else
    echo "No assets found"
fi
