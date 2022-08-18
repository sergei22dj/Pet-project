import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('back-ground.jpg');
    height: 100vh;
`;
export const TitleMain = styled.div`
    color: white;
    font-family: '8bit';
    font-size: 100px;
    text-align: center;
    padding-top: 100px;
`;
export const MenuBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    color: white;
`;
export const MenuTitle = styled.div`
    text-align: center;
    margin: 20px 0;
    padding: 5px;
    width: 100%;
    border: 2px solid transparent;
    cursor: pointer;
    &:hover{
        border: 2px solid white;
        border-radius: 12px;
    }
`;

export const Description = styled.div`
height: 100px;
    padding: 5px;
    background-color: black;    
    color: white;
    position: absolute;
    font-size: 24px;
    border: 1px solid white;
    border-radius: 12px;
    bottom: 10px;
`;