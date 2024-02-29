import { useContext } from "react";
import { useForm } from "react-hook-form"
import { UserContext } from "../../providers/UserContext";

export const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const { userLogin } = useContext(UserContext);

    return(
        <form onSubmit={handleSubmit(userLogin)}>
            <input placeholder="E-mail" type="email" {...register("email")} />
            <input placeholder="Senha" type="password" {...register("password")} />
            <button>Entrar</button>
        </form>
    )
}