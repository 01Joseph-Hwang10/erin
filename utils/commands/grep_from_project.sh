
ROOT='/Users/hwanghyeongyu/Documents/projects/erin_app'
CMDARG='-inR'
SEARCH=$1

cd $ROOT

if [ $# -eq 2 ]; then
    if [ $1 = "-e" ]; then
        CMDARG='-nRw'
        SEARCH=$2
    fi
fi

grep $CMDARG -E --include='*.ts' --include='*.tsx' --exclude-dir=node_modules $SEARCH *
