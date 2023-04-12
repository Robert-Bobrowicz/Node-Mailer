import express from "express";
import path from "path";
import chalk from "chalk";
import { sendEmail } from "../services/email-service.js"


const app = express();
const userEmails = [];

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.resolve() + '/views/home.html');
});
app.post('/', (req, res) => {
    const { email } = req.body;
    userEmails.push(email); console.log(userEmails);
    console.log(chalk.greenBright('New email has been added to users email table: ', userEmails));

    sendEmail(email);
    res.sendFile(path.resolve() + '/views/thanks.html');
});

app.listen(3000, () => { console.log(chalk.redBright('Server is running on PORT: 3000')) });