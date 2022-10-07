import { useForm } from "react-hook-form";
import { ButtonStyled } from "../../components/Button";
import { FormBorder, LinkStyled as Linked } from "./styles";

const Login = () => {
  const { register, handleSubmit } = useForm();

  function onForm(data) {
    console.log(data);
  }
  return (
    <>
      <h1>Kenzie Hub</h1>
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
    </>
  );
};

export default Login;
