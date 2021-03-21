import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const handleOpenMenu = () => {
    document.getElementById("btnMenu").classList.toggle("show");
  };

  return (
    <>
      <nav>
        <span onClick={handleOpenMenu}>
          {/* <Menu stroke="#00a551"></Menu> */}
        </span>
        <ul id="btnMenu">
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
      </nav>
      <style jsx>{``}</style>
    </>
  );
}
