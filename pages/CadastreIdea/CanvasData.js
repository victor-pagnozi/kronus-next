import React, { Component } from "react";
import { Container } from "./styles";

import Footer from "../../components/Footer";

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
        <div className="desc-canvas">
          <span>Que bom que chegou até aqui!</span>
          <span>
            Agora para entendermos melhor o seu projeto, preencha os campos
            abaixo seguindo a metodologia Canvas!
          </span>
          <p>Caso fique com alguma dúvida entre em contato com nosso tutor!</p>
        </div>
        <div className="label-float">
          <div>
            <input
              type="text"
              id="cliente"
              name="cliente"
              aria-describedby="cliente"
              placeholder=" "
              required
            />
            <label htmlFor="cliente">Cliente</label>
          </div>
        </div>

        <div className="label-float">
          <div>
            <input
              type="text"
              id="proposicoes_valor"
              name="proposicoes_valor"
              aria-describedby="Proposições de Valor"
              placeholder=" "
              required
            />
            <label htmlFor="proposicoes_valor">Proposições de Valor</label>
          </div>
        </div>

        <div className="label-float">
          <div>
            <input
              type="text"
              id="canais"
              name="canais"
              aria-describedby="Canais"
              placeholder=" "
              required
            />
            <label htmlFor="canais">Canais</label>
          </div>
        </div>

        <div className="label-float">
          <div>
            <input
              type="text"
              id="relacionamento_clientes"
              name="relacionamento_clientes"
              aria-describedby="Relacionamento com Clientes"
              placeholder=" "
              required
            />
            <label htmlFor="relacionamento_clientes">
              Forma de relacionamento com os clientes
            </label>
          </div>
        </div>

        <div className="label-float">
          <div>
            <input
              type="text"
              id="fonte_de_receita"
              name="fonte_de_receita"
              aria-describedby="Fonte de Receita"
              placeholder=" "
              required
            />
            <label htmlFor="fonte_de_receita">Fonte de Receita</label>
          </div>
        </div>

        <div className="label-float">
          <div>
            <input
              type="text"
              id="principais_parcerias"
              name="principais_parcerias"
              aria-describedby="Principais Parcerias"
              placeholder=" "
              required
            />
            <label htmlFor="principais_parcerias">Principais Parcerias</label>
          </div>
        </div>

        <div className="label-float">
          <div>
            <input
              type="text"
              id="atividades_principais"
              name="atividades_principais"
              aria-describedby="Atividades Principais"
              placeholder=" "
              required
            />
            <label htmlFor="atividades_principais">Atividades Principais</label>
          </div>
        </div>

        <div className="label-float">
          <div>
            <input
              type="text"
              id="recursos_principais"
              name="recursos_principais"
              aria-describedby="Recursos Principais"
              placeholder=" "
              required
            />
            <label htmlFor="recursos_principais">Recursos Principais</label>
          </div>
        </div>

        <div className="label-float">
          <div>
            <input
              type="text"
              id="estrutura_de_custos"
              name="estrutura_de_custos"
              aria-describedby="Estrutuda de Custos"
              placeholder=" "
              required
            />
            <label htmlFor="estrutura_de_custos">Estrutura de Custos</label>
          </div>
        </div>

        <div className="button-step">
          <div>
            <button className="btn btn-warning voltar" onClick={this.voltar}>
              Voltar
            </button>
          </div>
          <div>
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

export default CanvasData;
