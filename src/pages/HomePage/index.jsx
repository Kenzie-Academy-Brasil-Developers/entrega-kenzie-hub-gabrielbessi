import Header from "../../components/Header";
import { SectionHomePage } from "./styles";
import { useContext } from "react";
import { UserContext } from "./../../contexts/user";

const HomePage = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return (
    <>
      <Header />
      <SectionHomePage>
        <div className="textName">
          <p>Olá, {user.name}</p>
          <span>{user.course_module}</span>
        </div>
        <div className="textConted">
          <h2>Que pena estamos em desenvolvimento :(</h2>
          <p>Nossa aplicação está em desenvolvimento</p>
        </div>
      </SectionHomePage>
    </>
  );
};

export default HomePage;
