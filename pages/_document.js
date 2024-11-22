import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
         
          <link rel="icon" href="/assets/gnlogo.png" type="image/png" />
          
          <meta name="description" content="GN Software - Soluções Personalizadas em Desenvolvimento de Sistemas" />
          
        </Head>
        <body>
          <Main /> 
          <NextScript /> 
        </body>
      </Html>
    );
  }
}

export default MyDocument;
