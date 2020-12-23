import React from "react";
import { ContainerNav } from "./styles";
import Image from 'next/image';

function NavBar() {
  return (
    <ContainerNav>
      <Image src="/logo.jpg" width={90} height={70} objectFit="cover" layout="intrinsic" alt="Logo do Site"/>
      <a href="#">Teste</a>
      <a href="#">Teste</a>
      <a href="#">Fale Conosco</a>
    </ContainerNav>
  );
}

export default NavBar;
