import React from "react";
import Modal from "./modal";
// views
import {
  Button,
  ButtonsWrapper,
  FormSWrapper,
  InputForm,
  InputName,
  InputWrapper,
  ItemBlockWrapper,
  Select,
  Wrapper,
} from "./views";

export interface InputList {
  [key: string]: string | number;
  id: number;
  name: string;
  lastname: string;
  sex: string;
}

const FormWStepper = () => {
  const [modalActive, setModalActive] = React.useState(false);
  const [inputList, setInputList] = React.useState<InputList[]>([]);

  const handleChangeInput = (
    index: number,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const values = [...inputList];
    values[index][e.target.name] = e.target.value;
    setInputList(values);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Дані про користувачів : ", inputList);
  };

  const addInputItem = () => {
    setInputList([
      ...inputList,
      { id: inputList.length + 1, name: "", lastname: "", sex: "" },
    ]);
  };

  const deleteInputItem = (id: number) => {
    const values = [...inputList];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputList(values);
  };

  // scroll bottom
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [inputList]);
  // -------------

  return (
    <Wrapper>
      <FormSWrapper onSubmit={handleSubmit}>
        {inputList.map((inputItem, index) => (
          <ItemBlockWrapper key={index}>
            <InputWrapper>
              (block : {inputItem.id})<InputName>NAME :</InputName>
              <InputForm
                name="name"
                value={inputItem.name}
                onChange={(e) => handleChangeInput(index, e)}
              />
              <InputName>LASTNAME :</InputName>
              <InputForm
                name="lastname"
                value={inputItem.lastname}
                onChange={(e) => handleChangeInput(index, e)}
              />
              <InputName>LIFE POSITION :</InputName>
              <Select
                placeholder="sex"
                name="sex"
                value={inputItem.orientation}
                onChange={(e) => handleChangeInput(index, e)}
              >
                <option>male</option>
                <option>famale</option>
              </Select>
            </InputWrapper>
            <Button onClick={() => deleteInputItem(inputItem.id)}>
              delete
            </Button>
          </ItemBlockWrapper>
        ))}
      </FormSWrapper>
      <ButtonsWrapper>
        <Button onClick={addInputItem}>add form</Button>
        <Button onClick={handleSubmit}>see on console</Button>
        <Button onClick={() => setModalActive(true)}>see on modal :)</Button>
      </ButtonsWrapper>

      <Modal list={inputList} active={modalActive} setActive={setModalActive} />
      <div ref={messagesEndRef} />
    </Wrapper>
  );
};
export default FormWStepper;
