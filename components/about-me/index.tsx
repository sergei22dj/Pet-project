import { useState } from "react";
import { TypingText } from "./helpers";
import {
  ButtonAbout,
  Header,
  NameTitle,
  Photo,
  TextArea,
  Wrapper,
} from "./views";

const About = () => {
  const [visible, seVisible] = useState(false);
  console.log(visible);
  return (
    <Wrapper>
      <Header>
        <Photo src="Iam.jpg" />
        <NameTitle>Sergey Shtil</NameTitle>
        <NameTitle>age: 23</NameTitle>
        <NameTitle>location: ukraine sumy</NameTitle>
        <ButtonAbout
          visible={visible}
          onClick={() => [TypingText(), seVisible(true)]}
          disabled={visible}
        >
          More Info
        </ButtonAbout>
      </Header>

      <TextArea>
        <p id="area"></p>
      </TextArea>
    </Wrapper>
  );
};
export default About;
