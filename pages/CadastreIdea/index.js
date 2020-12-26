import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ProjectData from "./ProjectData";
import CanvasData from "./CanvasData";
import ValueData from "./ValueData";

class Cadastre extends Component {
  state = {
    step: 1,
    titulo: "",
    descricaoBreve: "",
    descricao: "",
    arquivoPdf: "",
    categorias: "",
    contatoTelefone: "",
    contatoWhatsapp: "",
    contatoFacebook: "",
    canvasClientes: "",
    canvasProposicoesValor: "",
    canvasCanais: "",
    canvasRelacionamentoClientes: "",
    canvasFontesDeReceitas: "",
    investimentoFinanceiro: "",
    investimentoIntelectual: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  inputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const {
      titulo,
      descricaoBreve,
      descricao,
      arquivoPdf,
      categorias,
      contatoTelefone,
      contatoWhatsapp,
      contatoFacebook,
      canvasClientes,
      canvasProposicoesValor,
      canvasCanais,
      canvasRelacionamentoClientes,
      canvasFontesDeReceitas,
      investimentoFinanceiro,
      investimentoIntelectual,
    } = this.state;
    const values = {
      titulo,
      descricaoBreve,
      descricao,
      arquivoPdf,
      categorias,
      contatoTelefone,
      contatoWhatsapp,
      contatoFacebook,
      canvasClientes,
      canvasProposicoesValor,
      canvasCanais,
      canvasRelacionamentoClientes,
      canvasFontesDeReceitas,
      investimentoFinanceiro,
      investimentoIntelectual,
    };

    switch (step) {
      case 1:
        return (
          <div>
            <NavBar />

            <ProjectData
              nextStep={this.nextStep}
              inputChange={this.inputChange}
              values={values}
            />
            <Footer />
          </div>
        );

      case 2:
        return (
          <div>
            <NavBar />

            <CanvasData
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              inputChange={this.inputChange}
              values={values}
            />
            <Footer />
          </div>
        );

      case 3:
        return (
          <div>
            <NavBar />

            <ValueData
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              inputChange={this.inputChange}
              values={values}
            />
            <Footer />
          </div>
        );
        break;

      default:
        break;
    }
  }
}

export default Cadastre;
