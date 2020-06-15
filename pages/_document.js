import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mansalva&display=swap"/>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta key="og-sitename" property="og:site_name" content="eatwhatah.com" />
          <meta key="og-type" property="og:type" content="website" />
          <meta key="og-url" property="og:url" content="https://eatwhatah.com" />
          <meta key="og-locale" property="og:locale" content="en_US" />
          <meta key="og-description" property="og:description" content="What do you feel like eating?" />
          <meta key="og-title" property="og:title" content="eatwhatah?" />
          <meta key="og-image" property="og:image" content="/og-image.png" />
          <meta key="meta-description" name="description" content="What do you feel like eating?" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
