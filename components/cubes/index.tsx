// hooks
import React from "react";
import { useEffect, useState } from "react";
// views
import {
  AddColumnButtonContainer,
  AddStringButtonContainer,
  AreaWrapper,
  ButtonAdd,
  ButtonDelete,
  ContainerArea,
  Cube,
  CubesWrapper,
  DelColumnBtnContainer,
  DelStringBtnContainer,
  Wrapper,
} from "./views";

const Cubes = () => {
  const [string, setString] = useState(2);
  const [column, setColumn] = useState(2);

  const [cubes, setCubes] = useState([Array(column * string).fill("")]);

  const [cubeIndex, setCubeIndex] = useState(0);

  useEffect(() => {
    setCubes([Array(column * string).fill("")]);
  }, [string, column]);

  const addColumn = () => {
    setColumn((prev) => prev + 1);
  };

  const addString = () => {
    setString((prev) => prev + 1);
  };

  const deleteColumn = () => {
    setColumn((prev) => prev - 1);
  };

  const deleteString = () => {
    setString((prev) => prev - 1);
  };

  return (
    <Wrapper>
      <ContainerArea onMouseLeave={() => setCubeIndex(0.1)}>
        <DelColumnBtnContainer columns={column} cubeIndex={cubeIndex}>
          <ButtonDelete
            disabled={column < 3 || cubeIndex === 0.1}
            onClick={deleteColumn}
          >
            -
          </ButtonDelete>
        </DelColumnBtnContainer>

        <AreaWrapper>
          <DelStringBtnContainer
            strings={string}
            columns={column}
            cubeIndex={cubeIndex}
          >
            <ButtonDelete
              disabled={string < 3 || cubeIndex === 0.1}
              onClick={deleteString}
            >
              -
            </ButtonDelete>
          </DelStringBtnContainer>
          <CubesWrapper strings={string} columns={column}>
            {cubes[0].map((cubes, index) => (
              <Cube onMouseEnter={() => setCubeIndex(index)} key={index}>
                {cubes}
              </Cube>
            ))}
          </CubesWrapper>

          <AddColumnButtonContainer>
            <ButtonAdd disabled={column > 10} onClick={addColumn}>
              +
            </ButtonAdd>
          </AddColumnButtonContainer>
        </AreaWrapper>
        <AddStringButtonContainer>
          <ButtonAdd disabled={string > 10} onClick={addString}>
            +
          </ButtonAdd>
        </AddStringButtonContainer>
      </ContainerArea>
    </Wrapper>
  );
};
export default Cubes;
