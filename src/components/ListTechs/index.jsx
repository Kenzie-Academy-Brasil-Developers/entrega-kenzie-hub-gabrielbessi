import { useContext } from "react";
import { TechContext } from "../../contexts/Tech";
import { UserContext } from "../../contexts/user";
import { TechsStyle } from "./styles";
import { BsTrashFill } from "react-icons/bs";

const ListTechs = () => {
  const { user } = useContext(UserContext);
  const { removeTech } = useContext(TechContext);
  return (
    <TechsStyle>
      {user.techs.map(({ title, status, id }) => (
        <li key={id}>
          <p>{title}</p>
          <div>
            <span>{status}</span>
            <button onClick={() => removeTech(id)}>
              <BsTrashFill />
            </button>
          </div>
        </li>
      ))}
    </TechsStyle>
  );
};

export default ListTechs;
