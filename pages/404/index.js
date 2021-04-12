import Link from "next/link";

export default function Error404() {
  return (
    <>
      <section>
        <div className="error__404">
          <div className="noFound__container">
            <h2 className="main__title">404</h2>
            <p className="sub__title">
              ¡Lo siento!, Pero la página que buscas, no existe.
            </p>
            <Link href="/">
              <button className="btn">Volver al Inicio</button>
            </Link>
          </div>
        </div>
      </section>
      <style jsx>{`
        .error__404 {
          background: url("/assets/img/error404.jpg");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          height: 100vh;
          margin: 0;
          position: relative;
        }

        .error__404:before {
          content: "";
          width: 100%;
          min-height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(90deg, var(--mainColor), #ad55c1);
          opacity: 0.5;
        }

        .noFound__container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #fff;
          max-width: 300px;
          background-color: rgba(0, 0, 0, 0.4);
          padding: 15px;
        }

        .noFound__container h2 {
          color: red;
          text-shadow: text-shadow: 3px 3px 5px #fff;
        }
      `}</style>
    </>
  );
}
