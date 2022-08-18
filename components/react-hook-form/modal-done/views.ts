import styled from 'styled-components';

export const Wrapper = styled.div<{ activeModal: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ activeModal }) => (activeModal ? '1' : '0')};
  pointer-events: ${({ activeModal }) => (activeModal ? 'all' : 'none')};
  transition: 0.5s;
`;
export const WrapperActive = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  pointer-events: all;
  transition: 0.5s;
`;
export const Content = styled.div<{ activeModal: boolean }>`
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  transform: ${({ activeModal }) => (activeModal ? 'scale(1)' : 'scale(0.3)')};
  transition: 0.5s;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const ContentActive = styled.div`
  border-radius: 12px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  transform: scale(1);
  transition: 0.5s;
`;
export const InputM = styled.input`
  height: 65px;
  font-size: 30px;
  margin: 20px 0;
  border-radius: 10px;
  border: 1px solid rgb(3, 27, 27);
  width: 100%;
`;
export const Button = styled.div`
  margin-top: 20px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid rgb(3, 27, 27);
  width: 50%;
  font-size: 30px;
`;
export const Text = styled.p`
  text-align: center;
  margin: 10px 0;
  color: #64c1dd;
  font-size: 34px;
`;
export const WrapperModal = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const GradientBorder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: rgb(163, 38, 38);
  font-family: 'Raleway';
  font-size: 2.5rem;
  --borderWidth: 3px;
  background: #1d1f20;
  position: relative;
  border-radius: var(--borderWidth);
  width: 100%;
  margin: 20px 0;

  &:after {
    content: '';
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
