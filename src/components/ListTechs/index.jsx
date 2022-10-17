import { useContext } from "react";
import { TechContext } from "../../contexts/tech";
import { UserContext } from "../../contexts/user";
import { TechsStyle } from "./styles";
import { GiEntryDoor } from "react-icons/gi";

const ListTechs = () => {
  const { user } = useContext(UserContext);
  const { setUpdateModal, setTechId } = useContext(TechContext);

  return (
    <TechsStyle>
      {user.techs.map(({ title, status, id }) => (
        <li key={id}>
          <p>{title}</p>
          <div>
            <span>{status}</span>
            <button
              onClick={() => {
                setUpdateModal(true);
                setTechId(id);
              }}
            >
              <GiEntryDoor />
            </button>
          </div>
        </li>
      ))}
    </TechsStyle>
  );
};

export default ListTechs;
