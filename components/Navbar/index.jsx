import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from 'react'

export default function Navbar() {
  const router = useRouter();
  const btnRef = useRef();
  

  const handleOpenMenu = () => btnRef.current.classList.toggle('show');

  return (
    <>
      <nav>
        <div className="flex__container container">
          <div className="logo flex__2">
            <img src="/assets/img/logoluis.png" alt="Logo porfolio Luis"/>
          </div>
          <div id="burger-icon" onClick={handleOpenMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul ref={btnRef} className="flex__4">
            <li className={router.pathname == "/" ? "active" : ""}>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li className={router.pathname == "/formacion" ? "active" : ""}>
              <Link href="/formacion">
                <a>Formación</a>
              </Link>
            </li>
            <li className={router.pathname == "/aptitudes" ? "active" : ""}>
              <Link href="/aptitudes">
                <a>Aptitudes</a>
              </Link>
            </li>
            <li className={router.pathname == "/proyectos" ? "active" : ""}>
              <Link href="/proyectos">
                <a>Proyectos</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .show {
          height: 210px;
        }


        .logo img {
          width: 40%;
        }

        nav {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 2000;
          padding: 10px;
          background-color: inherit;
        }

        span {
          cursor: pointer;
          display: block;
          border: 2px solid #00a551;
          border-radius: 3px;
          width: 23px;
          height: 23px;
        }

        ul {
          height: 0;
          overflow: hidden;
          left: 0;
          list-style: none;
          margin: 0;
          padding: 0;
          position: absolute;
          top: 80px;
          text-align: center;
          transition: height 0.3s linear;
          width: 100%;
          background-color: var(--secondColor);
        }

        ul > li {
          display: block;
          padding: 15px;
          color: #fff;
          text-decoration: none;
        }

        ul > li:hover,
        .select {
          background-color: var(--mainColor);
          border-radius: 5px;
        }

        #burger-icon {
          width: 2rem;
          height: 2rem;
        }

        #burger-icon div {
          width: 2rem;
          height: 0.3rem;
          background-color: #fff;
          margin: 7px 0 0;
        }
        
        @media screen and (min-width: 1024px) {
          nav {
            padding: 10px;
            margin-top: 0;
          }

          span {
            display: none;
          }

          ul {
            display: flex;
            height: auto;
            position: static;
            width: auto;
          }

         ul > li {
            width: 200px;
            margin-right: 10px;
          }

         ul > li > a {
            display: block;
            width: 100%;
            height: 100%;
          }

          #burger-icon {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
