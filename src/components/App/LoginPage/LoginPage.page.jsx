import { Img } from "./LoginPage.styles";
import { useForm } from "react-hook-form";
import { PASSWORD_STRENGTH_REGEX } from "../../../Utils/validations";
import { ButtonsContainer, InputsContainer, FormContainer, ErrorMsg } from "./LoginPage.styles"
import { Input } from "../../../StyledComponents/Input";
import { Button } from "../../../StyledComponents/Button";

export default function ImageInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
   <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
     <div align="center">
      <br></br>
      <br></br>
      <Img type="image"></Img>
      <InputsContainer>
      <br></br>
      <label align="left">Nombre
      <Input
            placeholder={"Nombre de Usuario"}
            {...register("name", {
              required: "Nombre de Usuario requerido"
            })}
      />
      {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
      </label>
      <label align="left">Código de Seguridad
      <Input
            placeholder={"Código de Seguridad"}
            {...register("code", {
              required: "Código de Seguridad requerido"
            })}
      />
      {errors.code && <ErrorMsg>{errors.code?.message}</ErrorMsg>}
      </label>
      <label align="left">Contraseña
      <Input
            placeholder={"Contraseña"}
            type="password"
            {...register("password", {
              required: "Contraseña requerida",
              pattern: {
                value: PASSWORD_STRENGTH_REGEX,
                message: "Contraseña Incorrecta",
              },
            })}
      />
      {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
      </label>
      </InputsContainer>
      <ButtonsContainer>
        <Button type="submit">Iniciar Sesión</Button>
      </ButtonsContainer>
     </div>
    </FormContainer>
  );
}
