import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { PASSWORD_STRENGTH_REGEX } from "../../Utils/validations";
import { ErrorMsg, FieldsContainer } from "../../StyledComponents/FieldsContainer";
import { ButtonsContainer, FormContainer } from "./RegisterPage.styles";
import { Input } from "../../StyledComponents/Input";
import { Button } from "../../StyledComponents/Button";
import db from "../../Utils/firebase";
import "firebase/firestore";
import { useState } from "react";
import OverlayLoader from "../../components/OverlayLoader";

export default function NewAdmin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const [pwd] = watch(["password"]);

  const onFormSubmit = async (data) => {
    setLoading(true);
    try {
      const newUser = {
        username: data.name,
        job: data.job,
        team: data.team,
        sucursal: data.sucursal,
        code: data.code,
        password: data.password,
      };

      await db.collection("users").doc().set(newUser);
      reset();
    } catch (error) {
      console.log("Failed register: =>>", error);
    }
    setLoading(false);
  };

  return (
    <OverlayLoader loading={loading}>
      <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
        <FieldsContainer>
          <h1 align="center">¡BIENVENIDO!</h1>
          <label align="left">
            Nombre
            <Input
              placeholder={"Nombre de Usuario"}
              {...register("name", {
                required: "Nombre de Usuario requerido",
              })}
            />
            {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
          </label>
          <label align="left">
            Puesto
            <Input
              placeholder={"Puesto Laboral"}
              {...register("job", {
                required: "Puesto Laboral requerido",
              })}
            />
            {errors.job && <ErrorMsg>{errors.job?.message}</ErrorMsg>}
          </label>
          <label align="left">
            Equipo a su cargo
            <Input
              placeholder={"Equipo a cargo"}
              {...register("team", {
                required: "Equipo requerido",
              })}
            />
            {errors.team && <ErrorMsg>{errors.team?.message}</ErrorMsg>}
          </label>
          <label align="left">
            Sucursal
            <Input
              placeholder={"Sucursal de trabajo"}
              {...register("sucursal", {
                required: "Nombre de Sucursal requerido",
              })}
            />
            {errors.sucursal && <ErrorMsg>{errors.sucursal?.message}</ErrorMsg>}
          </label>
          <label align="left">
            Código de Seguridad
            <Input
              placeholder={"Código de Seguridad"}
              type="password"
              {...register("code", {
                required: "Código de Seguridad requerido",
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
                deps: ["password"],
                validate: (value) => value === pwd || "Las contraseñas no coinciden",
              })}
            />
            {errors.repPass && <ErrorMsg>{errors.repPass?.message}</ErrorMsg>}
          </label>
        </FieldsContainer>
        <ButtonsContainer>
          <br></br>
          <Button type="submit">Registrarse</Button>
          <Button type="button" onClick={() => navigate("/")}>
            Cancelar
          </Button>
        </ButtonsContainer>
      </FormContainer>
    </OverlayLoader>
  );
}
