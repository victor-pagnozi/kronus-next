import React, { Component } from "react";
import { ContainerContact, FormContact } from "./styles";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export class FaleConosco extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ContainerContact>
          <div>
            <h2>Entre em contato com a nossa equipe</h2>
          </div>
          <div>
            <h5>Nossa equipe terá o prazer em lhe responder!</h5>
          </div>

          <FormContact>
            <div className="texto-contato">
              <h2>Entre em contato</h2>
              <p>
                Nós vamos adorar responder suas dúvidas e ouvir suas críticas e
                sugestões.
              </p>
              <p>
                Envie uma mensagem pra gente e vamos dar um retorno em seu
                e-mail no próximo dia útil!
              </p>
            </div>

            <div className="form">
              <form action="">
                <div className="label-float">
                  <div>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      aria-describedby="nome"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="nome">Nome</label>
                  </div>
                </div>

                <div className="label-float">
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      aria-describedby="email"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>

                <div className="label-float">
                  <div>
                    <input
                      type="text"
                      id="telefone"
                      name="telefone"
                      aria-describedby="telefone"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="telefone">Telefone</label>
                  </div>
                </div>

                <div className="label-float">
                  <div>
                    <input
                      type="text"
                      id="assunto"
                      name="assunto"
                      aria-describedby="assunto"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="assunto">Assunto</label>
                  </div>
                </div>

                <div className="label-float">
                  <div>
                    <input
                      type="text"
                      id="mensagem"
                      name="mensagem"
                      aria-describedby="mensagem"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="mensagem">Sua Mensagem</label>
                  </div>
                </div>
                
                <button className="btn btn-success">Enviar mensagem</button>
              </form>
            </div>
          </FormContact>
        </ContainerContact>

        <Footer />
      </div>
    );
  }
}

export default FaleConosco;
