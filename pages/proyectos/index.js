import Header from "../../components/Header";
import Footer from "../../components/Footer";
import proyectos from "../../components/Models/proyectos";

export default function Proyectos() {
  return (
    <>
      <Header></Header>
      <main>
        <section>
          <h2 className="main__title text__center">Proyectos</h2>
          <div className="flex__container container">
            {proyectos.map((pro) => {
              return (
                <div
                  className="card flex__1 card__container"
                  style={{ backgroundImage: `url("${pro.image}")` }}
                  key={pro.id}
                >
                  <div className="text__center flex__container card__description">
                    <div className="card__info">
                      <h5 className="sub__title" style={{ color: pro.color }}>
                        {pro.icon} {pro.icon_title}
                      </h5>
                      <h3>
                        <strong>{pro.title}</strong>
                      </h3>
                      <p>{pro.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <style jsx>{`
        .card__container {
          max-width: 90%;
          min-width: 90%;
          margin: 1.5rem auto;
          background-repeat: no-repeat;
          background-size: cover;
          color: #fff;
          position: relative;
          padding: 30px;
          margin: 1.5rem auto;
        }

        .card__container::before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.6);
        }

        .card__description {
          z-index: 100;
        }

        .card__description h5 {
          font-size: 1.2rem;
        }

        .card__info {
          padding: 0 0 20px;
        }

        .card__info h3 {
          font-size: 1.8rem;
        }

        @media screen and (min-width: 650px) {
          .card__container {
            max-width: 45%;
            min-width: 45%;
          }
        }
      `}</style>
      <Footer></Footer>
    </>
  );
}
