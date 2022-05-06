const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const nodemailer = require("nodemailer");
const email = "pmg.systems@outlook.com";
const password = "maoaulfonawhfbqd";
const mailTransport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: email,
        pass: password,
    },
});

mailTransport.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

exports.sendEmail = functions.firestore
    .document("contato/{pushId}")
    .onCreate((snap, context) => {
        const contato = snap.data();
        const mailOptions = {
            from: "pmg.systems@outlook.com",
            to: "pmg.systems@outlook.com",
            replyTo: contato.email,
            subject: contato.assunto,
            text: "Nome: " + contato.nome + "\nTelefone: " + contato.telefone + "\n\n" + contato.mensagem,
        };

        try {
            mailTransport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    functions.logger.error("There was an error while sending the email " + contato.assunto + " to " + contato.email, error);
                    return console.log(error);
                }

                functions.logger.log("Email sent to:", contato.email);
            });
        } catch (error) {
            functions.logger.error("There was an error while sending the email " + contato.assunto + " to " + contato.email, error);
        }

        return 0;
});

exports.sendOrcamento = functions.firestore
    .document("orcamento/{pushId}")
    .onCreate((snap, context) => {
        const orcamento = snap.data();
        const mailOptions = {
            from: "pmg.systems@outlook.com",
            to: "pmg.systems@outlook.com",
            replyTo: orcamento.email,
            subject: orcamento.tipo,
            text: "Nome: " + orcamento.nome + "\nTelefone: " + orcamento.telefone + "\n\n" + orcamento.mensagem,
        };

        try {
            mailTransport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    functions.logger.error("There was an error while sending the email " + orcamento.assunto + " to " + orcamento.email, error);
                    return console.log(error);
                }

                functions.logger.log("Email sent to:", orcamento.email);
            });
        } catch (error) {
            functions.logger.error("There was an error while sending the email " + orcamento.assunto + " to " + orcamento.email, error);
        }

        return 0;
});