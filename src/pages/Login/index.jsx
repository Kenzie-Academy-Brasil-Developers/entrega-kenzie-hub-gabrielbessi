import { useForm } from "react-hook-form";
import { ButtonStyled } from "../../components/Button";
import { FormBorder, LinkStyled as Linked, SectionLogin } from "./styles";
import { useNavigate } from "react-router-dom";
import imageLogo from "../../images/Logo.svg";
import api from "./../../services/api";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  function onForm(data) {
    console.log(data);

    api
      .post("/sessions", data)
      .then((response) => {
        console.log(response);
        const { token, user } = response.data;
        localStorage.setItem("kenzie-hub:token", token);
        api.defaults.headers.common["Authorization"] = token;
        localStorage.setItem("kenzie-hub:user", JSON.stringify(user));
        navigate("/homepage");
      })
      .catch(() =>
        toast.error("Email/senha inválido", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
        })
      );
  }
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
