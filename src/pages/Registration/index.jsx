import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Registration = () => {
  const { register, handleSubmit } = useForm();

  function onRegister(data) {
    console.log(data);
  }

  return (
    <section>
      <h1>Kenzie hub</h1>
      <Link to={"/"}>Voltar</Link>
      <div>
        <p>Crie sua conta</p>
        <span>Rápido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onRegister)}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <label htmlFor="">Senha</label>
          <input
            type="text"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />

          <label htmlFor="">Confirmar senha</label>
          <input type="text" placeholder="Digite novamente sua senha" />

          <label htmlFor="">Bio</label>
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <label htmlFor="">Contato</label>
          <input
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <label htmlFor="">Selecione o módulo</label>
          <select name="" id="" {...register("course_module")}>
            <option value="">Selecione</option>
            <option value="primeiro modulo">Primeiro módulo</option>
            <option value="segundo modulo">Segundo módulo</option>
            <option value="terceiro modulo">Terceiro módulo</option>
            <option value="quarto modulo">Quarto módulo</option>
            <option value="quinto modulo">Quinto módulo</option>
            <option value="sexto modulo">Sexto módulo</option>
          </select>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </section>
  );
};

export default Registration;
