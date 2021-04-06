import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "../../components/Icons/Menu";
import { useRef } from "react";

export default function Navbar() {
  const router = useRouter();
  let refMenu = useRef(),
    refMenuBtn = useRef();

  const handleToggleMenu = (e) => {
    refMenu.current.classList.toggle("show");
    console.log(refMenu);
  };

  return (
    <>
      <div id="menu" className="flex__container">
        <nav className="flex__4">
          <span
            className="menu__icon"
            id="menu-btn"
            ref={refMenuBtn}
            onClick={handleToggleMenu}
          >
            <Menu stroke="#00a551"></Menu>
          </span>
          <ul id="menu" ref={refMenu}>
            <img
              className="logo"
              src="assets/img/logoluis.png"
              alt="Logo del portfolio web Luis"
            />
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

          <div className="social">
            <ul className="social__icon flex__container">
              <li>
                <a href="https://twitter.com/@luichidev">Twwiter</a>
              </li>
              <li>
                <a href="https://instagram.com/luichidev">Instagram</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .show {
          height: 210px;
        }

        a {
          text-decoration: none;
        }

        span {
          cursor: pointer;
          display: block;
          border: 2px solid #00a551;
          border-radius: 3px;
          width: 23px;
          height: 23px;
          background-color: var(--secondColor);
        }

        #menu {
          background-color: var(--secondColor);
          
          overflow: hidden;
          left: 0;
          list-style: none;
          margin: 0;
          padding: 0;
          position: absolute;
          top: 60px;
          text-align: center;
          transition: height 0.3s linear;
          width: 100%;
        }

        #menu li {
          display: block;
          padding: 15px;
          text-decoration: none:
        }

        #menu li:hover {
          background-color: var(--mainColor);
        }

        nav {
          width: 100%;
          position: sticky;
          top: 0;
          border-bottom: 2px solid #f1f1f1;
          padding: 10px;
          background-color: var(--secondColor);
        }

        .logo {
          padding: 15px 0;
        }

        @media screen and (min-width: 480px) {
          nav {
            background-color: rgba(0, 0, 0, 0.85);
            margin-top: 10px;
          }
        }

        @media screen and (min-width: 1024px) {
          nav {
            padding: 0;
          }

          span {
            display: none;
          }

          #menu {
            display: flex;
            height: auto;
            position: static;
            width: auto;
          }
        }
      `}</style>
    </>
  );
}
