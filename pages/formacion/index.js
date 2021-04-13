import Header from "../../components/Header";
import Footer from "../../components/Footer";
import formacion from "../../components/Models/formacion";

export default function Formacion() {
  return (
    <>
      <Header></Header>
      <main>
        <section>
          <h2 className="main__title text__center">Formación</h2>
          <div className="flex__container container">
            {formacion.map((estudios) => {
              return (
                <div className="card card__formacion flex__1">
                  <div className="view">
                    <img src={estudios.image} alt={estudios.title} />
                  </div>
                  <div className="card-header">
                    <h2 className="sub__title">{estudios.title}</h2>
                    <p className="text__center">
                      <span>{estudios.icon}</span>
                      {estudios.sub_title}
                    </p>
                  </div>
                  <div className="card-body">
                    <ul>
                      {estudios.skill.map((ele) => {
                        return <li>{ele}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="card-footer"></div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <style jsx>{`
        .card {
          box-shadow: 0 2px 5px 0 rgb(0, 0, 0, 16%),
            0 2px 10px 0 rgb(0, 0, 0, 12%);
          position: relative;
          display: flex;
          flex-direction: column;
          word-wrap: break-word;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0.25rem;
          margin: 1.5rem 1rem;
          max-width: 400px;
          min-width: 300px;
        }
        .card-header h2 {
          text-align: center;
          color: var(--mainColor);
          text-shadow: 0 0 0;
        }

        .card-header p {
          margin: 0;
          padding: 0;
        }

        .card-header p > span {
          margin-right: 0.5rem;
          font-size: 1.1rem;
        }

        .view img {
          width: 100%;
        }

        li {
          padding: 5px;
          color: #747373;
        }
      `}</style>
      <Footer></Footer>
    </>
  );
}
