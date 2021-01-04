import React from "react";
import { ContainerFooter } from "./styles";
import Link from "next/link";

function Footer() {
  return (
    <ContainerFooter>
      <div>
        <Link href="/FaleConosco"><a>Fale Conosco</a></Link>
      </div>
    </ContainerFooter>
  );
}

export default Footer;
