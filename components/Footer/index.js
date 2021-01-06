import React from "react";
import { ContainerFooter } from "./styles";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <ContainerFooter>
        <div>
          <Link href="/FaleConosco">
            <a>Fale Conosco</a>
          </Link>
        </div>
      </ContainerFooter>
    </footer>
  );
}

export default Footer;
