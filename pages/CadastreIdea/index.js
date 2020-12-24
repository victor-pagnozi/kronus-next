import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Container } from "./styles";

function Cadastre() {
  return (
    <div>
      <NavBar></NavBar>

      <Container>
        <div className="label-float">
          <div>
            <input
              type="text"
              id="titulo"
              name="titulo"
              aria-describedby="titulo"
              placeholder=" "
              required
            />
            <label htmlFor="titulo">Titulo</label>
          </div>
        </div>

        <div className="label-float">
          <div>
            <input
              type="text"
              id="descricao-breve"
              name="descricao-breve"
              aria-describedby="Descrição Breve"
              placeholder=" "
              required
            />
            <label htmlFor="descricao">Descrição Breve</label>
          </div>
        </div>

        <div className="">
          <div className="text-area">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              type="text"
              id="descricao"
              name="descricao"
              aria-describedby="Descrição Completa"
              placeholder=" "
              required
              cols="2"
              rows="7"
            />
          </div>
        </div>
      </Container>

      <Footer></Footer>
    </div>
  );
}

export default Cadastre;
