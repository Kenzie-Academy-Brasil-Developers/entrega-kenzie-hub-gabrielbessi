import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../services/api";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [idTech, setTechId] = useState(0);
  const { register, handleSubmit } = useForm([]);

  const token = localStorage.getItem("kenzie-hub:token");

  async function onFormRegistration(data) {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;

      await api.post("/users/techs", data);

      setModalIsOpen(false);
      toast.success("Adicionado com sucesso", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
      });
    } catch (error) {
      console.log(error);
      toast.error("Ops! Tecnologia existente !", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
      });
    }
  }

  async function removeTech(id) {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;

      await api.delete(`/users/techs/${id}`);

      setUpdateModal(false);
      toast.success("Removido com sucesso", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function updateTech(data) {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;

      await api.put(`/users/techs/${idTech}`, data);

      setUpdateModal(false);
      toast.success("Atualizado com sucesso", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
      });
    } catch (error) {
      console.error(error);
    }
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
