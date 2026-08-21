import "./App.css";
import { useState } from "react";

import logoChaveiro from "./assets/logo-chaveiro-salles.png";
import relogio from "./assets/relogio.png";
import escudo from "./assets/escudo.png";
import certificado from "./assets/certificado.png";
import imgchaveiro from "./assets/hero-chaveiro.png";
import telefone from "./assets/telefone.png";

import aberturaResidencia from "./assets/abertura-residencia.png";
import copiaChaveImovel from "./assets/copia-chave-imovel.png";
import fechaduraSeguranca from "./assets/fechadura-seguranca.png";
import instalacaoFechaduraDigital from "./assets/instalacao-fechadura-digital.png";
import aberturaCarro from "./assets/abertura-carro.png";
import copiaChavesAutomotiva from "./assets/copia-chave-automotivas.png";
import reprogramacaoChave from "./assets/reprogramacao-chave.png";
import programacaoAutomotiva from "./assets/programacao-automotiva.png";

import iconeCasa from "./assets/icone-casa.png";
import iconeCarro from "./assets/icone-carro.png";

import imgSobre from "./assets/img-chaveiro-salles.png";
import check from "./assets/check.png";

import email from "./assets/email.png";
import casa from "./assets/casa.png";

import logoChaveiroBranco from "./assets/logo-chaveiro-salles-branco.png";

