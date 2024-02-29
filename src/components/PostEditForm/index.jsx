import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../../providers/PostContext";

export const PostEditForm = () => {
   const { postUpdate ,editingPost, setEditingPost } = useContext(PostContext);

   const { register, handleSubmit } = useForm({
      values: {
         title: editingPost.title,
         content: editingPost.content,
         category: editingPost.category,
      },
   });

   const submit = (formData) => {
      postUpdate(formData);
   };

   return (
      <div>
         <button onClick={() => setEditingPost(null)}>Fechar</button>
         <h2>Editando nota</h2>
         <form onSubmit={handleSubmit(submit)}>
            <input placeholder="Título" type="text" {...register("title")} />
            <input placeholder="Conteúdo" type="text" {...register("content")} />
            <input placeholder="Categoria" type="text" {...register("category")} />
            <button type="submit">Editar nota</button>
         </form>
      </div>
   );
};
