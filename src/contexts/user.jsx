import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { formSchema } from "./../validation/index";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("kenzie-hub:token");

    async function loadUser() {
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }

      setLoading(false);
    }

    loadUser();
  }, [user]);

  function onForm(data) {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("kenzie-hub:token", token);

        api.defaults.headers.authorization = `Bearer ${token}`;

        navigate("/homepage");
      })
      .catch(
        () =>
          toast.error("Email/senha inválido", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
          }),
        localStorage.clear()
      );
  }

  const {
    register: registerRegistration,
    handleSubmit: handleSubmitRegistration,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onRegister(data) {
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
        handleSubmit,
        register,
        onForm,
        registerRegistration,
        handleSubmitRegistration,
        onRegister,
        errors,
        user,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
