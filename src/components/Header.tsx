import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="w-full h-20 bg-primary items-center px-5 flex justify-between shadow-sm">
      <div className="w-10 h-10">
        <img src={logo} alt="Cidade alta" className="w-full object-cover" />
      </div>

      <Link to={"/login"}>
        <Button variant={"outline"}>Entrar</Button>
      </Link>
    </div>
  );
};

export default Header;
