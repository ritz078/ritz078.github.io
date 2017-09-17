import React, { PureComponent } from "react";

const blogs = [
  {
    icon: "mobile",
    label: "Housing Go : Behind the Screens",
    url:
      "https://medium.com/engineering-housing/progressing-mobile-web-fac3efb8b454"
  },
  {
    icon: "css3",
    label: "Block Formatting Contexts in CSS",
    url:
      "https://medium.com/@ritz078/block-formatting-contexts-in-css-3a9555355019"
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
        <h4>Blogs</h4>
        <style jsx>{`
          .blogs {
            background-color: #fff;
          }

          .blog-wrapper {
            max-width: 1100px;
            margin: 0 auto;
            color: #fff;
            display: flex;
            padding: 60px 0;
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
            padding: 0 40px;
          }

          .mdl-list {
            flex-direction: row;
          }

          h5 {
            margin: 20px 0;
            color: #666;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }

          a:hover {
            text-decoration: underline;
            text-decoration-color: #666;
          }

          h4 {
            display: none;
          }

          @media screen and (max-width: 860px) {
            .blog-left {
              display: none;
            }

            .blog-wrapper {
              padding-top: 40px;
            }

            .blogs {
              padding-top: 20px;
            }

            h4 {
              display: block;
              text-align: center;
              margin-bottom: 0;
            }

            h5 {
              font-size: 17px;
            }

            .blog-right {
              width: 100%;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
        `}</style>
        <div className="blog-wrapper">
          <div className="blog-left">
            <i className="fa fa-pencil" />
          </div>
          <div className="blog-right">
            {blogs.map(b => (
              <div>
                <a href={b.url} target="_blank" rel="noopener">
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
