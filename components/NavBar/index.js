import React from "react";
import { ContainerNav } from "./styles";
import Image from 'next/image';
import Link from 'next/link';

function NavBar() {
  return (
    <ContainerNav>
      <Link href="/"><Image src="/logo.jpg" width={90} height={70} objectFit="cover" layout="intrinsic" alt="Logo do Site"/></Link>
      <Link href="/Login"><a>Login</a></Link>
      <Link href="/CadastreIdea"><a>Cadastre sua ideia</a></Link>
      <Link href="/FaleConosco"><a>Fale Conosco</a></Link>
    </ContainerNav>
  );
}

export default NavBar;
