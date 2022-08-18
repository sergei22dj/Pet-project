import { useFieldArray, useForm } from "react-hook-form";
import { Button, ErrorText, Form, Input, InputWrapper, Wrapper } from "./views";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import ModalDone from "./modal-done";

export interface IForm {
  form: {
    name: string;
    email: string;
    phone: string;
  }[];
}

const schema = yup.object().shape({
  form: yup.array().of(
    yup.object().shape({
      name: yup.string().required("This field cannot be empty"),
      email: yup
        .string()
        .required("This field cannot be empty")
        .email("you made a mistake"),
      phone: yup
        .string()
        .required("This field cannot be empty")
        .matches(
          /^((\+?3)?8)?0\d{9}$/,
          'phone number must start with "+380" and contain 9 numbers after'
        ),
    })
  ),
});
const RHForm = () => {
  const [modalActive, setModalActive] = useState(false);
  const [access, setAccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IForm>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray<IForm>({
    name: "form",
    control,
  });

  const onSubmit = (data: IForm) => {
    setAccess(true);
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const modalActivated = () => {
    setModalActive(!errors.form);
    setTimeout(() => setModalActive(false), 4000);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <InputWrapper key={field.id}>
              <Input placeholder="name" {...register(`form.${index}.name`)} />
              <ErrorText>{errors?.form?.[index]?.name?.message}</ErrorText>
              <Input
                placeholder="e-mail"
                {...register(`form.${index}.email`)}
              />
              <ErrorText>{errors?.form?.[index]?.email?.message}</ErrorText>
              <Input
                placeholder="phone number"
                {...register(`form.${index}.phone`)}
              />
              <ErrorText>{errors?.form?.[index]?.phone?.message}</ErrorText>
              <Button onClick={() => remove(index)}>delete</Button>
            </InputWrapper>
          );
        })}
        <Button onClick={() => onSubmit}>Check</Button>
        <Button onClick={() => append({ name: "", email: "", phone: "" })}>
          add form
        </Button>
      </Form>

      <Button onClick={modalActivated} disabled={!access}>
        register form
      </Button>
      <ModalDone active={modalActive} setActive={setModalActive} />
    </Wrapper>
  );
};
export default RHForm;
