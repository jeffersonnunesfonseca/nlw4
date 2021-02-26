import nodemailer, { Transporter } from 'nodemailer';
import handleBars from 'handlebars';
import fs from 'fs';

class SendMailService {
    private client: Transporter;

    //contrutor nao permite usar async wait
    constructor(){
        nodemailer.createTestAccount().then((account)=>{
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth:{
                    user: account.user,
                    pass: account.pass
                }
            })

            this.client = transporter;

        })

    }

    async execute(to: string, subject: string, vars: object,path: string){

        //pega dir exato da app
        // const npsPath = resolve(__dirname,"..","views","emails","npsMail.hbs");
        const templateFileContents = fs.readFileSync(path).toString("utf8");

        const mailTemplateParse = handleBars.compile(templateFileContents);
        const html = mailTemplateParse(vars);

        const message = await this.client.sendMail({
            to,
            subject,
            html: html,
            from: "NPS <noreaply@nps.com.br>"
        });

        console.log('Message sent: %s', message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));

    }

}

export default new SendMailService();