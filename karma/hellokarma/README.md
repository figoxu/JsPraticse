sudo cnpm install -g karma
sudo yarn global add karma

sudo karma init

sudo chown -R $(whoami) /usr/local/lib/node_modules/


cnpm install karma-chrome-launcher --save-dev
cnpm install karma-jasmine --save-dev
sudo cnpm install -g karma-cli
sudo karma start

karam参考资料
http://karma-runner.github.io/1.0/index.html