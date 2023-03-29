import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { store } from "./../redux/store";
import { Provider } from "react-redux";
import PageChange from "components/PageChange/PageChange.js";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

import "assets/css/nextjs-material-dashboard.css?v=1.1.0";
import { CssBaseline } from "@material-ui/core";
import { SessionProvider, useSession, getSession } from "next-auth/react";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import CustomToastContainer from "./_toast";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  console.log(`Process: ${process.env.BASE_URL}`);
  document.body.classList.add("body-page-transition");
  // ReactDOM.render(
  //   <PageChange path={url} />,
  //   document.getElementById("page-transition")
  // );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`Component Did mount`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    let session = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      session = useSession();
      pageProps.session = session;
      console.log("session", session);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.layout || (({ children }) => <>{children}</>);
    return (
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          {Component.auth ? (
            <AuthProvider>
              <React.Fragment>
                <Head>
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                  />
                  <title></title>
                  {/*<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>*/}
                </Head>
                <Layout>
                  <ThemeProvider theme={themeRTL}>
                    <CssBaseline />
                    <CustomToastContainer/>
                    <Component {...pageProps} />
                  </ThemeProvider>
                </Layout>
              </React.Fragment>
            </AuthProvider>
          ) : (
            <React.Fragment>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title></title>
                {/*<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>*/}
              </Head>
              <Layout>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <CustomToastContainer/>
                  <Component {...pageProps} />
                </ThemeProvider>
              </Layout>
            </React.Fragment>
          )}
        </SessionProvider>
      </Provider>
    );
  }
}
