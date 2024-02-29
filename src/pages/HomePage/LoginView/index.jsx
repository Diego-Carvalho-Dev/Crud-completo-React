import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import { PostCreateForm } from "../../../components/PostCreateForm";
import { PostList } from "../../../components/PostList";
import { PostEditForm } from "../../../components/PostEditForm";
import { PostContext } from "../../../providers/PostContext";

export const LoginView = () => {
    const { user, userLogout } = useContext(UserContext);  
    const { editingPost } = useContext(PostContext);

    return(
        <div>
            <h2>Seja muito bem vindo {user.name} - {user.email}</h2>
            <button onClick={userLogout}>Sair</button>
            <PostCreateForm />
            {editingPost ? <PostEditForm /> : null}
            <PostList />            
        </div>
    )
}