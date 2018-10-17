import React, { PureComponent } from "react";
import Head from "next/head";
import stylesheet from "../styles/base.css";
import Link from "next/link";

const colors = {
  primary: "#e05588"
};

const experience = [
  {
    url: "https://anarock.com",
    label: "Anarock | Lead Software Developer",
    timeline: "Oct 2017 - Present",
    content: [
      "Developing the design system framework and tooling for web and React Native.",
      "<a class='link' target='_blank' href='https://play.google.com/store/apps/details?id=com.anarock.agentsapp'>Agents App</a> - Developed an app built using React Native for agents.",
      "Involved in the initial tech team setup."
    ]
  },
  {
    url: "https://housing.com",
    label: "Housing.com | Senior Software Developer",
    timeline: "June 2015 - Oct 2017",
    content: [
      "<a class='link' target='_blank' href='https://medium.com/engineering-housing/how-we-built-our-react-native-app-3380a33811ac'>Housing App</a> - Developed a cross platform app using React-Native. It also included Redux, Observables and Immutable.js",
      "<a class='link' target='_blank' href='https://medium.com/engineering-housing/progressing-mobile-web-fac3efb8b454'>Housing Go</a> - Development of a PWA from scratch which involved React, redux, architecture setup and Server Side Rendering.",
      "Housing Partner - Created a dashboard used by brokers and owners using Angular 2 and ngrx."
    ]
  }
];

