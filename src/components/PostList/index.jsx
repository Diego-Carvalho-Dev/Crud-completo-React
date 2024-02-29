import { useContext } from "react";
import { PostContext } from "../../providers/PostContext";

export const PostList = () => {
   const { postList, setEditingPost, postDelete } = useContext(PostContext);
   return (
      <ul>
         {postList.map((post) => (
            <li key={post.id}>
               <h3>{post.title} - {post.author}</h3>
               <span>{post.category}</span>
               <p>{post.content}</p>
               <button onClick={() => setEditingPost(post)}>Editar</button>
               <button onClick={() => postDelete(post.id)}>Excluir</button>
            </li>
         ))}
      </ul>
   );
};
