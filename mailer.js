const nodemailer            = require('nodemailer')
module.exports.mailer = (options) =>{


    let transporter = nodemailer.createTransport({
        host: process.env.MAILER_HOST,
    //  host:'mail.hamburg-coders.pro',
        port: process.env.MAILER_PORT ,
        secure: false, 
        auth: {
            user: process.env.MAILER_USER, 
            pass: process.env.MAILER_PASS 
        },
        tls:{
            rejectUnauthorized:false
        }
    });


    transporter.sendMail({

        from:       '"web_project " <web_project@support.com>',
        to:         options.email, 
        subject:    options.subject, 
        text:       options.text, 
        html:       `<a href=${options.link}>${options.textForLink}</a>` 

    }, (error, info) => {

        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    });
    
    // transporter.sendMail({

    //     from:       '"web_project " <web_project@support.com>',
    //     to:         options.email, 
    //     subject:    options.subject, 
    //     text:       options.text, 
    //     html:       `<a href=${options.confirmationLink}>hi</a>` 

    // }, (error, info) => {

    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);   
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    // });
    
}