import React from "react";
import { Anuncio, Container, ImgDivulgacao, ContainerAnuncios } from "./Home/styles";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Anuncios from "../components/Anuncios";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <NavBar></NavBar>

      <Container className="img-anuncio-principal">
          <Image
            src="https://kipublicidades.com.br/wp-content/uploads/2019/02/ki-publicidades-anunciantes-5.jpg"
            alt=""
            layout="intrinsic"
            objectFit="contain"
            width={1519}
            height={400}
          />
      </Container>

      <Container>
        <Anuncios/>
      </Container>

      <Footer></Footer>
    </div>
  );
}

export default Home;