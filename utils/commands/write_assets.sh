
ROOT=$(pwd)
FROM="$ROOT/assets"
TO="~/storage"

if [ -d $FROM ]; then
    cp -rf $FROM $TO
    echo "Assets saved!"
else
    echo "No assets found"
fi
