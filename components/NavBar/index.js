import React from "react";
import { ContainerNav } from "./styles";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <ContainerNav>
      <Link href="/">
        <Image
          src="/logo.jpg"
          width={100}
          height={80}
          objectFit="cover"
          layout="intrinsic"
          alt="Logo do Site"
        />
      </Link>

      <input type="checkbox" id="menu-btn" className="menu-btn"></input>
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="navicon"></span>
      </label>
      
      <ul className="menu">
        <li>
          <Link href="/Login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/CadastreIdea">
            <a>Cadastre sua ideia</a>
          </Link>
        </li>
        <li>
          <Link href="/FaleConosco">
            <a>Fale Conosco</a>
          </Link>
        </li>
      </ul>
    </ContainerNav>
  );
}

export default NavBar;
