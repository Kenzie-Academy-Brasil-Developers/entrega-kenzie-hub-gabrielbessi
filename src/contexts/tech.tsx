import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { iTechs } from "../modal/AddModal";
import { iUpdateTech } from "../modal/ModalUpdate";
import api from "../services/api";

interface iTechProviderProps {
  children: ReactNode;
}

interface iTechContext {
  onFormRegistration(data: iTechs): Promise<void>;

  updateTech(data: iUpdateTech): Promise<void>;

  removeTech(id: number): Promise<void>;

  modalIsOpen: boolean;

  idTech: number;

  setTechId: React.Dispatch<React.SetStateAction<number>>;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateModal: boolean;
  setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TechContext = createContext<iTechContext>({} as iTechContext);

export function TechProvider({ children }: iTechProviderProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [idTech, setTechId] = useState(0);

  const token = localStorage.getItem("kenzie-hub:token");

  async function onFormRegistration(data: iTechs): Promise<void> {
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

  async function removeTech(idTech: number): Promise<void> {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;

      await api.delete(`/users/techs/${idTech}`);

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

  async function updateTech(data: iUpdateTech): Promise<void> {
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
