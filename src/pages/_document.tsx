import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.loadContentPromise = new Promise((resolve)=>{window.addEventListener("DOMContentLoaded", resolve);});',
          }}
        ></script>
      </body>
    </Html>
  );
}
