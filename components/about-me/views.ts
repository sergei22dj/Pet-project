import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: black;
    color: white;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const Photo = styled.img`
    margin: 20px 0;
    height: 150px;
    width: 158px;
    border-radius: 50%;
    border: solid 2px white;
`;
export const ButtonAbout = styled.button<{visible: boolean}>`

    color: black;
    background-color: white;
    margin-top: 20px;
    width: 150px;
    height: 30px;
    transition: 0.5s;
    opacity: ${({visible}) => visible ? '0' : '1'};
    cursor: ${({visible}) => visible ? 'auto' : 'pointer'};
`;
export const NameTitle = styled.div`
    font-size: 25px;
`;
export const TextArea = styled.div`

`;