import * as yup from "yup";

export const formSchema = yup.object().shape({
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
