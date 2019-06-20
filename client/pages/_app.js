import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import GlobalStyle from '../shared/styles/global.js';
import { theme } from '../shared/styles';
import withReduxStore from '../hocs/with-redux';
import Wrapper from '../src/layout/Wrapper';
import Header from '../src/layout/Header';

class MyApp extends App {
  static async getInitialProps({ Component, ctx, ...props }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Provider store={reduxStore}>
            <Wrapper>
              <Head>
                <title>Lava</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
              </Head>
              <Header pathname={this.props.router.pathname} />
              <Component {...pageProps} />
            </Wrapper>
          </Provider>
        </ThemeProvider>
        <GlobalStyle />
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
