# NODEJS BASE PROJECT
## NodeJs base project example
### Dependencies: dotenv, mariadb, winston  
### Dev dependencies: dangerJs, mochaJs, standardJs

We'll be using [standard js](https://standardjs.com/) as style guide, linter and formatter.   

Take a look at the web page, the module is installed with the project automatically (in dev only).  
As it is installed locally you can check errors with `npx standard` (It will launch as well when running the tests).  
You can also do `npx standard --fix` to auto-fix small problems like indentation, commas, and other that sort of things.  

---
### Install
First of all, you will need `node` and `npm` installed.
Once cloned do:
```
npm install
```
Then copy the `.env.example` to `.env` and change the config.
This is the current production config:  
```.env
# SERVER CONFIG

# enviorments available: production, testing 
ENV=testing

# DATABASE CONFIG
# connectors available: mariadb, none (won't save data)
DB_CONNECTOR=mariadb
DB_HOST=localhost
DB_USER=root
DB_PASS=root
```
After that you can start the server. If you are using `Visual Studio Code` it will likelly start by clicking in the `Debug > Launch Program`. You can also launch the program with:
```
npm start
```
tests can be lauched with:
```
npm test
```

