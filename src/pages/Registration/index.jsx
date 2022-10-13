import { ButtonStyled } from "../../components/Button";
import { FormRegistration, HeaderForm } from "./style";
import { LinkRegistration as Link } from "./style";
import imageLogo from "../../images/Logo.svg";
import { useContext } from "react";
import { UserContext } from "./../../contexts/user";

const Registration = () => {
  const { registerRegistration, handleSubmitRegistration, onRegister, errors } =
    useContext(UserContext);

  return (
    <>
      <HeaderForm>
        <img src={imageLogo} alt="" />
        <Link to={"/"}>Voltar</Link>
      </HeaderForm>
      <FormRegistration>
        <div className="textRegistration">
          <p>Crie sua conta</p>
          <span>Rápido e grátis, vamos nessa</span>
        </div>
        <div>
          <form onSubmit={handleSubmitRegistration(onRegister)}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...registerRegistration("name")}
            />
            <p>{errors.name?.message}</p>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Digite aqui seu email"
              {...registerRegistration("email")}
            />
            <p>{errors.email?.message}</p>
            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...registerRegistration("password")}
            />
            <p>{errors.password?.message}</p>

            <label htmlFor="">Confirmar senha</label>
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              {...registerRegistration("password_confirm")}
            />
            <p>{errors.password_confirm?.message}</p>

            <label htmlFor="">Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...registerRegistration("bio")}
            />
            <p>{errors.bio?.message}</p>
            <label htmlFor="">Contato</label>
            <input
              type="text"
              placeholder="Opção de contato"
              {...registerRegistration("contact")}
            />
            <label htmlFor="">Selecione o módulo</label>
            <select name="" id="" {...registerRegistration("course_module")}>
              <option value="">Selecione</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo
              </option>
            </select>
            <p>{errors.course_module?.message}</p>

            <ButtonStyled type="submit">Cadastrar</ButtonStyled>
          </form>
        </div>
      </FormRegistration>
    </>
  );
};

export default Registration;
