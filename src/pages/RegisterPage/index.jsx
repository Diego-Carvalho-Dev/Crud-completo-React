import { useContext } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../providers/UserContext"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
    const { register, handleSubmit } = useForm()
    const { userRegister } = useContext(UserContext);

    return(
        <main>
            <Link to="/">voltar</Link>
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit(userRegister)}>
                <input type="text" placeholder="Nome" {...register("name")} />
                <input type="email" placeholder="E-mail" {...register("email")} />
                <input type="password" placeholder="Senha" {...register("password")} />
                <input type="text" placeholder="Profissão" {...register("job")} />
                <button type="submit">Cadastrar-se</button>
            </form>
        </main>
    )
}