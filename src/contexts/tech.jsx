import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../services/api";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [idTech, setTechId] = useState(0);
  const { register, handleSubmit } = useForm([]);

  const token = localStorage.getItem("kenzie-hub:token");

  function onFormRegistration(data) {
    api.defaults.headers.authorization = `Bearer ${token}`;

    api.post("/users/techs", data);

    setModalIsOpen(false);
  }

  function removeTech(id) {
    api.defaults.headers.authorization = `Bearer ${token}`;

    api.delete(`/users/techs/${id}`);

    setUpdateModal(false);
  }

  function updateTech(data) {
    api.defaults.headers.authorization = `Bearer ${token}`;

    api.put(`/users/techs/${idTech}`, data);

    setUpdateModal(false);
  }

  return (
    <TechContext.Provider
      value={{
        setModalIsOpen,
        modalIsOpen,
        handleSubmit,
        register,
        onFormRegistration,
        removeTech,
        updateModal,
        setUpdateModal,
        idTech,
        setTechId,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
