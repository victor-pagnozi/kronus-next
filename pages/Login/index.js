import React from "react";
import Image from "next/image";
import { Container } from "./styles";
import Head from "next/head";
import Link from 'next/link';

function Login() {
  return (
    <Container>
      <Head>
        <title>Login</title>
        <link href="../../assets/fontawesome/css/all.css" rel="stylesheet" />
      </Head>
      <div className="img-foguete">
        <img
          className="foguete"
          layout="responsive"
          src="/login.svg"
          alt="Foguete"
        />
      </div>

      <div className="login-container">
        <form action="">
          <Image
            src="/avatar.svg"
            width={50}
            height={50}
            alt="Avatar"
            className="avatar"
          />
          <h1>EMPREENDEDORISMO</h1>
          <h5>Seja Bem Vindo! Por favor acesse sua conta, ou cadastre-se!</h5>
          <div className="input-div label-float login">
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="input-email">
              <input
                type="text"
                id="email"
                name="email"
                aria-describedby="email"
                placeholder=" "
                required
              />
              <label htmlFor="email">E-mail</label>
            </div>
          </div>
          <div className="input-div password label-float">
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="input-password">
              <input
                type="password"
                id="password"
                name="password"
                aria-describedby="password"
                placeholder=" "
                required
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <a href="#">
            Esqueceu a senha? Não se preocupe, clique aqui para recuperá-la
          </a>
          <a className="btn" href="/">
            Home
          </a>
        </form>
      </div>
    </Container>
  );
}

export default Login;
