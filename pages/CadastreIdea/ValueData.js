import React, { Component } from "react";
import { Container } from "./styles";

export class CanvasData extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  voltar = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <Container>
        <div className="container-cadastro">
          <div className="desc-canvas">
            <span>Já estamos finalizando</span>
            <p>Preencha os dados financeiros da sua ideia abaixo</p>
          </div>
          <div className="label-float">
            <div>
              <input
                type="text"
                id="intelectual"
                name="intelectual"
                aria-describedby="intelectual"
                placeholder=" "
                required
              />
              <label htmlFor="intelectual">Investimento Intelectual</label>
            </div>
          </div>

          <div className="label-float">
            <div>
              <input
                type="text"
                id="valuetion"
                name="valuetion"
                aria-describedby="valuetion"
                placeholder=" "
                required
              />
              <label htmlFor="valuetion">Valor Estimado</label>
            </div>
          </div>

          <div className="label-float">
            <div>
              <input
                type="text"
                id="porcentagem-ideia"
                name="porcentagem-ideia"
                aria-describedby="Porcentagem da ideia"
                placeholder=" "
                required
              />
              <label htmlFor="porcentagem-ideia">
                Porcentagem a ser oferecida
              </label>
            </div>
          </div>

          <div className="button-step">
            <div>
              <button className="btn btn-warning voltar" onClick={this.voltar}>
                Voltar
              </button>
            </div>
            <div>
              <button className="btn btn-success continue">Salvar</button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default CanvasData;
