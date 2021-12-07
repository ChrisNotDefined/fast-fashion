import { useForm } from "react-hook-form";
import { PASSWORD_STRENGTH_REGEX } from "../../../Utils/validations";
import { ErrorMsg, FieldsContainer } from "../../../StyledComponents/FieldsContainer";
import { ButtonsContainer, FormContainer } from "./RegisterPage.styles"
import { Input } from "../../../StyledComponents/Input";
import { Button } from "../../../StyledComponents/Button";

export default function NewAdmin() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm();

  const [pwd, rpwd] = watch(["password", "repPass"]);

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <FieldsContainer>
      <h1 align="center">¡BIENVENIDO!</h1>
      <label align="left">Nombre
      <Input
            placeholder={"Nombre de Usuario"}
            {...register("name", {
              required: "Nombre de Usuario requerido"
            })}
      />
      {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
      </label>
      <label align="left">Puesto
      <Input
            placeholder={"Puesto Laboral"}
            {...register("job", {
              required: "Puesto Laboral requerido"
            })}
      />
      {errors.job && <ErrorMsg>{errors.job?.message}</ErrorMsg>}
      </label>
      <label align="left">Equipo a su cargo
      <Input
            placeholder={"Equipo a cargo"}
            {...register("team", {
              required: "Equipo requerido"
            })}
      />
      {errors.team && <ErrorMsg>{errors.team?.message}</ErrorMsg>}
      </label>
      <label align="left">Sucursal
      <Input
            placeholder={"Sucursal de trabajo"}
            {...register("sucursal", {
              required: "Nombre de Sucursal requerido"
            })}
      />
      {errors.sucursal && <ErrorMsg>{errors.sucursal?.message}</ErrorMsg>}
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
      <label>
          Contraseña
          <Input
            placeholder={"Contraseña"}
            type="password"
            {...register("password", {
              required: "La contraseña es requerida",
              pattern: {
                value: PASSWORD_STRENGTH_REGEX,
                message:
                  "La contraseña debe tener un minimo de 6 caracteres, mayúsculas, minúsculas y simbolos",
              },
            })}
          />
          {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
      </label>
      <label>
          Repetir contraseña
          <Input
            placeholder={"Repetir Contraseña"}
            type="password"
            {...register("repPass", {
              required: "La contraseña es requerida",
              validate: (value) =>
                value === getValues("password") || "Las contraseñas no coinciden",
            })}
          />
          {errors.repPass && pwd !== rpwd && <ErrorMsg>las contraseñas no coinciden</ErrorMsg>}
      </label>
      </FieldsContainer>
      <ButtonsContainer>
        <br></br>
        <Button type="submit">Registrarse</Button>
      </ButtonsContainer>
    </FormContainer>
  );
}
