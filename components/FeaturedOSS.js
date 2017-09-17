import { ProgressiveImage } from "react-progressive-image-loading";
import isBrowser from "is-in-browser";

const screenshots = [
  {
    id: "transform",
    text: "All important transformations at one place.",
    subtext: "REPL",
    url: "https://transform.now.sh",
    color: "",
    source: "https://github.com/transform-it"
  },
  {
    id: "embed-js",
    text:
      "A lightweight plugin to embed emojis, media, maps, tweets, code & more.",
    subtext: "Demo",
    url: "https://codesandbox.io/s/Wp5OlNMn",
    color: "#fff",
    source: "https://github.com/ritz078/embed-js"
  },
  {
    id: "snape",
    text:
      "A torrent client to search, stream and download torrents built using Electron.",
    subtext: "Website",
    url: "https://snape.in",
    color: "#fff",
    source: "https://github.com/ritz078/snape"
  },
  {
    id: "emoji-assistant",
    text: "A chrome extension to autosuggest emojis on the web.",
    subtext: "chrome store",
    url:
      "https://chrome.google.com/webstore/detail/emoji-assistant/jmngpddmfdhocaiaaacfpgknpiaahpab",
    color: "#fff",
    source: "https://github.com/ritz078/emoji-assistant"
  },
  {
    id: "starring",
    text: "Automatically star the npm-packages that you are using on GitHub.",
    subtext: "GitHub",
    url: "https://github.com/ritz078/starring",
    color: "#fafafa",
    source: "https://github.com/ritz078/starring"
  },
  {
    id: "react-controls",
    text: "Switch, Radio and Checkbox in React and optimized for mobile.",
    subtext: "demo",
    url: "https://housinghq.github.io/react-controls",
    color: "#ECEFF4",
    source: "https://github.com/housinghq/react-controls"
  }
];

export default function() {
  return (
    <div className="oss-wrapper">
      <style jsx>{`
        h4 {
          text-align: center;
          margin-bottom: 30px;
          color: #fff;
        }

        .see-all {
          background-color: #fff;
          margin: 0 auto;
          align-self: center;
          display: flex;
          margin-top: 40px;
        }

        .see-all:hover {
          background-color: #f6f6f6;
        }
      `}</style>
      <h4 id="open-source">Latest Open Source Projects</h4>
      <div className="screenshots">
        {screenshots.map(s => (
          <div className="demo-card-square mdl-card mdl-shadow--2dp" key={s.id}>
            <div className="screenshot-img">
              {isBrowser && (
                <ProgressiveImage
                  preview={`/static/thumbs/${s.id}.png`}
                  src={`/static/${s.id}.png`}
                  render={(src, style) => (
                    <div
                      style={Object.assign(style, {
                        backgroundImage: `url(${src})`,
                        backgroundColor: s.color
                      })}
                    />
                  )}
                />
              )}
            </div>

            <div className="mdl-card__supporting-text">
              <b>{s.id}</b> - {s.text}
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a href={s.url} className="mdl-button mdl-button--colored">
                {s.subtext}
              </a>

              <a href={s.source} className="source">
                <button
                  aria-label="Source Code"
                  aria-labelledby="open-source"
                  className="mdl-button mdl-js-button mdl-button--icon"
                >
                  <i className="fa fa-code" />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/search?utf8=%E2%9C%93&q=user%3Aritz078+user%3Atransform-it+user%3Ahousinghq&type=Repositories&ref=advsearch&l=&l=">
        <button className="see-all mdl-button mdl-js-button mdl-button--raised">
          View All Projects
        </button>
      </a>
    </div>
  );
}
