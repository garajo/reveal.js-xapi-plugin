#!/bin/sh

cp -r ./revealJS/ dist/demo
cp ./presentations/*.html ./dist/demo/
cd dist
bestzip ./demo.zip ./demo
cd ..
rimraf ./dist/demo
