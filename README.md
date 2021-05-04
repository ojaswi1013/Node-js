# Node-js
Complete course for node js from scratch
trying to make and implement

For setting up the project, there are some basic requirements to be fulfilled:

1. As the name suggests, one must have node.js installed on the system.
2. For developement purposes, the project also uses nodemon.
3. Express-js is also used to further simplify the code and let all the functionalities run in background
4. For database management, a MySQL server was used, hence a separate package was downloaded for its support too.
5. To integrate functionalities of MySQL into JS, instead of writing queries, we download sequelize package also.
6. Currently for front-end, EJS is being used, so the package for its support is required too.

The following commands were used to enable all the functionalities stated above in the CWD of whichever Number the person wants to run:

    npm install -g nodemon
    npm install --save express
    npm install --save body-parser
    npm install --save ejs
    npm install --save mysql2
    npm install --save sequelize