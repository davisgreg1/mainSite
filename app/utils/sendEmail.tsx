import emailjs from '@emailjs/browser'
import Swal from "sweetalert2";

const sendEmail = async (options: any) => {
  const { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_API_KEY } = options;

  try {
    const result = await emailjs.sendForm(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      ".form-element",
      EMAIL_API_KEY,
    );
    return result.text === "OK"
      ? Swal.fire({
          title: "Thank you!",
          text: "I received your message and will get back to you as soon as possible.",
          icon: "success",
          background: "#1696e0",
          color: "#fff",
        })
      : Swal.fire({
          title: "Oops...",
          text: "Something went wrong!",
          background: "#1696e0",
          color: "#fff",
          icon: "error",
          footer: "Try again.",
        });
  } catch (error) {
    return Swal.fire({
      title: "Yikes...",
      text: "Something went wrong!",
      background: "#1696e0",
      color: "#fff",
      icon: "error",
      footer: "Try again.",
    });
  }
};

export default sendEmail
