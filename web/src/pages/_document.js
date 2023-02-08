import React, { useState } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@components/menu/nav.js";
import Foot from "@components/footer/foot.js";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Navbar />
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
        <Foot />
      </Html>
    );
  }
}

export default MyDocument;
