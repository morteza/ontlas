> WARNING: This is an old installation manual. We've migrated to ES6 and Gulp now.

# Ontlas Server Installation Guide

1. Install mongodb (In ubuntu run the following command: `sudo apt update`, and then `sudo apt install mongodb`).
2. Change current directory to server project directory (i.e., `cd <ontlas_server_dir>`).
3. Run the live-reloading server app on port 8080 by `./gradlew run`.


# Ontlas Client Installation Guide

1. Install nodejs (v7.x) and npm (Follow the following guide if you are using Ubuntu: https://www.metachris.com/2017/01/how-to-install-nodejs-7-lts-on-ubuntu-and-centos/)
2. Install grunt, bower using `sudo npm install -g grunt` and `sudo npm install -g bower`.
3. Change current directory to the client project directory (i.e., `cd <ontlas_client_dir>`).
3. Install dependencies using `bower install`.
4. Install npm dependencies using `npm install`.
5. Run live-reloading client using `grunt serve`.
