import React, { PureComponent } from "react";
import Link from "next/link";
import Head from "next/head";
import stylesheet from "styles/style.css";
import FeaturedOSS from "../components/FeaturedOSS";
import Conference from "../components/Conference";
import Writing from "../components/Writing";
import "material-design-lite/material.css";

export default class extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Ritesh Kumar | Frontend Developer</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon.png"
          />
          <meta
            name="description"
            content="JavaScript lover, Senior Software Developer @ http://Housing.com, Artist, Created http://transform.now.sh , embed-js, snape"
          />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
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

          .footer {
            background-color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 16px;
          }

          .interests {
            padding: 40px 0;
            background-color: rgba(0, 0, 0, 0.8);
          }

          h2 {
            color: #fff;
            text-align: center;
          }
        `}</style>
        <div className="banner">
          <h1>Ritesh Kumar</h1>
          <h5>
            JavaScript lover, Senior Software Developer at{" "}
            <a href="https://housing.com" target="_blank">
              Housing.com
            </a>{" "}
            , Designer, Open Source enthusiast, Artist. Created{" "}
            <a href="http://transform.now.sh" target="_blank">
              Transform
            </a>,
            <a href="https://github.com/ritz078/embed-js" target="_blank">
              {" "}
              embed-js
            </a>{" "}
            and{" "}
            <a href="https://snape.in" target="_blank">
              snape
            </a>
          </h5>

          <div className="contact">
            <a href="/resume" target="_blank">
              <button>Resume</button>
            </a>
            <a href="mailto:rkritesh078@gmail.com" target="_blank">
              <button>Contact</button>
            </a>
          </div>
          <div className="social-home">
            <a
              className="mdl-button mdl-js-button mdl-button--fab"
              target="_blank"
              href="https://github.com/ritz078"
            >
              <i className="fa fa-github" />
            </a>
            <a
              className="mdl-button mdl-js-button mdl-button--fab"
              target="_blank"
              href="https://twitter.com/ritz078"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              className="mdl-button mdl-js-button mdl-button--fab"
              target="_blank"
              href="https://www.linkedin.com/in/ritz078"
            >
              <i className="fa fa-linkedin" />
            </a>
            <a
              className="mdl-button mdl-js-button mdl-button--fab"
              target="_blank"
              href="https://medium.com/@ritz078"
            >
              <i className="fa fa-medium" />
            </a>
          </div>
        </div>
        <Conference />
        <FeaturedOSS />
        <Writing />
        <div className="interests">
          <h2>👨‍💻 &middot; 👨‍🎨 &middot; 🎹 &middot; ✍ &middot; 🎮</h2>
        </div>
        <div className="footer">
          Made by <a href="">Ritesh Kumar</a>
        </div>
      </div>
    );
  }
}
