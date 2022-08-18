import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #212632;
  margin: 40px 0;
`;
export const Input = styled.input`
  height: 50px;
  border-radius: 12px;
  border: none;
  padding: 14px;
  margin-top: 26px;
  background-color: #ceffff;
`;
export const ErrorText = styled.div`
  margin: 0 10px;
  color: red;
  font-size: 12px;
`;
export const Button = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  width: 50%;
  background-color: #c9b6db;
  margin: 20px auto;
  cursor: pointer;
`;
