import emailjs from '@emailjs/browser'

const sendEmail = async (options: any) => {
  const { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_API_KEY } = options

  try {
    const result = await emailjs.sendForm(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      '.form-element',
      EMAIL_API_KEY
    )
    return result
  } catch (error) {
    console.log('error in sendEmail', error)
  }
}

export default sendEmail
