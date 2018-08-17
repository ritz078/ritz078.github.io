import React from "react";

const talks = [
  {
    title: "Housing Go: How we built it.",
    url: "https://youtu.be/KSWSs9UsNpc?t=3m26s",
    location: "San Francisco, CA",
    desc:
      "Spoke about the development process and performance optimisations we did to improve our mobile experience."
  },
  {
    title: "The hidden and new parts of JS.",
    url: "https://speakerdeck.com/ritz078/the-hidden-and-new-parts-of-js",
    location: "Mumbai, India",
    desc:
      "This talk involves array-like objects, DI, .sort(), let/const, async/await and some ES2018 features."
  },
  {
    title: "The current state of web",
    url: "https://www.slideshare.net/RiteshKumar346/the-current-state-of-web",
    location: "Mumbai, India",
    desc: "A new set of new features available on the web like ResizeObserver, IntersectionObserver, variable fonts, immersive web etc."
  },
  {
    title: "React Native: The Development Flow",
    url: "https://www.slideshare.net/RiteshKumar346/react-native-the-development-flow-98850600",
    location: "Mumbai, India",
    desc: "A talk about the whys and hows of debugging, performance optimizations and improved release cycles so that the next time you are developing a React Native application, you feel at home."
  }
];

export default function() {
  return (
    <div className="talks-wrapper">
      <style jsx>{`
        .talks-wrapper {
          padding: 20px;
          padding-bottom: 40px;
          background-color: #fff;
        }

        h4 {
          text-align: center;
          margin-bottom: 30px;
          color: #000;
        }

        .talks {
          max-width: 1100px;
          margin: 0 auto;
        }

        .ul {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .li {
          width: 49%;
          height: 180px !important;
        }

        .mdl-list__item-text-body {
          line-height: 28px !important;
          font-size: 16px !important;
        }

        a {
          font-size: 18px;
        }
        a:hover {
          text-decoration: underline;
        }

        .sub {
          color: #828282;
          font-size: 14px;
          padding-top: 4px;
          line-height: 24px;
        }

        .sub i {
          font-size: 13px;
        }

        @media screen and (max-width: 700px) {
          .li {
            width: 100%;
          }
        }

        .mdl-list__item--three-line .mdl-list__item-primary-content {
          height: auto;
        }
      `}</style>

      <div className="talks">
        <h4 id="open-source">Conference / Meetup Talks</h4>

        <ul className="demo-list-three mdl-list ul">
          {talks.map((x, i) => (
            <li
              className="mdl-list__item mdl-list__item--three-line li"
              key={i}
            >
              <div className="mdl-list__item-primary-content">
                <div>
                  <a href={x.url} target="_blank">
                    {x.title}
                  </a>
                </div>
                <div className="sub">
                  <i className="fa fa-map-marker" /> {x.location}
                </div>

                <div className="mdl-list__item-text-body">{x.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
