import imageLogo from "../../images/Logo.svg";
import { HeaderPage, LinkHome as Link } from "./styles";

const Header = () => {
  return (
    <HeaderPage>
      <img src={imageLogo} alt="" />
      <div>
        <Link to={"/"}>Sair</Link>
      </div>
    </HeaderPage>
  );
};

export default Header;
