import React, { Component } from "react";
import Footer from "../../components/Footer";
import { Container } from "./styles";

export class ProjectData extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, inputChange } = this.props;
    return (
      <Container>
        <div className="container-cadastro">
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
              <textarea
                type="text"
                id="descricao"
                name="descricao"
                aria-describedby="Descrição Completa"
                placeholder="Escreva aqui o que é a sua ideia!"
                required
                cols="2"
                rows="7"
              />
            </div>
          </div>

          <div className="button-step">
            <button
              className="btn btn-primary continue"
              onClick={this.continue}
            >
              Avançar
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

export default ProjectData;
