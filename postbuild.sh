#!/bin/bash

rm -rf ./.amplify-hosting
mkdir -p ./.amplify-hosting/compute/default

# express server 파일 복사
cp server.js ./.amplify-hosting/compute/default/server.js
yarn install --modules-folder ./.amplify-hosting/compute/default/node_modules

# storybook 복사
cp -r storybook-static ./.amplify-hosting/compute/default/storybook-static

# deploy-manifest 파일 복사
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.jsons