import casa2 from "./assets/casa2.png";
import servico from "./assets/chave.png";
import sobre from "./assets/sobre.png";
import contato from "./assets/contato.png";

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [imagemAmpliada, setImagemAmpliada] = useState(null);

  const abrirImagem = (imagem) => {
    if (window.innerWidth <= 600) {
      setImagemAmpliada(imagem);
    }
  };

  return (
    <>
      {/* =========================
          HEADER
      ========================= */}
      <header className="header">
        <div className="header-container">
          <a href="#inicio" className="logo">
            <img
              src={logoChaveiro}
              alt="Salles Chaveiro em São Caetano do Sul"
            />
          </a>

          <nav className="navigation">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <a href="tel:+5511987629593" className="phone-button">
            <img src={telefone} alt="" />
            <span>(11) 98762-9593</span>
          </a>

          <button
            className="menu-button"
            aria-label="Abrir menu"
            onClick={() => setMenuAberto(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {menuAberto && (
        <div className="mobile-menu" onClick={() => setMenuAberto(false)}>
          <div
            className="mobile-menu-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LOGO + FECHAR */}
            <div className="mobile-menu-header">
              <img
                src={logoChaveiro}
                alt="Chaveiro Salles em São Caetano do Sul"
                className="mobile-menu-logo"
              />

              <button
                className="mobile-menu-close"
                aria-label="Fechar menu"
                onClick={() => setMenuAberto(false)}
              >
                ×
              </button>
            </div>

            {/* NAVEGAÇÃO */}
            <nav className="mobile-navigation">
              <a
                href="#inicio"
                className="mobile-nav-item active"
                onClick={() => setMenuAberto(false)}
              >
                <img src={casa2} alt="" />
                <span>Início</span>
              </a>

              <a
                href="#servicos"
                className="mobile-nav-item"
                onClick={() => setMenuAberto(false)}
              >
                <img src={servico} alt="" />
                <span>Serviços</span>
              </a>

              <a
                href="#sobre"
                className="mobile-nav-item"
                onClick={() => setMenuAberto(false)}
              >
                <img src={sobre} alt="" />
                <span>Sobre</span>
              </a>

              <a
                href="#contato"
                className="mobile-nav-item"
                onClick={() => setMenuAberto(false)}
              >
                <img src={contato} alt="" />
                <span>Contato</span>
              </a>
            </nav>

            {/* TELEFONE */}
            <a href="tel:+5511987629593" className="mobile-menu-phone">
              <img src={telefone} alt="" />
              <span>(11) 98762-9593</span>
            </a>
          </div>
        </div>
      )}

      <main>
        {/* =========================
            HERO
        ========================= */}
        <section
          className="hero"
          id="inicio"
          style={{ backgroundImage: `url(${imgchaveiro})` }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-container">
            <div className="hero-content">
              <h1>
                Qualidade e Confiança em
                <br />
                Serviços Automotivos
              </h1>

              <p>
                Serviços profissionais de chaveiro automotivo e residencial.
                Atendimento rápido e confiável em São Caetano do Sul e região.
              </p>

              <div className="hero-buttons">
                <a href="#contato" className="primary-button">
                  Solicitar Atendimento
                </a>

                <a href="#servicos" className="secondary-button">
                  Nossos Serviços
                </a>
              </div>
            </div>

            <div className="hero-differentials">
              <div className="differential">
                <div className="differential-icon">
                  <img src={relogio} alt="" />
                </div>

                <div>
                  <strong>Atendimento Rápido</strong>
                  <span>Ajuda imediata</span>
                </div>
              </div>

              <div className="differential">
                <div className="differential-icon">
                  <img src={escudo} alt="" />
                </div>

                <div>
                  <strong>Qualidade e Segurança</strong>
                  <span>Serviço confiável</span>
                </div>
              </div>

              <div className="differential">
                <div className="differential-icon">
                  <img src={certificado} alt="" />
                </div>

                <div>
                  <strong>+ 20 Anos</strong>
                  <span>De experiência</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
    SERVIÇOS
========================= */}
        <section className="servicos" id="servicos">
          <div className="servicos-container">
            <div className="servicos-header">
              <h2>Nossos Serviços</h2>

              <p>Soluções completas em chaveiro residencial e automotivo</p>
            </div>

            <div className="servicos-grid">
              {/* CARD 1 */}
              <div className="servico-card">
                <img
                  src={aberturaResidencia}
                  alt="Abertura de residências"
                  className="servico-image"
                  onClick={() => abrirImagem(aberturaResidencia)}
                />

                <div className="servico-content">
                  <div className="servico-icon">
                    <span>
                      <img src={iconeCasa} alt="" />
                    </span>
                  </div>

                  <h3>Abertura de Residências</h3>

                  <p>
                    Solução rápida para portas trancadas ou chaves perdidas.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="servico-card">
                <img
                  src={copiaChaveImovel}
                  alt="Cópia de chaves de imóveis"
                  className="servico-image"
                  onClick={() => abrirImagem(copiaChaveImovel)}
                />

                <div className="servico-content">
                  <div className="servico-icon">
                    <span>
                      <img src={iconeCasa} alt="" />
                    </span>
                  </div>

                  <h3>Cópia de Chaves de Imóveis</h3>

                  <p>Cópias precisas feitas na hora com agilidade.</p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="servico-card">
                <img
                  src={fechaduraSeguranca}
                  alt="Fechaduras de segurança"
                  className="servico-image"
                  onClick={() => abrirImagem(fechaduraSeguranca)}
                />

                <div className="servico-content">
                  <div className="servico-icon">
                    <span>
                      <img src={iconeCasa} alt="" />
                    </span>
                  </div>

                  <h3>Fechaduras de Segurança</h3>

                  <p>Venda e instalação para reforço de segurança.</p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="servico-card">
                <img
                  src={instalacaoFechaduraDigital}
                  alt="Instalação de fechadura digital"
                  className="servico-image"
                  onClick={() => abrirImagem(instalacaoFechaduraDigital)}
                />

                <div className="servico-content">
                  <div className="servico-icon">
                    <span>
                      <img src={iconeCasa} alt="" />
                    </span>
                  </div>

                  <h3>Instalação de Fechadura Digital</h3>

                  <p>Mais praticidade e segurança para sua casa.</p>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="servico-card">
                <img
                  src={aberturaCarro}
                  alt="Abertura de carros"
                  className="servico-image"
                  onClick={() => abrirImagem(aberturaCarro)}
                />

                <div className="servico-content">
                  <div className="servico-icon">
                    <span>
                      <img src={iconeCarro} alt="" />
                    </span>
                  </div>

                  <h3>Abertura de Carros</h3>

                  <p>Situações em que você não consegue acessar o veículo.</p>
                </div>
              </div>

              {/* CARD 6 */}
              <div className="servico-card">
                <img
                  src={copiaChavesAutomotiva}
                  alt="Cópia de chaves automotivas"
                  className="servico-image"
                  onClick={() => abrirImagem(copiaChavesAutomotiva)}
                />

                <div className="servico-content">
                  <div className="servico-icon">
                    <span>
                      <img src={iconeCarro} alt="" />
                    </span>
                  </div>

                  <h3>Cópia de Chaves Automotivas</h3>

                  <p>Chaves codificadas para diversos modelos.</p>
                </div>
              </div>

              {/* CARD 7 */}
              <div className="servico-card">
                <img
                  src={reprogramacaoChave}
                  alt="Reprogramação de chaves"
                  className="servico-image"
                  onClick={() => abrirImagem(reprogramacaoChave)}
                />

                <div className="servico-content">
                  <div className="servico-icon">
                    <span>
                      <img src={iconeCarro} alt="" />
                    </span>
                  </div>

                  <h3>Reprogramação de Chaves</h3>

                  <p>Reconfiguração de chaves e controles automotivos.</p>
                </div>
              </div>

              {/* CARD 8 */}
              <div className="servico-card">
                <img
                  src={programacaoAutomotiva}
                  alt="Programação automotiva"
                  className="servico-image"
                  reprogramacaoChave
                />

                <div className="servico-content">
                  <div className="servico-icon">
                    <span>
                      <img src={iconeCarro} alt="" />
                    </span>
                  </div>

                  <h3>Programação Automotiva</h3>

                  <p>Ajustes em sistemas eletrônicos do veículo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            SOBRE
        ========================= */}
        <section className="sobre" id="sobre">
          <div className="sobre-container">
            <div className="sobre-content">
              <h2>Sobre o Salles Chaveiro</h2>

              <p className="sobre-texto">
                Com mais de 20 anos de experiência, o Salles Chaveiro oferece
                serviços de chaveiro automotivo e residencial em São Caetano do
                Sul e região.
                <br />
                Atendimento rápido e confiável diretamente na sua casa ou
                veículo, para sua comodidade e segurança.
              </p>

              <div className="sobre-diferenciais">
                <div className="sobre-item">
                  <div className="sobre-icon">
                    <img src={check} alt="" />
                  </div>

                  <div>
                    <h3>Experiência e Confiança</h3>
                    <p>Mais de 20 anos no mercado.</p>
                  </div>
                </div>

                <div className="sobre-item">
                  <div className="sobre-icon">
                    <img src={check} alt="" />
                  </div>

                  <div>
                    <h3>Atendimento a Domicílio</h3>
                    <p>Solução prática onde você estiver.</p>
                  </div>
                </div>

                <div className="sobre-item">
                  <div className="sobre-icon">
                    <img src={check} alt="" />
                  </div>

                  <div>
                    <h3>Preço Justo</h3>
                    <p>Valor transparente e honesto.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sobre-imagem">
              <div className="sobre-card">
                <img src={imgSobre} alt="Salles Chaveiro" />
              </div>

              <div className="sobre-clientes">
                <strong>5000+</strong>
                <span>Clientes Atendidos</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
    CONTATO
========================= */}
        <section className="contato" id="contato">
          <div className="contato-container">
            <div className="contato-header">
              <h2>Entre em contato!</h2>
              <p>Pronto para oferecer soluções rápidas e seguras para você.</p>
            </div>

            <div className="contato-topo">
              <div className="contato-texto">
                <h3>Precisa de um chaveiro?</h3>
                <p>
                  Entre em contato com o Salles Chaveiro
                  <br />
                  para atendimento em São Caetano do Sul e região.
                </p>
              </div>

              <div className="contato-emergencial">
                <h3>Atendimento Emergencial</h3>
                <p>
                  Para situações urgentes, ligue diretamente para
                  <br />
                  nosso número.
                </p>
              </div>
            </div>

            <div className="contato-informacoes">
              <a href="tel:+5511987629593" className="contato-item">
                <div className="contato-icon">
                  <img src={telefone} alt="" />
                </div>

                <div>
                  <strong>Telefone</strong>
                  <span>(11) 98762-9593</span>
                </div>
              </a>

              <a href="mailto:salles545@gmail.com" className="contato-item">
                <div className="contato-icon">
                  <img src={email} alt="" />
                </div>

                <div>
                  <strong>E-mail</strong>
                  <span>salles545@gmail.com</span>
                </div>
              </a>

              <div className="contato-item">
                <div className="contato-icon">
                  <img src={casa} alt="" />
                </div>

                <div>
                  <strong>Atendimento</strong>
                  <span>A domicílio</span>
                </div>
              </div>

              <div className="contato-item">
                <div className="contato-icon">
                  <img src={relogio} alt="" />
                </div>

                <div>
                  <strong>Horários</strong>
                  <span>Atendimento 24 horas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
    FOOTER
========================= */}
        <footer className="footer">
          <div className="footer-container">
            {/* LOGO */}
            <div className="footer-brand">
              <img
                src={logoChaveiroBranco}
                alt="Chaveiro Salles em São Caetano do Sul"
              />

              <p>
                Sua segurança é nossa prioridade.
                <br />
                <strong>Serviços profissionais automotivos</strong>
              </p>
            </div>

            {/* LINKS RÁPIDOS */}
            <div className="footer-column">
              <h3>Links rápidos</h3>

              <a href="#inicio">Início</a>
              <a href="#servicos">Serviços</a>
              <a href="#sobre">Sobre Nós</a>
              <a href="#contato">Contato</a>
            </div>

            {/* CONTATO */}
            <div className="footer-column footer-contato">
              <h3>Contato</h3>

              <a href="tel:+5511987629593">(11) 98762-9593</a>

              <a href="mailto:salles545@gmail.com">salles545@gmail.com</a>
            </div>
          </div>
        </footer>
      </main>
      <a
        href="https://wa.me/5511987629593"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Fale Conosco pelo WhatsApp"
      >
        <span className="whatsapp-icon">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16 3.2C8.94 3.2 3.2 8.94 3.2 16c0 2.26.59 4.38 1.62 6.21L3 29l6.99-1.79A12.74 12.74 0 0 0 16 28.8c7.06 0 12.8-5.74 12.8-12.8S23.06 3.2 16 3.2Zm0 23.3c-2.01 0-3.88-.59-5.45-1.61l-.39-.25-4.15 1.06 1.1-4.04-.26-.41A10.57 10.57 0 1 1 16 26.5Zm5.8-7.94c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.71.16-.21.32-.81 1.05-.99 1.26-.18.21-.36.24-.68.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.77-2.21-.18-.32-.02-.49.14-.65.15-.15.32-.36.47-.53.16-.18.21-.3.32-.5.11-.21.05-.39-.03-.55-.08-.16-.71-1.72-.97-2.36-.26-.63-.52-.55-.71-.56h-.61c-.21 0-.55.08-.84.39-.29.32-1.1 1.08-1.1 2.64s1.13 3.06 1.29 3.27c.16.21 2.22 3.39 5.38 4.76.75.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.9-.78 2.17-1.53.27-.76.27-1.41.19-1.54-.08-.13-.29-.21-.61-.37Z" />
          </svg>
        </span>

        <span className="whatsapp-text">Fale Conosco</span>
      </a>

      {/* LIGHTBOX */}
      {imagemAmpliada && (
        <div className="lightbox" onClick={() => setImagemAmpliada(null)}>
          <button
            className="lightbox-close"
            onClick={() => setImagemAmpliada(null)}
            aria-label="Fechar imagem"
          >
            ×
          </button>

          <img
            src={imagemAmpliada}
            alt="Imagem ampliada"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
export default App;
