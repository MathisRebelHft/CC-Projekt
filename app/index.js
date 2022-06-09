const app = require('express')();

const userAction = async () => {
    const response = await fetch('http://example.com/movies.json');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
}
var exec = require('child_process').exec;


// -----------Stack overflow magic-------------------------------------
const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules

// runs linux command to find ip
const ipadress = execSync('hostname -I', { encoding: 'utf-8' });  // the default is 'buffer'


app.get('/', (req, res) =>
    res.json({ message: `Docker is easy 🐳: a message from ${ipadress}` })
);

const port = 5000;
app.listen(port, 'web', () => console.log(`app ${ipadress} listening version:2`));