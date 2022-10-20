import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../services/api";
import { iUseFormLogin } from "../pages/Login";
import { iUserRegistration } from "../pages/Registration";

interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserLoggedTechs {
  id: number;
  title: string;
  status: string;
}
interface iUserLoggedWorks {
  title: string;
  description: string;
  deploy_url: string;
}

export interface iUserLogged {
  id: number;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string | number;
  techs?: iUserLoggedTechs[];
  works?: iUserLoggedWorks[];
}

interface iUserContext {
  user: iUserLogged;
  onForm(data: iUseFormLogin): void;
  onRegister(data: iUserRegistration): void;
  loading: boolean;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export function UserProvider({ children }: iUserProviderProps) {
  const navigate = useNavigate();

  const [user, setUser] = useState<iUserLogged>({} as iUserLogged);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("kenzie-hub:token");

    async function loadUser() {
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get<iUserLogged>("/profile");

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }

      setLoading(false);
    }

    loadUser();
  }, [user]);

  function onForm(data: iUseFormLogin): void {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("kenzie-hub:token", token);

        api.defaults.headers.authorization = `Bearer ${token}`;

        navigate("/homepage");
      })
      .catch(() =>
        toast.error("Email/senha inválido", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
        })
      );
  }

  function onRegister(data: iUserRegistration): void {
    delete data.password_confirm;
    api
      .post("/users", data)
      .then(() => {
        return (
          toast.success("Conta criada com sucesso!", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
          }),
          navigate("/")
        );
      })
      .catch(() => {
        return (
          toast.error("Ops! Algo deu errado", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
          }),
          navigate("/registration")
        );
      });
  }

  return (
    <UserContext.Provider
      value={{
        onForm,
        onRegister,
        user,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
