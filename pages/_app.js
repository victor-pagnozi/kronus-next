import '../assets/styles/global.css';
import App from 'next/app';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
