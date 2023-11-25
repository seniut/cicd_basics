const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});

const args = process.argv.slice(2);

//requiring path and fs modules
const fs = require('fs');
//joining path of directory
const directoryPath = args[0];
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log("File is:")
        console.log(file);

        // Extract SQL queries from files. Assumes no ';' in the fileNames
        var query = fs.readFileSync(directoryPath.concat(file)).toString()

        console.log("Query is:")
        console.log(query)

        pgclient.connect();
        pgclient
            .query(query)
            .then(res => {
                console.log(res)
                console.log('%s script have been successfully executed', file);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                pgclient.end();
            });
    });
});
