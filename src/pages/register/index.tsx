import logo from "../../assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import api from "@/services/api";
import { login } from "@/services/auth";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { name, email, password });
      const response = await api.post("/auth/login", { email, password });
      login(response.data);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
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
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <Input
            type="text"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
      </form>

      <Link to="/login" className="text-white">
        Já possui uma conta? Faça login
      </Link>
    </div>
  );
};

export default Register;
