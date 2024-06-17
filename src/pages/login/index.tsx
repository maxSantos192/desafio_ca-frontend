import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import api from "@/services/api";
import { login } from "@/services/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      login(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed", err);
      alert("Login failed, please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
      <Link to="/" className="mb-6 max-w-sm w-20 h-20">
        <img className="w-full" src={logo} alt="Cidade alta Login" />
      </Link>

      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-xl w-full rounded-lg p-4"
      >
        <div className="mb-3">
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </form>

      <Link to="/register" className="text-white">
        Ainda não possui uma conta? Cadastre-se
      </Link>
    </div>
  );
};

export default Login;
