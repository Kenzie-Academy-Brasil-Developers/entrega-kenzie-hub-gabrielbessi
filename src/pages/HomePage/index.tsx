import Header from "../../components/Header";
import ListTechs from "../../components/ListTechs";
import AddModal from "../../modal/AddModal";
import { SectionHomePage } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { MdOutlineAdd } from "react-icons/md";
import { TechContext } from "../../contexts/tech";
import ModalUpdate from "../../modal/ModalUpdate";

const HomePage = () => {
  const { user, loading } = useContext(UserContext);
  const { modalIsOpen, setModalIsOpen, updateModal } = useContext(TechContext);

  if (loading) {
    return null;
  }

  return (
    <>
      <Header />
      {modalIsOpen ? <AddModal /> : null}
      {updateModal ? <ModalUpdate /> : null}
      <SectionHomePage>
        <div className="textName">
          <p>Olá, {user.name}</p>
          <span>{user.course_module}</span>
        </div>
        <div className="textTecnology">
          <span>Tecnologias</span>
          <button onClick={() => setModalIsOpen(true)}>
            <MdOutlineAdd />
          </button>
        </div>
        <div className="textConted">
          <ListTechs />
        </div>
      </SectionHomePage>
    </>
  );
};

export default HomePage;
