import { Link } from "react-router-dom";
import { LoginForm } from "../../../components/LoginForm";

export const LogoutView = () => {
   return (
      <div>
         <h1>Faça login</h1>
         <LoginForm />
         <p>ou</p>
         <Link to="/register">Cadastre-se</Link>
      </div>
   );
};
