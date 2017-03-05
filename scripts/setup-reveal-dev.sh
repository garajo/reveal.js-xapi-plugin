git clone https://github.com/hakimel/reveal.js.git
cd reveal.js
npm i
cd ..
cp -f ./dev_env/index.html ./reveal.js/
cp -f ./dev_env/reveal.scss ./reveal.js/css/
cp -f ./dev_env/.local-web-server.json ./
cp -r -f ./dev_env/mocks ./
cd reveal.js
grunt css-core
cd ..
npm run build:plugin
