import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import sqlite from "sqlite3";

const port = 5500;
const hostname = '127.0.0.1';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});
app.get("/calendar", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/calendar.html'));
});
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/dashboard.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.post("/checksearch", function (req, res) {
    console.log(req.body);
});
// res.json({[].[]})