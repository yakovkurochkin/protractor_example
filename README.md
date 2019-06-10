# Protractor Example
An example [Protractor](http://protractortest.org) project, that includes tests for https://github.com/tourdedave/the-internet

## Example Protractor project that:
* Makes use of page objects
* Runs tests in docker
* View test process with VNC

## Setup:
* Install [Node](http://nodejs.org) (v10.x.x or later)
* Install [Docker](https://www.docker.com/)
* `docker run -d -p 4444:4444 -p 5900:5900 -v /dev/shm:/dev/shm selenium/standalone-chrome-debug:3.141.59-palladium`
* `git clone https://github.com/yakovkurochkin/protractor_example.git`
* `cd protractor_example`
* `npm i` to install the project dependencies

## Run tests:
* run tests via plain Protractor `node_modules/.bin/protractor conf.js`
* run tests via `npm test`

## VNC 
* Install VNC client (https://www.realvnc.com/en/connect/download/viewer/)
* Connect with address `127.0.0.1:5900` and password `secret`