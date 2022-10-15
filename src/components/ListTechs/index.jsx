import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { TechsStyle } from "./styles";

const ListTechs = () => {
  const { user } = useContext(UserContext);
  return (
    <TechsStyle>
      {user.techs.map(({ title, status, id }) => (
        <li key={id}>
          <p>{title}</p>
          <div>
            <span>{status}</span>
          </div>
        </li>
      ))}
    </TechsStyle>
  );
};

export default ListTechs;
