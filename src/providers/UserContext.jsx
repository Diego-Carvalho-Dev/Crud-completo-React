import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   useEffect(() => {
      const userId = localStorage.getItem("@USERID");
      const token = localStorage.getItem("@TOKEN");

      const autoLogin = async () => {
         try {
            setLoading(true);
            const { data } = await api.get(`/users/${userId}`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            setUser(data);
            navigate("/");
         } catch (error) {
            console.log(error);
            localStorage.removeItem("@USERID");
            localStorage.removeItem("@TOKEN");
         } finally {
            setLoading(false);
         }         
      };

      if (userId && token) {
         autoLogin();
      }
   }, []);

   const userLogin = async (formData) => {
      try {
         const { data } = await api.post("/login", formData);
         setUser(data.user);
         localStorage.setItem("@USERID", data.user.id);
         localStorage.setItem("@TOKEN", data.accessToken);
         navigate("/");
         alert("Login efetuado com sucesso!");         
      } catch (error) {
         console.log(error);
      }
   };

   const userRegister = async (formData) => {
      try {
         await api.post("/users", formData);
         navigate("/");
         alert("Cadastro efetuado com sucesso!");
      } catch (error) {
         console.log(error);
      }
   };

   const userLogout = () => {
      setUser(null);
      localStorage.removeItem("@USERID");
      localStorage.removeItem("@TOKEN");
      navigate("/")
   };

   return <UserContext.Provider value={{ user, loading, userLogin, userRegister, userLogout }}>{children}</UserContext.Provider>;
};
