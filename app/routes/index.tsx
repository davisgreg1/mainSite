import React, { useEffect, useState } from "react";
import {
  redirect,
  LinksFunction,
  MetaFunction,
  ActionFunction,
  useTransition,
  useLoaderData,
  json,
  Form,
} from "remix";
import { useMediaQuery } from "react-responsive";
import styles from "~/styles/index.css";
import Particles from "react-tsparticles";
import particlesConfig from "~/particlesConfig";
import MyFlipBook from "../components/MyFlipBook";
import MyMap from "../components/MyMap";
import CloudTagComp from "../components/CloudTagComp";
import BlogWall from "../components/BlogWall";
import sendEmail from "~/utils/sendEmail";
import { fetchContentfulData } from "~/utils/fetchContentfulData";

type FormErrorType = {
  name?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
};

type KeyLogType = {
  key?: boolean;
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

  return redirect("/");
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      type: "text/css",
      charSet: "UTF-8",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    },
  ];
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: `Home - Greg | FullStack Developer`,
    description: "Welcome to my site",
  };
};

export async function loader() {
  const blogs = await fetchContentfulData(
    process.env.CONTENTFUL_SPACE_ID,
    process.env.CONTENTFUL_DELIVERY_TOKEN,
  );
  return {
    GOOGLE_MAP_ID: process.env.GOOGLE_MAP_ID,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
    EMAIL_API_KEY: process.env.EMAIL_API_KEY,
    blogs: blogs,
  };
}
export const unstable_shouldReload = () => false;
export default function IndexRoute() {
  const transition = useTransition();
  const loaderData = useLoaderData();
  const { EMAIL_API_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, blogs } =
    loaderData;

  const options = {
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    EMAIL_API_KEY,
  };
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1241 });
  const isTabletVal = useMediaQuery({ minWidth: 720, maxWidth: 1240 });
  const isMobileVal = useMediaQuery({ maxWidth: 719 });

  const [isMobile, setIsMobile] = useState(isMobileVal);
  const [isTablet, setIsTablet] = useState(isTabletVal);
  const [isDesktop, setIsDesktop] = useState(isDesktopOrLaptop);
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (transition.state === "submitting") {
      clearForm();
    }
  }, [transition]);

  useEffect(() => {
    setIsMobile(isMobileVal);
    setIsTablet(isTabletVal);
    setIsDesktop(isDesktopOrLaptop);
  });

  useEffect(() => {
    if (name && email && subject && message) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, subject, message]);

  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const portfolioBackImgStyle = {
    backgroundColor: "#ecf0f3",
    display: "flex",
    height: "100vh",
  };

  const portfolioBackImgStyleContact = {
    backgroundColor: "#ecf0f3",
    display: "flex",
  };

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

  return (
    <div className="container">
      <section
        id="section-home"
        className="section-content section section-child">
        <div className="heading-subtexts-container">
          <h1 className="heading-h1-container">
            <p className="heading-text">Hi,</p>
            <p className="heading-text">I'm Greg,</p>
            <p className="heading-h1-lastItem heading-text">Web Developer</p>
          </h1>
          <div className="headings-paragraph-container">
            <p className="headings-paragraph-item">Software Engineer</p>
            <span className="headings-pipe">|</span>
            <p className="headings-paragraph-item">FullStack Developer</p>
            <span className="headings-pipe">|</span>
            <p className="headings-paragraph-item">Dad</p>
          </div>
        </div>
        <Particles id="tsparticles" options={particlesConfig} />
      </section>
      <section
        style={isMobile ? { display: "flex" } : portfolioBackImgStyle}
        className="section-child"
        id="section-portfolio">
        <div className="section-big-word section-big-word-work">WORK</div>
        <MyFlipBook />
      </section>
      <section className="section-child" id="section-skills">
        <div className="section-big-word section-big-word-skills section-bigWord-zIndex">
          Skills
        </div>
        <p className="section-main-heading">Skills</p>
        <CloudTagComp ssrID={"homeSSRCloud"} />
      </section>
      <section className="section-blog" id="section-blog">
        <div className="section-big-word section-big-word-blog section-bigWord-zIndex">
          Blogs
        </div>
        <p className="section-main-heading">Blogs</p>
        <BlogWall blogs={blogs} />
      </section>
      <section
        id="section-contactMe"
        className="section-content section section-child "
        style={portfolioBackImgStyleContact}>
        <div className="section-big-word-contact section-big-word-contact">
          Contact
        </div>
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
      <footer className="footer-home">
        <div className="footer-container">
          <div className="footer-content">
            Made with <span>❤️</span> in New York
          </div>
        </div>
      </footer>
    </div>
  );
}
