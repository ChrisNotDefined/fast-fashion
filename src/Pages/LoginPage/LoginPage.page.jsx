import { Img } from "./LoginPage.styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { PASSWORD_STRENGTH_REGEX } from "../../Utils/validations";
import { ButtonsContainer, InputsContainer, FormContainer } from "./LoginPage.styles";

import { Input } from "../../StyledComponents/Input";
import { Button } from "../../StyledComponents/Button";
import db from "../../Utils/firebase";
import "firebase/firestore";
import { ErrorMsg } from "../../StyledComponents/FieldsContainer";
import OverlayLoader from "../../components/OverlayLoader";
import { useState } from "react";

export default function ImageInput() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (data) => {
    setLoading(true);
    try {
      const snapshot = await db.collection("users").where("username", "==", data.name).get();
      const docs = snapshot.docs.map((doc) => doc.data());
      if (docs.length <= 0) {
        console.log("User not founded");
      } else {
        if (docs[0].password !== data.password) {
          console.log("Incorrect Passowrd");
        } else if (docs[0].code !== data.code) {
          console.log("Incorrect Code");
        } else {
          console.log("User Loged");
        }
      }
    } catch (error) {
      console.log("Failed to login: =>>", error);
    }
    setLoading(false);
  };

  return (
    <OverlayLoader loading={loading}>
      <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
        <div align="center">
          <h1 align="center">¡BIENVENIDO!</h1>
          <Img />
          <InputsContainer>
            <br></br>
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
            <label align="left">
              Contraseña
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
            <Button type="button" onClick={() => navigate("new-user")}>
              Registrar usuario
            </Button>
          </ButtonsContainer>
        </div>
      </FormContainer>
    </OverlayLoader>
  );
}
