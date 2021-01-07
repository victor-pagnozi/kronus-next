import React from "react";
import { ContainerNav } from "./styles";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <ContainerNav className="header">
      <Link href="/">
        <Image
          src="/logo.jpg"
          width={90}
          height={70}
          objectFit="cover"
          layout="intrinsic"
          alt="Logo do Site"
        />
      </Link>
      <Link href="/Login">
        <a>Login</a>
      </Link>
      <Link href="/CadastreIdea">
        <a>Cadastre sua ideia</a>
      </Link>
      <Link href="/FaleConosco">
        <a>Fale Conosco</a>
      </Link>

      <input type="checkbox" id="control-nav" />
      <label for="control-nav" class="control-nav"></label>
      <label for="control-nav" class="control-nav-close"></label>

      <nav class="fR">
        <ul class="l2"></ul>
      </nav>
    </ContainerNav>
  );
}

export default NavBar;
