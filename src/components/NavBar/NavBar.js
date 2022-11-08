import "./navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/Cartwidget";

function NavBar() {
  return (
    <>
      <Link className="link" to="/#">
        <h1>
          ヲタクストーア
          <br />
          (Otaku Store)
        </h1>
      </Link>
      <h3>
        <Link className="link" to="/category/manga">
          Manga
        </Link>
      </h3>
      <h3>
        <Link className="link" to="/category/accesorios">
          Accesorios
        </Link>
      </h3>
      <h3>
        <Link className="link" to="/category/ropa">
          Ropa
        </Link>
      </h3>
      <CartWidget />
    </>
  );
}

export default NavBar;
