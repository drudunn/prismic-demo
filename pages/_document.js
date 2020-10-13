import Document, { Html, Head, Main, NextScript } from 'next/document'

const repoName = process.env.PRISMIC_REPOSITORY_NAME

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
