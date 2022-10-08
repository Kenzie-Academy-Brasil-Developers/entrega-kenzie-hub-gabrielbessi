import { useForm } from "react-hook-form";
import { ButtonStyled } from "../../components/Button";
import { FormRegistration, HeaderForm } from "./style";
import { LinkRegistration as Link } from "./style";
import imageLogo from "../../images/Logo.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "./../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Mínimo 8 caracteres. Conter letras, números e ao menos um símbolo"
      ),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes, por favor confirmar"),
    bio: yup.string().required("bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Informar o módulo que está cursando"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onRegister(data) {
    delete data.password_confirm;
    api
      .post("/users", data)
      .then(
        () =>
          toast.success("Conta criada com sucesso!", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
          }),
        navigate("/")
      )
      .catch(
        () =>
          toast.error("Ops! Algo deu errado", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
          }),
        navigate("/registration")
      );
  }

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
          <form onSubmit={handleSubmit(onRegister)}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>

            <label htmlFor="">Confirmar senha</label>
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("password_confirm")}
            />
            <p>{errors.password_confirm?.message}</p>

            <label htmlFor="">Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <p>{errors.bio?.message}</p>
            <label htmlFor="">Contato</label>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <label htmlFor="">Selecione o módulo</label>
            <select name="" id="" {...register("course_module")}>
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
