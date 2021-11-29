import Categories from "./Categories";
import Logo from "../Breaking_Bad_logo.svg.png";

const Header = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo" id="logo" />
      <Categories />
    </nav>
  );
};
export default Header;
