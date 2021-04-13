import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef } from "react";

export default function Home() {
  const modalRef = useRef();

  const handleShowModal = () => {
    modalRef.current.style.display = "block";
  };

  const handleCloseModal = () => {
    modalRef.current.style.display = "none";
  };

  return (
    <>
      <Header></Header>
      <main>
        <section>
          <div ref={modalRef} className="card__modal">
            <div className="modal__container">
              <div className="modal__content">
                <div className="modal__header">
                  <p>
                    Hola, soy <strong>Luis Alberto Arana Montaño</strong>
                  </p>
                  <p className="close" onClick={handleCloseModal}>
                    X
                  </p>
                </div>
                <div className="modal__body flex__container">
                  <div className="modal__avatar flex__1">
                    <img src="/assets/img/avatar.jpg" className="avatar__img" />
                  </div>
                  <div className="modal__info flex__5">
                    <p>
                      Soy un apasionado de las nuevas tecnologias me considero
                      una persona paciente, detallista, trabajadora e
                      investigadora; estoy en constante práctica de las nuevas
                      tecnologías (desarrollo Web&Hardware).
                    </p>
                    <p>
                      Entre mis muchos intereses más destacados están: Las
                      nuevas herramientas en el mundo del desarrollo web, el
                      cine, la música, el baile, y el deporte en general; en mis
                      tiempos libres me gusta ver tutoriales y videos en el
                      campo del desarrollo web, además de esto se tocar la
                      guitarra, ayudo en los deberes a mi hijo y salgo a correr.
                    </p>
                    <p>
                      Soy una persona muy curiosa y cambiaría todo lo que sé,
                      por todo lo que no sé.
                    </p>
                    <p>
                      <span>&#128151;</span>
                      Luis, mi hijo <strong>es mi inspiración!</strong>
                    </p>
                  </div>
                </div>
                <div className="modal__footer text__center">
                  <button onClick={handleCloseModal}>Cerrar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="portada">
            <div className="container__title text__center">
              <h1 className="main__title">Luis Alberto</h1>
              <p className="sub__title">
                FrontEnd Developer | Técnico en Sistemas Microinformático y
                Redes
              </p>
              <button className="btn" onClick={handleShowModal}>
                Saber más...
              </button>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .portada {
          background: url("/assets/img/portada.jpg");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          height: 80vh;
          margin: 0;
          position: relative;
        }

        .portada::before {
          content: "";
          width: 100%;
          min-height: 80vh;
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(90deg, var(--mainColor), #ad55c1);
          opacity: 0.5;
        }

        .container__title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2),
            0 40px 77px 0 rgba(0, 0, 0, 0.22);
          padding: 10px 0;
        }

        .container__title p {
          margin: 0;
          padding: 0 10px 15px;
          color: #fff;
        }

        .card__modal {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1050;
          display: none;
          width: 100%;
          height: 100%;
          overflow: hidden;
          outline: 0;
          background-color: rgba(0, 0, 0, 0.7);
        }

        .show {
          display: block;
        }

        .modal__container {
          position: relative;
          top: 30px;
          width: auto;
          margin: 0.5rem;
          pointer-events: none;
          max-width: 500px;
          margin: 1.75rem auto;
        }

        .modal__content {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          pointer-events: auto;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 0.3rem;
          outline: 0;
        }

        .modal__header {
          background-color: #5394ff;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1rem 1rem;
          color: #fff;
          font-size: 0.9rem;
        }

        .modal__header p {
          padding: 0;
          margin: 0;
        }

        .modal__info p {
          padding: 0 20px;
          color: #616161;
          font-size: 0.8rem;
        }

        .close {
          font-size: 0.9rem;
          font-weight: 700;
          line-height: 1;
          text-shadow: 0 1px 0 #000;
          cursor: pointer;
        }

        .modal__footer button {
          border: 2px solid #4285f4;
          background-color: transparent;
          color: #4285f4;
          padding: 0.84rem 2.14rem;
          margin: 10px;
          text-transform: uppercase;
          font-size: 0.7rem;
        }

        .modal__footer button:hover {
          box-shadow: 3px 3px 5px #000000;
        }

        .avatar__img {
          padding: 0.25rem;
          margin: 0.25rem;
          background-color: #fff;
          border: 1px solid #dee2e6;
          border-radius: 50%;
          max-width: 100%;
          height: auto;
          vertical-align: middle;
        }

        @media screen and (min-width: 768px) {
          .container__title {
            width: 70%;
          }

          .modal__container {
            top: 90px;
          }

          .modal__header {
            font-size: 1.15rem;
          }

          .modal__info p {
            font-size: 1.1rem;
          }

          .close {
            font-size: 1.5rem;
          }

          .modal__footer button {
            font-size: 1.1rem;
          }
        }

        @media screen and (min-width: 1024px) {
          .container__title {
            width: 60%;
          }
        }
      `}</style>
      <Footer></Footer>
    </>
  );
}
