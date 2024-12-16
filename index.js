import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import sqlite3 from "sqlite3";

//ehe stuff
import bodyParser from 'body-parser';

// var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(".database/events.db");

const port = 5500;
const hostname = '127.0.0.1';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/dashboard.html'));
});
app.get("/recent", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/recent.html'));
});
app.get("/calendar", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/calendar.html'));
});

app.post("/performsearch", function (req, res) {
    // console.log("here");
    console.log(req.body.search);
    db.all("SELECT * FROM events WHERE date LIKE ? OR month LIKE ? OR eventtype LIKE ? OR eventname LIKE ?", [`%${req.body.search}%`, `%${req.body.search}%`,`%${req.body.search}%`,`%${req.body.search}%`], function(err, rows) {
        if (err) {
            console.log(err);
        }
        let validResults=[];
        for(let i = 0; i < rows.length; i++) {
            // console.log(rows[i].eventname);
            validResults.push([rows[i].date, rows[i].month, rows[i].eventname]);
        }
        console.log(validResults);
        res.json(validResults);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});