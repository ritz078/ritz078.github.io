import React from "react";

const talks = [
  {
    title: "Housing Go: How we built it.",
    url: "https://youtu.be/KSWSs9UsNpc?t=3m26s",
    location: "San Francisco, CA",
  },
  {
    title: "Web Workers: A musical intro.",
    url: "https://speakerdeck.com/ritz078/web-workers-a-musical-intro",
    location: "Bangalore, India",
  },
  {
    title: "The hidden and new parts of JS.",
    url: "https://speakerdeck.com/ritz078/the-hidden-and-new-parts-of-js",
    location: "Mumbai, India",
  },
  {
    title: "The current state of web",
    url: "https://www.slideshare.net/RiteshKumar346/the-current-state-of-web",
    location: "Mumbai, India",
  },
  {
    title: "React Native: The Development Flow",
    url: "https://www.slideshare.net/RiteshKumar346/react-native-the-development-flow-98850600",
    location: "Mumbai, India",
  },
  {
    title: "Beats on the web: A journey into performance",
    url: "https://www.youtube.com/watch?v=C4ghs6QR4ZQ&t=3s",
    location: "Goa, India"
  }
];

export default function Talks() {
  return (
    <div className="talks-wrapper" id="talks">
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
        }

        .mdl-list__item-text-body {
          line-height: 28px !important;
          font-size: 16px !important;
        }

        a {
          font-size: 18px;
          color: #af003b;
        }
        a:hover {
          text-decoration: underline;
        }

        .sub {
          color: #4e4e4e;
          font-size: 14px;
          padding-top: 4px;
          line-height: 32px;
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
        <h4>Conference / Meetup Talks</h4>

        <ul className="demo-list-three mdl-list ul">
          {talks.map((x, i) => (
            <li
              className="mdl-list__item mdl-list__item--three-line li"
              key={i}
            >
              <div className="mdl-list__item-primary-content">
                <div>
                  <a href={x.url} target="_blank" rel="noreferrer">
                    {x.title}
                  </a>
                </div>
                <div className="sub">
                  <i className="fa fa-map-marker" /> {x.location}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
