This is a simple application that renders data from a mongodb using node/express/ejs.  

it was built on my mac so you'll have to change scripts as needed.


1. Install pre-reqs on the MAC

    For the MAC, install Brew from from here:

    http://brew.sh/

2. Mongo scripts in /mongo which should be run in order form terminal:

    install.sh - install mongdodb and create the directory for the datbase files
    start.sh   - starts up the mongo database
    Open another window and then run this command to seed the database with data:
    
    import.sh  - imports the sample datbase for the app

3. Start the app:

node app.js

4. To stop mongo, open up another terminal window and use these commands:

mongo
use admin
db.shutdownServer()
