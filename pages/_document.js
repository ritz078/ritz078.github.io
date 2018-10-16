import React from "react"
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => {
          console.log("service worker registration successful");
        })
        .catch(err => {
          console.warn("service worker registration failed", err);
        });
    }
  }

  render() {
    return (
      <html lang="en-us">
      <Head>
      </Head>
      <body className="custom_class">
      <Main />
      <NextScript />
      </body>
      </html>
    );
  }
}
