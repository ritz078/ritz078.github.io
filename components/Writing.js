import React, { PureComponent } from "react";

const blogs = [
  {
    icon: "mobile",
    label: "Housing Go : Behind the Screens",
    url: "https://medium.com/engineering-housing/progressing-mobile-web-fac3efb8b454"
  },
  {
    icon: "css3",
    label: "Block Formatting Contexts in CSS",
    url: "https://medium.com/@ritz078/block-formatting-contexts-in-css-3a9555355019"
  },
  {
    url:
      "https://www.sitepoint.com/creating-a-web-app-with-matlab-and-the-mean-stack/",
    label: "Creating a Web App with MATLAB and the MEAN Stack",
    published: "June, 2015"
  },
  {
    url:
      "https://www.sitepoint.com/controlling-a-motorbot-using-arduino-and-node-js/",
    label: "Controlling a Motorbot Using Arduino and Node.js",
    published: "September, 2015"
  },
  {
    url: "https://www.sitepoint.com/a-beginners-guide-to-handlebars/",
    label: "A Beginner’s Guide to Handlebars",
    published: "July, 2015"
  }
];

export default class extends PureComponent {
  render() {
    return (
      <div className="blogs">
        <style jsx>{`
          .blogs {
            background-color: #fff;
          }

          .blog-wrapper {
            max-width: 1100px;
            margin: 0 auto;
            color: #fff;
            display: flex;
            padding: 30px 0;
          }

          i {
            font-size: 90px;
            text-align: center;
            padding: 8px 0;
            color: #666;
          }

          .blog-left {
            justify-content: center;
            align-items: center;
            display: flex;
            flex: 2;
            border-right: 1px solid #e6e6e6;
          }

          .blog-right {
            flex: 4;
            padding-left: 40px;
          }

          .mdl-list {
            flex-direction: row;
          }

          h5 {
            margin: 20px 0;
            color: #666;
          }

          a:hover {
            text-decoration: underline;
            text-decoration-color: #666;
          }
        `}</style>
        <div className="blog-wrapper">
          <div className="blog-left">
            <i className="fa fa-pencil" />
          </div>
          <div className="blog-right">
            {blogs.map(b => (
              <div>
                <a href={b.url} target="_blank">
                  <h5>{b.label}</h5>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
