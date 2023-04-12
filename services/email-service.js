import nodemailer from "nodemailer";
import chalk from "chalk";

export async function sendEmail(email) {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const message = await transporter.sendMail({
        from: 'Company newsletter <newsletter@company.com>',
        to: email,
        subject: 'First newsletter - thank you for joining us!',
        text: 'Good morning. Thank you for joining us.',
        html: "<b>Good morning.</b><br><br>Thank you for joining us.<br>This is first newsletter we sent to you. In future we will send some more emails but you always have a right to remove your email from our database in case you don't want to receive more emails.<br><h5>Working subject: Scope of the Company Ltd.</h5>Company Ltd. was established in May 1945, only few days after the II World War had finished."
    });

    console.log(chalk.yellow(`Welcome email has been send to a new user: ${email}`));
    console.log('See details: ', nodemailer.getTestMessageUrl(message));
};