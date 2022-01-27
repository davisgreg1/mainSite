const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

const GMAIL_EMAIL = process.env.GMAIL_EMAIL
const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID
const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET
const GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN
const GMAIL_REDIRECT_URL = process.env.GMAIL_REDIRECT_URL

const oauth2Client = new OAuth2(
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  GMAIL_REDIRECT_URL
)

oauth2Client.setCredentials({
  refresh_token: GMAIL_REFRESH_TOKEN
})

const accessToken = oauth2Client.getAccessToken()

export async function sendEmail (data:any) {
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: GMAIL_EMAIL,
      clientId: GMAIL_CLIENT_ID,
      clientSecret: GMAIL_CLIENT_SECRET,
      refreshToken: GMAIL_REFRESH_TOKEN,
      accessToken: accessToken
    }
  })

  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`)
  })

  let mailOptions = {
    from: data?.email,
    to: GMAIL_EMAIL,
    subject: data?.subject,
    text: `${data?.message} \n\n from: ${data?.email} \n\n name: ${data?.name}`
  }

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log('Error Sending Email:', err)
    } else {
      console.log('email info:', info)
    }
    transporter.close()
  })

  return data
}
