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

      <Container>
          <Image
            src="https://cdn.pixabay.com/photo/2019/07/07/17/48/avatar-4322968_1280.png"
            alt=""
            layout="intrinsic"
            objectFit="cover"
            width={1519}
            height={400}
          />
      </Container>

      <Container>
        <Anuncios></Anuncios>
      </Container>

      <Footer></Footer>
    </div>
  );
}

export default Home;