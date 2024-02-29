import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { LogoutView } from "./LogoutView";
import { LoginView } from "./LoginView";
import { PostProvider } from "../../providers/PostContext";

export const HomePage = () => {
   const { user } = useContext(UserContext);
   return (
      <main>
         {user ? (
            <PostProvider>
               <LoginView />
            </PostProvider>
         ) : (
            <LogoutView />
         )}
      </main>
   );
};
