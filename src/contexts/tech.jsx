import { createContext, useState } from "react";
import { useForm } from "react-hook-form";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  function onFormRegistration(event) {
    event.preventDefault();
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
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
