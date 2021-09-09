import requests
import os
from functools import reduce
from constants import ROOT
from tqdm import tqdm

print('Initializing...')

API_URL_BASE = "https://api.figma.com"
TARGET = os.path.join(ROOT, "assets/stickers/stickers-svg")

def resolve_url(endpoint: str) -> str:
    return "%s%s" % (API_URL_BASE, endpoint)

headers = {
    "X-FIGMA-TOKEN": "235402-79c4f80e-2dba-49b2-8bbb-aaf0605db035"
}

print('Loading project file...')

project = requests.get(url=resolve_url('/v1/projects/%s/files' % "27427624"), headers=headers).json()['files'][0]

key = project['key']

print('Loading canvas...')

canvas = requests.get(
    url=resolve_url('/v1/files/%s' % key), 
    headers=headers
).json()['document']['children'][0]

sticker_ids = []

print('Collecting image ids...')

for sticker_group in tqdm(canvas['children'], desc="Collecting image ids"):
    stickers = sticker_group['children'][0]['children']
    for sticker in stickers:
        sticker_id = sticker['id']
        sticker_ids.append(sticker_id)

print('Resolving image urls...')

images = requests.get(
    url=resolve_url('/v1/images/%s' % key), 
    headers=headers, 
    params={
    "ids": reduce(lambda acc, cur: acc + cur + ',', sticker_ids, "")[0:-1],
    "format": "svg"
    }
).json()['images']

print('Writing svg files...')

for image_id, image_url in tqdm(images.items(), desc="Writing svg files"):
    sticker_name = 'Sticker%s.svg' % image_id.replace(':', '-')
    sticker_svg = requests.get(url=image_url, headers=headers).content
    with open(os.path.join(TARGET, sticker_name), 'wb') as wf:
        wf.write(sticker_svg)

print('Task successfully done!')
