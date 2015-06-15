This is a simple application that renders data from a mongodb using node/express/ejs.
It provides basic sh script to create the mongodb and seed it from a data file.

it was built on my mac so you'll have to change scripts as needed if you re running on another OS.

0. Clone the repo and use 'npm install' to pull in the pre-reqs

1. I used brew to you'll need to install that from here:

    http://brew.sh/

2. Mongo scripts in /mongo which should be run in order form terminal:

    install.sh - install mongdo db and create the data directory for the datbase files
    start.sh   - starts up mongodb
    
3. Open another terminal window and then run this command to seed the database with data:
    
    import.sh  - imports the sample datbase for the app

4.1: Install the node pages

npm install


4.5.1: Run the default gulp command to build the public directory:

gulp


4.x: Start the app:

node app.js

5. To stop mongo, open up another terminal window and use these commands:

mongo
use admin
db.shutdownServer()



Reference
---------

install bowser as a super user using npm:

npm install -g bower

install react using bower:

bower install --save react

Using Babel
-----------

Now using Babel to transform JSX & ES6 files

install babel:

sudo npm install -g babel

Ref:

http://chuckconway.com/2015/02/21/using-javascript-6-getting-started-today-with-babel-js/

Gulp for JSHint check
---------------------

Use this command to check the JavaScript files look good:

gulp jshint

Use this command to delete generted files:

gulp clean


Tools used
----------

npm install -g jshint