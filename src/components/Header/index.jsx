import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <p>Kenzie hub</p>
      <div>
        <Link to={"/"}>Sair</Link>
      </div>
    </header>
  );
};

export default Header;
