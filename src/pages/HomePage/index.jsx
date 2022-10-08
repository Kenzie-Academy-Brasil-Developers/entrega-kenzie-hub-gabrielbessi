import Header from "../../components/Header";
import { SectionHomePage } from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";

const HomePage = () => {
  const [token, setToken] = useState(
    localStorage.getItem("kenzie-hub:token") || null
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("kenzie-hub:user")) || null
  );
  console.log(token);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = token;
    }
  }, []);

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
