import React from "react";
import { Anuncio, Container, ContainerAnuncios } from "./styles";
import NavBar from "../../components/NavBar";

function Anuncios(){
    return(
        <ContainerAnuncios>
          <Anuncio>
            <img src="https://github.com/victor-pagnozi.png" alt="" />
            <h2>Titulo</h2>
            <div className="descricao">Descrição do Anuncio</div>
          </Anuncio>
          <Anuncio>
            <img src="https://github.com/victor-pagnozi.png" alt="" />
            <h2>Titulo</h2>
            <div className="descricao">Descrição do Anuncio</div>
          </Anuncio>
          <Anuncio>
            <img src="https://github.com/victor-pagnozi.png" alt="" />
            <h2>Titulo</h2>
            <div className="descricao">Descrição do Anuncio</div>
          </Anuncio>
          <Anuncio>
            <img src="https://github.com/victor-pagnozi.png" alt="" />
            <h2>Titulo</h2>
            <div className="descricao">Descrição do Anuncio</div>
          </Anuncio>
          <Anuncio>
            <img src="https://github.com/victor-pagnozi.png" alt="" />
            <h2>Titulo</h2>
            <div className="descricao">Descrição do Anuncio</div>
          </Anuncio>
        </ContainerAnuncios>
    );
}

export default Anuncios;