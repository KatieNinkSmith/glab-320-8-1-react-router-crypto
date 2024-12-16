import { Link } from "react-router";

function Nav() {
  return (
    <div>
      <Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
}

export default Nav;
