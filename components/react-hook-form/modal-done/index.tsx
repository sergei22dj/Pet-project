import React, { FC } from "react";
import { Content, GradientBorder, Image, Text, Wrapper } from "./views";

interface Props {
  active: boolean;
  setActive: (arg: boolean) => void;
}

const ModalDone: FC<Props> = ({ active, setActive }) => {
  return (
    <Wrapper activeModal={active} onClick={() => setActive(false)}>
      <Content activeModal={active} onClick={(e) => e.stopPropagation()}>
        <Text>
          Done!!! <br /> Registration has been complited
        </Text>
        <GradientBorder>Done !</GradientBorder>
      </Content>
    </Wrapper>
  );
};
export default ModalDone;
