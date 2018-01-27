mkdir ./temp
curl -s https://api.github.com/repos/hakimel/reveal.js/releases/latest \
| grep zipball_url \
| cut -d : -f 2,3 \
| tr -d \", \
| wget -i - -P ./temp -O tmp.zip
unzip -d temp/ tmp.zip && rm tmp.zip
mkdir ./revealJS
cp ./temp/*/index.html ./revealJS/index.html
# sed -i "s/dependencies\:\ \[/dependencies\:\[\{src:\'plugin\/xapi\/xapi\.js\'\}\,/g" ./revealJS/index.html
cp -r ./temp/*/js ./revealJS/js
cp -r ./temp/*/css ./revealJS/css
cp -r ./temp/*/lib ./revealJS/lib
cp -r ./temp/*/plugin ./revealJS/plugin
mkdir ./revealJS/plugin/xapi/
rm -rf ./temp
node ./scripts/addPlugin.js