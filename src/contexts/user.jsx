import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../services/api";
import { toast } from "react-toastify";
import { formSchema } from "./../validation/index";
import { yupResolver } from "@hookform/resolvers/yup";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  function onForm(data) {
    console.log(data);

    api
      .post("/sessions", data)
      .then((response) => {
        console.log(response);
        const { token, user } = response.data;
        localStorage.setItem("kenzie-hub:token", token);
        api.defaults.headers.common["Authorization"] = token;
        localStorage.setItem("kenzie-hub:user", JSON.stringify(user));
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
