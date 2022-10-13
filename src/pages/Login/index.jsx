import { ButtonStyled } from "../../components/Button";
import { FormBorder, LinkStyled as Linked, SectionLogin } from "./styles";
import imageLogo from "../../images/Logo.svg";
import { useContext } from "react";
import { UserContext } from "./../../contexts/user";

const Login = () => {
  const { handleSubmit, register, onForm } = useContext(UserContext);

  return (
    <>
      <SectionLogin>
        <img src={imageLogo} alt="" />
        <FormBorder>
          <p>Login</p>
          <div>
            <form onSubmit={handleSubmit(onForm)}>
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="exemplo@kenzie.com.br"
                {...register("email")}
              />
              <label>Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <ButtonStyled type="submit">Entrar</ButtonStyled>
            </form>

            <span>Ainda não possui um conta?</span>
            <Linked to={"/registration"}>Cadastre-se</Linked>
          </div>
        </FormBorder>
      </SectionLogin>
    </>
  );
};

export default Login;
