import React from "react";
import App, { Container } from "next/app";

class Porfolio extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
        <Component {...pageProps} />
    );
  }
}

export default Porfolio;
