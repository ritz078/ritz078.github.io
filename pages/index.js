import React, { PureComponent } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import stylesheet from 'styles/style.css'

export default class extends PureComponent {
  render () {
    return (
      <div>
        <Head>
          <title>Ritesh Kumar | Frontend Developer</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.png" />
          <meta
            name="description"
            content="JavaScript lover, Senior Software Developer @ http://Housing.com, Artist, Created http://transform.now.sh , embed-js, snape"
          />
        </Head>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
        <style>{`

        .banner {
          display: flex;
          flex: 1;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          height: 100vh;
          padding: 0 40px;
        }

        h5 {
          font-weight: 100;
          font-size: 17px;
          padding: 40px 0;
          line-height: 26px;
          color: #676767;
          max-width: 600px;
        }

        button {
          background-color: #2196F3;
          border: 0;
          padding: 8px 20px;
          color: #fff;
          font-size: 14px;
          border-radius: 2px;
          margin: 0 10px;
          margin-bottom: 40px;
          cursor: pointer;
          outline: none;
        }

        button:hover {
          background-color: #2398f5;
        }
      `}</style>
        <div className="banner">
          <h1>Ritesh Kumar</h1>
          <h5>
            JavaScript lover, Senior Software Developer at{' '}
            <a href="https://housing.com" target="_blank">
              Housing.com
            </a>{' '}
            , Designer, Open Source enthusiast, Artist. Created{' '}
            <a href="http://transform.now.sh" target="_blank">
              Transform
            </a>,
            <a href="https://github.com/ritz078/embed-js" target="_blank">
              {' '}
              embed-js
            </a>{' '}
            and{' '}
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
          <div className="social">
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
        </div>
      </div>
    )
  }
}
