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
          <meta key="og-sitename" property="og:site_name" content="Eat what ah?" />
          <meta key="og-type" property="og:type" content="website" />
          <meta key="og-url" property="og:url" content="https://eatwhatah.com" />
          <meta key="og-locale" property="og:locale" content="en_US" />
          <meta key="og-description" property="og:description" content="What do you feel like eating?" />
          <meta key="og-title" property="og:title" content="Eat what ah?" />
          <meta key="og-image" property="og:image" content="https://eatwhatah.com/og-image.jpg" />
          <meta key="meta-description" name="description" content="What do you feel like eating?" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@iamthye" />
          <meta name="twitter:creator" content="@iamthye" />
          <meta name="twitter:url" content="https://eatwhatah.com"/>
          <meta name="twitter:title" content="Eat what ah?" />
          <meta name="twitter:description" content="What do you feel like eating?" />
          <meta name="twitter:image" content="https://eatwhatah.com/og-image.jpg" />
          <link rel="shortcut icon" type="image/x-icon" href="https://eatwhatah.com/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        
      </html>
    );
  }
}
