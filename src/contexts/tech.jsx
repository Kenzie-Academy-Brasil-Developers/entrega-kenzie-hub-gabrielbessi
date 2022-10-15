import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../services/api";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { register, handleSubmit } = useForm([]);

  const token = localStorage.getItem("kenzie-hub:token");

  function onFormRegistration(data) {
    console.log(data);

    api.post("/users/techs", data, {
      headers: { Autorization: `Bearer ${token}` },
    });

    handleSubmit("");
  }

  function removeTech(idTech) {
    console.log(idTech);
  }

  return (
    <TechContext.Provider
      value={{
        register,
        handleSubmit,
        setModalIsOpen,
        modalIsOpen,
        register,
        handleSubmit,
        onFormRegistration,
        removeTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
