import React, { PureComponent } from "react";
import Head from "next/head";
import stylesheet from "styles/style.css";

const colors = {
  primary: "#e05588"
};

const experience = [
  {
    url: "https://housing.com",
    label: "Housing.com | Senior Software Developer",
    timeline: "June 2015 - Present",
    content: [
      "Housing Go - Development of a PWA from scratch which involved preact, redux, architecture setup and SSR.",
      "Housing Partner - Created a dashboard used by brokers and owners developed with Angular 2 and ngrx.",
      "Housing App - A cross platform app developed using React-Native. Involved Redux, Observables, Immutable.js"
    ]
  }
];

const education = [
  {
    url: "https://www.iitr.ac.in/",
    label: "B.Tech in Electrical Engineering",
    timeline: "2011 - 2015",
    desc: "Indian Institute of Technology, Roorkee (IIT Roorkee)"
  }
];

const blogs = [
  {
    url:
      "https://medium.com/engineering-housing/progressing-mobile-web-fac3efb8b454",
    label: "Housing Go - Behind the Screens"
  },
  {
    url:
      "https://medium.com/@ritz078/block-formatting-contexts-in-css-3a9555355019",
    label: "Block Formatting Contexts in CSS"
  }
];

const oss = [
  {
    url: "https://github.com/transform-it",
    label: "Transform",
    desc:
      "An <a href='https://transform.now.sh'>online REPL</a> for important transformations. All packages are under the organisation <a href='https://github.com/ritz078'>tranform-it</a>."
  },
  {
    url: "https://github.com/ritz078/embed-js",
    label: "embed-js",
    desc:
      "A plugin to embed emojis, media, maps, tweets, code and more. Its modular, customizable and plugin based."
  },
  {
    url: "https://github.com/ritz078/starring",
    label: "Starring",
    desc: "A CLI to automatically star the used npm-packages on GitHub."
  },
  {
    url: "https://github.com/ritz078/emoji-assistant",
    label: "emoji-assistant",
    desc: "A chrome extension to autosuggest emojis on the web."
  },
  {
    url: "https://snape.in",
    label: "Snape",
    desc: "An electron app to search, stream and download torrents."
  }
];

