import React, { PureComponent } from "react";
import Head from "next/head";
import FeaturedOSS from "../components/FeaturedOSS";
import Conference from "../components/Conference";
import Writing from "../components/Writing";
import { Github, Twitter, LinkedIn, Medium } from "../components/Svgs";
import Talks from "../components/Talks";
import Link from "next/link";

function Contact() {
  return (
    <div className="social-home" aria-hidden="true">
      <a href="https://github.com/ritz078">
        <button className="mdl-button mdl-js-button mdl-button--fab">
          <Github />
        </button>
      </a>
      <a href="https://twitter.com/ritz078">
        <button className="mdl-button mdl-js-button mdl-button--fab">
          <Twitter />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/ritz078">
        <button className="mdl-button mdl-js-button mdl-button--fab">
          <LinkedIn />
        </button>
      </a>
      <a href="https://medium.com/@ritz078">
        <button className="mdl-button mdl-js-button mdl-button--fab">
          <Medium />
        </button>
      </a>
    </div>
  );
}

export default class extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Ritesh Kumar | JavaScript Developer</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon.png"
          />
          <meta
            name="description"
            content="Open Sourcerer, JavaScript Developer, Lead SDE @ Anarock, ex Anarock, http://Housing.com, Artist, Created https://raaga.io, http://transform.now.sh , embed-js, snape"
          />
          <meta name="theme-color" content="#673ab7" />
          <script src="https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver" />
        </Head>
          <link rel="stylesheet" href="/styles/style.css"/>
        <style jsx>{`
          h5 {
            font-weight: 100;
            font-size: 20px;
            padding: 40px 0;
            line-height: 26px;
            color: #fafafa;
            max-width: 600px;
            padding-top: 0;
            margin-top: 0;
          }

          .contact button {
            background-color: #fff;
            border: 0;
            padding: 8px 20px;
            color: #333;
            font-size: 14px;
            border-radius: 2px;
            margin: 0 10px;
            margin-bottom: 40px;
            cursor: pointer;
            outline: none;
          }

          .footer {
            background-color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 16px;
          }

          .footer a {
            color: #c53465;
          }

          .interests {
            padding: 40px 0;
            background-color: rgba(0, 0, 0, 0.8);
          }

          h2 {
            color: #fff;
            text-align: center;
          }

          .contact-me {
            height: 120px;
            background-color: #009688;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
        <div className="banner">
          <h1>Ritesh Kumar</h1>
          <h5>
            JavaScript Developer, Web @{" "} <a href="https://pspdfkit.com">PSPDFKit</a>
            , ex{" "} <a href="https://anarock.com">Anarock</a>, {" "}
            <a href="https://housing.com">Housing.com</a> , Designer, Open
            Source enthusiast, Artist. Created{" "}
              <a href="http://raaga.io">raaga</a>,
            <a href="http://transform.tools">Transform</a>,
            <a href="https://github.com/ritz078/embed-js"> embed-js</a> and{" "}
            <a href="https://snape.in">snape</a>
          </h5>

          <div className="contact">
            <Link href="/resume">
              <a>
                <button>Resume</button>
              </a>
            </Link>
            <a href="mailto:rkritesh078@gmail.com">
              <button>Contact</button>
            </a>
          </div>
          <Contact />
        </div>
        <Conference />
        <FeaturedOSS />
        <Talks />
        <div className="contact-me">
          <Contact />
        </div>
        <Writing />
        <div className="interests">
          <h2>👨‍💻 &middot; 👨‍🎨 &middot; 🎹 &middot; 🎮</h2>
        </div>
        <div className="footer">
          Made by <a href="https://twitter.com/ritz078">Ritesh Kumar</a>
        </div>
      </div>
    );
  }
}
