import React from "react";
import { Anuncio, Container, ImgDivulgacao, ContainerAnuncios } from "./Home/styles";
import NavBar from "../components/NavBar";
import Anuncios from "../components/Anuncios";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <NavBar></NavBar>

      <Container>
        <ImgDivulgacao>
          <img
            src="https://www.vrsys.com.br/images/vrsys/blog-new/o-que-sao-logotipos-e-porque-sua-empresa-precisa-de-um-imagem-avon.jpg"
            alt=""
          />
        </ImgDivulgacao>
      </Container>

      <Container>
        <Anuncios></Anuncios>
      </Container>

      <Footer></Footer>
    </div>
  );
}

export default Home;