import { useContext } from "react";
import { ButtonStyled } from "../../components/Button";
import { TechContext } from "../../contexts/tech";
import { ModalRegistrationTechs } from "./styles";
import { SlClose } from "react-icons/sl";
import { useForm } from "react-hook-form";

export interface iTechs {
  title: string;
  status: string;
}

const AddModal = () => {
  const {
    id = "modal",
    onFormRegistration,
    setModalIsOpen,
  } = useContext(TechContext);

  const { register, handleSubmit } = useForm<iTechs>();

  function handleOutSideClick(event: any) {
    if (event.target.id === id) setModalIsOpen(false);
  }

  return (
    <ModalRegistrationTechs id={id} onClick={handleOutSideClick}>
      <div className="closeModal">
        <span>Cadastrar tecnologia</span>
        <button onClick={() => setModalIsOpen(false)} className="close">
          <SlClose />
        </button>
      </div>
      <div className="container">
        <div className="content">
          <form action="" onSubmit={handleSubmit(onFormRegistration)}>
            <div className="spaceInput">
              <label htmlFor="">Nome</label>
              <input
                type="text"
                placeholder="Ex. JavaScript"
                {...register("title")}
              />
              <label htmlFor="">Selecionar status</label>
              <select id="" {...register("status")}>
                <option value="">Selecione</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
            <ButtonStyled type="submit">Cadastrar tecnologia</ButtonStyled>
          </form>
        </div>
      </div>
    </ModalRegistrationTechs>
  );
};

export default AddModal;
