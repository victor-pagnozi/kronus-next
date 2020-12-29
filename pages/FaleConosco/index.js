import React, { Component } from "react";
import { ContainerContact } from "./styles";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export class FaleConosco extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContainerContact>
            <div><h2>Entre em contato com a nossa equipe</h2></div>
            <div><h5>Nossa equipe terá o prazer em lhe responder!</h5></div>
        </ContainerContact>
        <Footer />
      </div>
    );
  }
}

export default FaleConosco;
