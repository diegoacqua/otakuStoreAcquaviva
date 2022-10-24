import "./navbar.css";
import CartWidget from "../CartWidget/Cartwidget";

function NavBar() {
  return (
    <>
      <h1>
        ヲタクストーア
        <br />
        (Otaku Store)
      </h1>
      <h3>
        <a className="link" href="#">
          Manga
        </a>
      </h3>
      <h3>
        <a className="link" href="#">
          Figuras de accion
        </a>
      </h3>
      <h3>
        <a className="link" href="#">
          Ropa
        </a>
      </h3>
      <h3>
        <a className="link" href="#">
          Contacto
        </a>
      </h3>
      <CartWidget />
    </>
  );
}

export default NavBar;
