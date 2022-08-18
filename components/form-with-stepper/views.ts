import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
export const FormSWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  color: white;
`;
export const InputForm = styled.input`
  border-radius: 20px;
  padding: 0 10px;
  width: 100%;
  color: #ffffff;
  background-color: #00c6ff;
  height: 50px;
  text-align: center;
  margin: 20px 0;
  font-size: 24px;
  box-shadow: inset 0 0 40px 1px black;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  display: flex;
  height: 60px;
  color: white;
  background-color: #33d0ff;
  box-shadow: inset 0 0 30px 1px black;
  display: flex;
  align-items: center;
  font-size: 20px;
  border-radius: 12px;
  margin: 10px 10px;
  justify-content: center;
  width: 20%;
  border: 0.5px solid black;
  cursor: pointer;

  &:hover {
    color: black;
    box-shadow: inset 0 0 10px 1px black;
    border: 0.5px solid white;
  }

  &:active {
    box-shadow: inset 0 0 4px 4px white;
  }
`;
export const ItemBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
export const Select = styled.select`
  border-radius: 20px;
  padding: 0 10px;
  width: 100%;
  color: #ffffff;
  background-color: #00c6ff;
  height: 50px;
  text-align: center;
  margin: 20px 0;
  font-size: 24px;
  box-shadow: inset 0 0 40px 1px black;
`;
export const InputName = styled.p`
  margin: 10px 0 0 0;
  color: #0079b3;
  font-size: 20px;
`;
export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
