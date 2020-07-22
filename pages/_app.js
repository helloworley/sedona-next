import React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Head from 'next/head';
import { withStyles } from '@material-ui/styles';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#E26000",
      },
      sedona: {
        darkgray: "#424242",
        darkestgray: "#212121",
        lightgray: "#8E8E93",
        beige: "#C8BFB9",
        white: "#fff",
      }
    },
    typography: {
      fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "1.3",
      },
      h2: {
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "1.3",
        margin: "0 0 60px",
      },
      h3: {
        fontWeight: "700",
        fontSize: "17px",
        lineHeight: "1.3",
        margin: "0 0 24px",
        textAlign: "center",
      },
      h4: {
        fontSize: "17px",
        lineHeight: "1.3",
        fontWeight: 500,
        margin: "0 0 24px",
        textAlign: "center",
      },
      fontWeightMedium: 500,
      body1: {
        fontWeight: 500,
        lineHeight: 1.8,
        color: "#424242",
      },
      body2: {
        fontWeight: 500,
        lineHeight: 1.3,
        color: "#C8BFB9",
      },
      subtitle1: {
        fontSize: 12,
      },
      button: {
        fontStyle: 'italic',
      },
    },
    section: {
      half: {
        padding: {
          md: "96px 96px"
        }
      },
      padding: {
        xs: "96px 30px",
        sm: "96px 120px",
        md: "96px 15% 120px",
      }
    }
  });

 

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Sedona</title>
      </Head>
        <CssBaseline />
        <div>
          <MuiThemeProvider theme={theme}>
            <Component {...pageProps} />
          </MuiThemeProvider>
        </div>
      </>
    );
  }
}


export default MyApp;