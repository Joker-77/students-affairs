import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Navigate } from "react-router-dom";
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
import CustomToastContainer from "./_toast";
import { boolean } from "yup";
import AuthProvider from "../components/AuthProvider/AuthProvider";

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
  constructor(params) {
    super(params);
    this.state = {
      backToSignIn: false,
    };
  }
  async componentDidMount() {
    let comment = document.createComment(`Component Did mount`);
    document.insertBefore(comment, document.documentElement);
    const session = await getSession();
    console.log("session", session);
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    let session = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      session = useSession();
      console.log("session", session);
      pageProps.session = session;
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
            <React.Fragment>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title></title>
              </Head>
              <Layout>
                <ThemeProvider theme={themeRTL}>
                  <CssBaseline />
                  <CustomToastContainer />
                  <Component {...pageProps} />
                </ThemeProvider>
              </Layout>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title></title>
              </Head>
              <Layout>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <CustomToastContainer />
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