export default class extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <Head>
          <title>Resume | Ritesh Kumar</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.png" />
          <meta
            name="description"
            content="JavaScript lover, Senior Software Developer @ http://Housing.com, Artist, Created http://transform.now.sh , embed-js, snape"
          />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <style jsx>{`
          .wrapper {
            background-color: #666;
            min-height: 100vh;
          }

          .name {
            font-size: 36px;
            font-weight: bold;
          }

          .resume-wrapper {
            width: 900px;
            height: 1273px;
            background-color: white;
            margin: 0 auto;
            display: flex;
          }

          @media screen and (max-width: 900px) {
            .resume-wrapper {
              width: 100%;
              height: auto;
              flex-direction: column;
            }

            .download {
              right: 20px;
            }
          }

          .left {
            flex: 7;
            display: flex;
            border-right: 1px solid #eee;
            padding: 40px;
            flex-direction: column;
            padding-right: 20px;
          }

          .right {
            flex: 3;
            display: flex;
            padding: 40px;
            flex-direction: column;
          }

          h3 {
            font-weight: inherit;
            color: ${colors.primary};
            margin-bottom: 30px;
          }

          .section-wrapper {
            border-left: 2px solid #eee;
            padding-left: 30px;
            margin-bottom: 30px;
          }

          .mb30 {
            margin-bottom: 30px;
          }

          .title {
            font-weight: bold;
          }

          .subtitle {
            color: ${colors.primary};
            font-size: 14px;
            padding: 8px 0;
          }

          a {
            color: #1565c0;
          }

          a:hover {
            color: #104e96;
          }

          .content {
            line-height: 25px;
            color: #545454;
            font-size: 14px;
          }

          ul {
            margin-left: 16px;
          }

          b {
            font-size: 15px;
          }

          .info {
            margin-bottom: 50px;
          }

          .designation,
          .location {
            line-height: 28px;
          }

          .contact i {
            font-size: 14px;
            vertical-align: middle;
            margin-right: 10px;
            color: ${colors.primary};
          }

          .see-more {
            margin-left: 10px;
            vertical-align: middle;
            font-size: 16px;
            float: right;
            margin-top: 5px;
          }

          .download {
            position: fixed;
            bottom: 20px;
            margin-left: 830px;
            padding: 16px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
            cursor: pointer;

            transition: all 0.2s ease;
            outline: none;
            width: 50px;
            height: 50px;
            text-align: center;
            background-color: #ffffff;
          }

          .fa-download {
            color: ${colors.primary};
            border: 0;
            font-size: 18px;
            cursor: pointer;
            background-color: #fff;
          }

          .download:hover {
            box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
          }
        `}</style>

        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}</style>
        <div className="resume-wrapper">
          <div className="left">
            <div className="info">
              <div className="name">Ritesh Kumar</div>
              <div className="designation">Frontend Developer</div>
              <div className="location">
                <a href="https://github.com/ritz078">
                  https://github.com/ritz078
                </a>
              </div>
            </div>

            <h3>Experience</h3>
            <div className="section-wrapper">
              {experience.map(e => (
                <div key={e.url} className="experience">
                  <div className="title">
                    <a href={e.url} target="_blank">
                      {e.label}
                    </a>
                  </div>
                  <div className="subtitle">{e.timeline}</div>
                  <div className="content">
                    <ul>{e.content.map(c => <li>{c}</li>)}</ul>
                  </div>
                </div>
              ))}
            </div>

            <h3>
              Open Source Projects
              <a href="https://github.com/search?l=&o=desc&q=user%3Aritz078+user%3Atransform-it&ref=advsearch&s=&type=Repositories&utf8=%E2%9C%93">
                <i className="fa fa-external-link see-more" />
              </a>
            </h3>
            <div className="section-wrapper">
              {oss.map(e => (
                <div key={e.url} className="experience">
                  <b>
                    <a href={e.url} target="_blank">
                      {e.label}
                    </a>
                  </b>{" "}
                  -{" "}
                  <span
                    className="content"
                    dangerouslySetInnerHTML={{ __html: e.desc }}
                  />
                </div>
              ))}
            </div>

            <h3>Conference</h3>
            <div className="section-wrapper">
              <div className="content">
                <a href="https://youtu.be/dug_6lgZ7dw?t=3m14s" target="_blank">
                  <b>Chrome Developers Summit 2016</b>
                </a>{" "}
                - Spoke about the development process and performance
                optimisations we did to improve our mobile experience.
              </div>
            </div>

            <h3>
              Blogs
              <a href="https://medium.com/@ritz078">
                <i className="fa fa-external-link see-more" />
              </a>
            </h3>
            <div className="section-wrapper">
              {blogs.map(e => (
                <div key={e.url} className="experience">
                  <div className="subtitle">
                    <a href={e.url}>
                      <b>{e.label}</b>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <h3>Education</h3>
            <div className="section-wrapper">
              {education.map(e => (
                <div key={e.url} className="experience">
                  <div className="title">
                    <a target="_blank" href={e.url}>
                      {e.label}
                    </a>
                  </div>
                  <div className="subtitle">{e.timeline}</div>
                  <div className="content">{e.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <div className="social mb30">
              <a target="_blank" href="https://twitter.com/ritz078">
                <i className="fa fa-twitter" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/ritz078">
                <i className="fa fa-linkedin" />
              </a>
              <a target="_blank" href="https://medium.com/@ritz078">
                <i className="fa fa-medium" />
              </a>
            </div>

            <div className="content mb30 contact">
              <i className="fa fa-fw fa-envelope" />
              <a href="mailto:rkritesh078@gmail.com">rkritesh078@gmail.com</a>
              <br />
              <i className="fa fa-fw fa-phone" />
              <a href="tel:+91-7417485713">+91-7417485713</a>
              <br />
              <i className="fa fa-fw fa-map-marker" />
              Mumbai, India
              <br />
              <i className="fa fa-fw fa-globe" />
              <a href="http://riteshkr.com" target="_blank">
                http://riteshkr.com
              </a>
            </div>

            <h3>Skills</h3>
            <div className="content">
              JavaScript, HTML, CSS <br />
              React, Redux, React Native, Angular 2 <br />
              Git, OSX
            </div>
          </div>

          <a
            className="download"
            href="/static/Ritesh_Kumar_Resume.pdf"
            download
          >
            <button className="fa fa-download" />
          </a>
        </div>
      </div>
    );
  }
}
