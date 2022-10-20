import { useContext } from "react";
import { TechContext } from "../../contexts/tech";
import { ModalUpdateTechs } from "./styles";
import { SlClose } from "react-icons/sl";
import { useForm } from "react-hook-form";

export interface iUpdateTech {
  status: string;
}

const ModalUpdate = () => {
  const { removeTech, setUpdateModal, idTech, updateTech } =
    useContext(TechContext);

  const { register, handleSubmit } = useForm<iUpdateTech>();

  function outSideClick(event: any) {
    if (event.target.id === "modal") setUpdateModal(false);
  }

  return (
    <ModalUpdateTechs id="modal" onClick={outSideClick}>
      <div className="closeModal">
        <span>Atualizar tecnologias</span>
        <button onClick={() => setUpdateModal(false)}>
          <SlClose />
        </button>
      </div>
      <div className="container">
        <div className="content">
          <form action="" onSubmit={handleSubmit(updateTech)}>
            <label htmlFor="">Atualizar status</label>
            <select id="" {...register("status")}>
              <option value="">Selecione</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <div className="containerButtons">
              <button className="buttonSave" type="submit">
                Salvar alterações
              </button>
              <button
                onClick={() => removeTech(idTech)}
                className="buttonDelete"
                type="button"
              >
                Excluir
              </button>
            </div>
          </form>
        </div>
      </div>
    </ModalUpdateTechs>
  );
};

export default ModalUpdate;
