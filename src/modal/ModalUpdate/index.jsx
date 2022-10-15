import { useContext } from "react";
import { TechContext } from "../../contexts/Tech";

const ModalUpdate = () => {
  const { setUpdateOpen } = useContext(TechContext);
  return (
    <div className="modal">
      <div>
        <span>Atualizar tecnologias</span>
        <button onClick={() => setUpdateOpen(false)}>fechar</button>
      </div>
      <div className="">
        <div className="">
          <form action="">
            <label htmlFor="">Atualizar status</label>
            <select name="" id="">
              <option value="">Selecione</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button type="submit">Salvar alterações</button>
            <button type="button"> Excluir</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdate;
