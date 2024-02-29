import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../../providers/PostContext";

export const PostCreateForm = () => {
   const { register, handleSubmit } = useForm();

    const { postCreate } = useContext(PostContext);

    const submit = (formData) => {
        postCreate(formData);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input placeholder="Título" type="text" {...register("title")} />
            <input placeholder="Conteúdo" type="text" {...register("content")} />
            <input placeholder="Categoria" type="text" {...register("category")} />
            <button type="submit">Cadastrar uma nota</button>
        </form>
    )
}