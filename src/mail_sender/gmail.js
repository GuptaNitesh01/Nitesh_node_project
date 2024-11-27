// const nodemailer = require('nodemailer');

// const main = async (req, res) => {
//   const mailFrom = req.body.mailFrom;
//   const mailTo = req.body.mailTo;
//   const mailSubject = req.body.mailSubject;
//   const mailMessage = req.body.mailMessage;

//   try {
//     // Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "guptanitesh0102@gmail.com", // Ensure you are using an app password, not your actual Gmail password
//         pass: "dqij lele idmv wqli", // Replace this with your Gmail app password
//       },
//     });

//     // Sending mail
//     const info = await transporter.sendMail({
//       from: mailFrom,
//       to: mailTo,
//       subject: mailSubject,
//       text: mailMessage,
//     });

//     console.log("Mail sent successfully:", info);

//     // Database insertion
//     const { get_pg_connection } = require('../base/pg_connector');
//     const client = await get_pg_connection();

//     try {
//       const status = info.accepted.length > 0 ? "accepted" : "rejected";

//       await client.query(
//         'INSERT INTO email_stats(email_response_id, mailFrom, mailTo, mailSubject, mailMessage, status) VALUES ($1, $2, $3, $4, $5, $6)',
//         [info.messageId, mailFrom, mailTo, mailSubject, mailMessage, status]
//       );

//       const result = await client.query('SELECT * FROM email_stats');
//       res.send(`Data inserted successfully: ${JSON.stringify(result.rows)}`);
//     } catch (dbErr) {
//       console.error("Database Error:", dbErr);
//       res.status(500).send(`Error inserting data: ${dbErr.message}`);
//     } finally {
//       client.end(); // Ensure client connection is closed
//     }
//   } catch (err) {
//     console.error("Error sending email:", err);
//     res.status(500).send(`Error sending email: ${err.message}`);
//   }
// };

// module.exports = {
//   main,
// };



const main = async(req,res) => {
  const mailFrom=req.body.mailFrom;
  const mailTo=req.body.mailTo; 
  const mailSubject=req.body.mailSubject;
  const mailMessage=req.body.mailMessage;

     async function  main1(callback){

       const nodemailer = require('nodemailer');
       const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, 
        auth: {
          user: "guptanitesh0102@gmail.com",
          pass: "dqij lele idmv wqli",
        },
      });
      const info = await transporter.sendMail({
              from: mailFrom,
              to: mailTo,
              subject: mailSubject,
              text: mailMessage,
              // attachments: mailAttachments
            });
          console.log(info);
          callback(info)
          return
     }

     main1(async(info)=>{
       const {getPGConnection}=require('../base/pg_connector');
       let  client=await getPGConnection();

       
       if (info.messageSize&&info.accepted&&info.messageTime) {
         const done= info.accepted.length
        //  const reject= info.rejected.length
         var status
         if (done) {
          status="accepted"

        }else{
          status="rejected"
        }
         const result=await client.query('insert into email_stats(email_response_id,mail_from,mail_to,subject,message)  values($1,$2,$3,$4,$5)', [info.email_response_id,mailFrom,mailTo,mailSubject,mailMessage]
          ,async function(err,data){
             console.log('runn');
           if(err){
               console.log("Error",err);
               res.send(`ERROR in inserting the vlaue:-  ${err}`);
           } else{
                const result1=await client.query('select * from email_stats')
                 
                  //  res.send(`Data inserted successfully:- ${JSON.stringify(data)}`)
                  res.send(`Data inserted successfully:- ${JSON.stringify(result1.rows)}`)

               
           }
    
            client.end();
       }
    );
        }
        
      }
     )
    }


    
module.exports={
    main
}







// const fs = require('fs');
// const nodemailer = require("nodemailer");

// const main = async (req, res) => {
//     // const {t}= req.body;
//     // console.log(to);



//     const {to}= req.body;
//     const {subject} = req.body;
//     const {text} = req.body;
//     const {html} = req.body;
//     const {attachments} = req.body;
//   // Create a transporter object using SMTP transport

//   // async function main1(callback){
    
//   //     console.log("Message sent: %s", info.messageId);
//   //     // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      
//   //   callback()
//   // }

//   // main1(async ()=>{

//   // })

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for port 465, false for other ports
//     auth: {
//       user: "guptanitesh0102@gmail.com",
//       pass: "dqij lele idmv wqli", // Make sure to use environment variables for sensitive information
//     },
//   });

//   // Define the email options including the attachment
//   const mailOptions = {
//     from: '"Maddison Foo Koch 👻" <guptanitesh0102@gmail.com>', // sender address
//     to: to, // list of receivers
//     subject: subject, // Subject line
//     text: text, // plain text body
//     html: html, // html body
//     attachments: [ attachments
//     //   {
//     //     filename: 'example.txt', // Name of the file as it will appear in the email
//     //     // content:"Hello Amish", // Path to the file you want to attach
//     //     path:'D:/task-2/business-img.png'
//     //   },
//       // You can add more attachments here if needed
//     ],
//   };

//   try {
//     // Send mail with defined transport object
//     const info = await transporter.sendMail(mailOptions);
    
//     console.log("Message sent: %s", info.messageId);
    
//     res.send("Email sent successfully!");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).send("Error sending email");
//   }
// };

// module.exports = {
//   main: main,
// };
