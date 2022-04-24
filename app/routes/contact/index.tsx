import React, { useEffect, useState } from "react";
import {
  redirect,
  LinksFunction,
  MetaFunction,
  ActionFunction,
  useActionData,
  useTransition,
  useLoaderData,
  json,
  Form,
} from "remix";
import MyMap from "~/components/MyMap";
import sendEmail from "~/utils/sendEmail";
import SocialFooter from "~/components/SocialFooter";
import styles from "~/styles/contact.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: `Contact - Greg | FullStack Developer`,
    description: `Contact Greg`,
  };
};

export function loader() {
  return {
    GOOGLE_MAP_ID: process.env.GOOGLE_MAP_ID,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
    EMAIL_API_KEY: process.env.EMAIL_API_KEY,
  };
}

export const unstable_shouldReload = () => false;

type FormErrorType = {
  name?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const errors: FormErrorType = {};
  if (!name) errors.name = true;
  if (!email) errors.email = true;
  if (!subject) errors.subject = true;
  if (!message) errors.message = true;

  if (Object.keys(errors).length) {
    return json(errors, { status: 422 });
  }

  return redirect("/contact");
};

const Contact = () => {
  const errors = useActionData();
  const transition = useTransition();
  const loaderData = useLoaderData();
  const { EMAIL_API_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID } = loaderData;
  const options = {
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    EMAIL_API_KEY,
  };
  const { state } = transition;
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (name && email && subject && message) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, subject, message]);
  useEffect(() => {
    if (transition.state === "submitting") {
      clearForm();
    }
  }, [transition]);

  const portfolioBackImgStyle = {
    // backgroundImage: `url(${portfolioBackImg})`,
    backgroundColor: "#ecf0f3",
    backgroundSize: "contain",
    backgroundRepeat: "round",
    display: "flex",
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleOnInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    inputName: string,
  ) => {
    const value = e.target.value;
    if (inputName === "name") {
      setName(value);
    }
    if (inputName === "email") {
      setEmail(value);
    }
    if (inputName === "subject") {
      setSubject(value);
    }
    if (inputName === "message") {
      setMessage(value);
    }
  };

  const text =
    !email || !subject || !message || !name
      ? "Complete the form"
      : transition.state === "submitting"
      ? "Sending..."
      : transition.state === "loading"
      ? "Thank you!"
      : "Send message";

  const customOptions = {
    mapTypeControl: false,
    zoom: 15,
    clickableIcons: false,
    panControl: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    zoomControl: false,
    fullscreenControl: false,
  };

  return (
    <div className="container">
      <div className="content">
        <section
          id="section-contactMe"
          className="section-content section section-child "
          style={portfolioBackImgStyle}>
          <div className="contact-container">
            <div className="form-container">
              <Form
                method="post"
                className="form-element"
                onSubmit={() => sendEmail(options)}>
                <div className="contact-div">
                  <div className="title">Contact me</div>
                  <div className="fields">
                    <div className="form-name">
                      <input
                        type="username"
                        className="user-input"
                        name="name"
                        value={name}
                        placeholder={name ? name : "Name"}
                        onChange={(e) => handleOnInputChange(e, "name")}
                        autoFocus={true}
                      />
                    </div>
                    <div className="form-email">
                      <input
                        type="email"
                        name="email"
                        className="user-input"
                        value={email}
                        placeholder={email ? email : "Email"}
                        onChange={(e) => handleOnInputChange(e, "email")}
                      />
                    </div>
                    <div className="form-subject">
                      <input
                        type="username"
                        name="subject"
                        className="user-input"
                        value={subject}
                        placeholder={subject ? subject : "Subject"}
                        onChange={(e) => handleOnInputChange(e, "subject")}
                      />
                    </div>
                    <div className="form-message">
                      <textarea
                        id="message"
                        className="user-input"
                        name="message"
                        rows={3}
                        value={message}
                        placeholder={message ? message : "Email body"}
                        onChange={(e) => handleOnInputChange(e, "message")}
                      />
                    </div>
                  </div>
                  <button
                    className={
                      isDisabled ? "send-msg-btn-disabled" : "send-msg-btn"
                    }
                    disabled={isDisabled}
                    type="submit">
                    <span>{text}</span>
                  </button>
                </div>
              </Form>
            </div>
            <MyMap customOptions={customOptions} />
          </div>
        </section>
        <footer className="contact-footer-container">
          <SocialFooter />
        </footer>
      </div>
    </div>
  );
};

export default Contact;
