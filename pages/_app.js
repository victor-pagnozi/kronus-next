import '../assets/styles/global.css';
import '../assets/fontawesome/css/all.css';
import App from 'next/app';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}