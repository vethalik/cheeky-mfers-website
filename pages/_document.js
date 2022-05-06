import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Primary MetaTags */}
          <meta name="title" content="Cheeky Mfers"/>
          <meta name="description" content="A cc0 derivative collection of 10k cheeky mfers inspired by the original artwork from Sartoshi"/>

          {/* Facebook MetaTags */}
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://cheekymfers.com"/>
          <meta property="og:title" content="Cheeky Mfers"/>
          <meta property="og:description" content="Cheeky Mfers - Derivative collection inspired by Sartoshi's mfers"/>
          <meta property="og:image" content="https://cheekymfers.com/images/design/cover-metadata.jpg?423423=123"/>

          {/* Twitter MetaTags */}
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://cheekymfers.com/"/>
          <meta property="twitter:title" content="Cheeky Mfers"/>
          <meta property="twitter:description" content="A cc0 derivative collection of 10k cheeky mfers inspired by the original artwork from Sartoshi"/>
          <meta property="twitter:image" content="https://cheekymfers.com"/>
        </Head>
        <body style={{
          margin: 0,
        }}>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
