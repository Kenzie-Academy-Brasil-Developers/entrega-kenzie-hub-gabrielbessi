import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../services/api";
import { toast } from "react-toastify";

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
  return (
    <UserContext.Provider value={{ handleSubmit, register, onForm }}>
      {children}
    </UserContext.Provider>
  );
}