const oss = [
  {
    url: "https://github.com/transform-it",
    label: "Transform",
    desc:
      "An <a class='link' href='https://transform.now.sh'>online REPL</a> for important transformations. All packages are under the organisation <a class='link' href='https://github.com/transform-it'>tranform-it</a>."
  },
  {
    url: "https://github.com/ritz078/pebble",
    label: "pebble",
    desc:
      "A set of lightweight and accessible React component written in typescript and emotion."
  },
  {
    url: "https://github.com/storybooks/storybook",
    label: "storybook",
    desc:
      "Storybook is a development environment for UI components. I was an early contributor to the project. "
  },
  {
    url: "https://github.com/ritz078/embed-js",
    label: "embed-js",
    desc:
      "A plugin to embed emojis, media, maps, tweets, code and more. It is modular, customizable and plugin based."
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
      <div>
        <div className="wrapper" key="content">
          <header className="header no-print">
            <div className="flex">
              <div>
                <Link prefetch href="/" key="link">
                  <a className="back">
                    <button className="mdl-button back-btn mdl-button--primary">
                      <i className="fa fa-angle-left" />
                      Back to Home
                    </button>
                  </a>
                </Link>
              </div>

              <div>
                <a
                  className="back"
                  href="/static/Ritesh_Kumar_Resume.pdf"
                  download="Ritesh_Kumar_Resume"
                >
                  <button className="mdl-button back-btn mdl-button--primary">
                    <i className="fa fa-download" /> Download
                  </button>
                </a>
              </div>
            </div>
          </header>

          <Head>
            <title>Resume | Ritesh Kumar</title>
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/favicon.png"
            />
            <meta
              name="description"
              content="Open Sourcerer, JavaScript Developer, Lead SDE @ Anarock, ex http://Housing.com, Artist, Created http://transform.now.sh , embed-js, snape"
            />
          </Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <style jsx>{`
            .header {
              height: 50px;
              width: 100%;
              background-color: white;
              position: fixed;
              z-index: 999;
              box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.15);
            }

            .flex {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 100%;
              height: 50px;
              align-items: center;
            }

            .wrapper {
              background-color: #fff;
            }

            .mdl-button {
              padding: 8px;
              border: 0;
              border-radius: 2px;
              color: ${colors.primary};
              outline: none;
              background-color: white;
              font-size: 14px;
              cursor: pointer;
            }

            .name {
              font-size: 28px;
              font-weight: bold;
              margin-top: -6px;
            }

            .resume-wrapper {
              width: 900px;
              height: 1273px;
              background-color: white;
              margin: 0 auto;
              display: flex;
            }

            @media print {
              .no-print,
              .no-print * {
                display: none !important;
              }
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
              padding-bottom: 0;
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
              margin-bottom: 15px;
              margin-top: 5px;
            }

            .section-wrapper {
              padding-left: 15px;
              margin-bottom: 30px;
            }

            @media screen and (max-width: 700px) {
              .section-wrapper {
                padding-left: 0;
              }
            }

            .mb30 {
              margin-bottom: 20px;
            }

            .subtitle {
              color: ${colors.primary};
              font-size: 14px;
              padding: 8px 0;
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
              margin-bottom: 30px;
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
            }

            .download {
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

            .mb20 {
              margin-bottom: 25px;
            }
          `}</style>

          <style jsx global>{`
            a.link {
              color: #1565c0;
              text-decoration: none;
            }

            a.link:hover {
              color: #104e96;
              text-decoration: underline;
            }
          `}</style>

          <div style={{ height: 50 }} className="no-print" />

          <div className="resume-wrapper">
            <div className="left">
              <div className="info">
                <div className="name">Ritesh Kumar</div>
                <div className="designation">JavaScript Developer</div>
                <div className="location">
                  <a
                    rel="noreferrer"
                    href="https://github.com/ritz078"
                    target="_blank"
                    className="link"
                  >
                    https://github.com/ritz078
                  </a>
                </div>
              </div>

              <h3>Experience</h3>
              <div className="section-wrapper">
                {experience.map((e, i) => (
                  <div
                    key={e.url}
                    className={`experience ${
                      i !== experience.length - 1 ? "mb20" : ""
                    }`}
                  >
                    <div className="title">
                      <a className="link" href={e.url} rel="noreferrer" target="_blank">
                        {e.label}
                      </a>
                    </div>
                    <div className="subtitle">{e.timeline}</div>
                    <div className="content">
                      <ul>
                        {e.content.map(c => (
                          <li key={c} dangerouslySetInnerHTML={{ __html: c }} />
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <h3>
                Open Source Projects
                <a className="link" href="https://github.com/search?l=&o=desc&q=user%3Aritz078+user%3Atransform-it&ref=advsearch&s=&type=Repositories&utf8=%E2%9C%93">
                  <i className="fa fa-external-link see-more" />
                </a>
              </h3>
              <ul className="section-wrapper oss">
                {oss.map(e => (
                  <li key={e.url} className="experience">
                    <a className="link" href={e.url} rel="noreferrer" target="_blank">
                      {e.label}
                    </a>{" "}
                    -{" "}
                    <span
                      className="content"
                      dangerouslySetInnerHTML={{ __html: e.desc }}
                    />
                  </li>
                ))}
              </ul>

              <h3>
                Conference/Meetup Talks
                <a className="link" href="https://riteshkr.com#talks">
                  <i className="fa fa-external-link see-more" />
                </a>
              </h3>
              <div className="section-wrapper">
                <ul className="content">
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://youtu.be/KSWSs9UsNpc?t=3m26s"
                      target="_blank"
                      className="link"
                    >
                      Chrome Developers Summit 2016
                    </a>{" "}
                    - Spoke about the development process and performance
                    optimisations we did to improve our mobile experience.
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://www.slideshare.net/RiteshKumar346/react-native-the-development-flow-98850600"
                      target="_blank"
                      className="link"
                    >
                      React Native: The Development Flow
                    </a>{" "}
                    - A talk about the whys and hows of debugging, performance
                    optimizations and improved release cycles.
                  </li>
                </ul>
              </div>

              <h3>Side Project</h3>
              <div className="section-wrapper">
                <ul className="content">
                  <li>
                    An online platform (WIP) to play midis and also record
                    music. The project involves web workers, WebAudio, WebMIDI
                    and a lot of work around performance. The demos can be found{" "}
                    <a className="link" href="https://twitter.com/ritz078/status/1048939754819993601">
                      here
                    </a>{" "}
                    and{" "}
                    <a className="link" href="https://twitter.com/ritz078/status/1048809603889336320">
                      here
                    </a>
                    .
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="social mb30">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ritz078"
                >
                  <i className="fa fa-github" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/ritz078"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ritz078"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://medium.com/@ritz078"
                >
                  <i className="fa fa-medium" />
                </a>
              </div>

              <div className="content mb30 contact">
                <i className="fa fa-fw fa-envelope" />
                <a className="link" href="mailto:rkritesh078@gmail.com">rkritesh078@gmail.com</a>
                <br />
                <i className="fa fa-fw fa-map-marker" />
                Mumbai, India
                <br />
                <i className="fa fa-fw fa-globe" />
                <a className="link" rel="noreferrer" href="https://riteshkr.com" target="_blank">
                  https://riteshkr.com
                </a>
              </div>

              <h3>Skills</h3>
              <div className="content mb30 contact">
                JavaScript, HTML, CSS <br />
                React, Redux, React Native, Angular 1/2 <br />
                TypeScript, CoffeeScript
                <br />
                Git
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
