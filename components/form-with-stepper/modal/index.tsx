import React, { FC } from "react";
import { InputList } from "..";
import { Content, GradientBorder, Text, Wrapper } from "./views";

interface Props {
  list: InputList[];
  active: boolean;
  setActive: (arg: boolean) => void;
}

const Modal: FC<Props> = ({ list, active, setActive }) => {
  return (
    <Wrapper activeModal={active} onClick={() => setActive(false)}>
      <Content activeModal={active} onClick={(e) => e.stopPropagation()}>
        <GradientBorder>
          {list.map((item, index) => (
            <div key={index}>
              <Text>№{item.id}</Text>
              <Text>Name: {item.name}</Text>
              <Text>Surname: {item.lastname}</Text>
              <Text>Sex: {item.sex}</Text>
            </div>
          ))}
        </GradientBorder>
      </Content>
    </Wrapper>
  );
};
export default Modal;
