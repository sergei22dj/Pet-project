import styled from 'styled-components';
import { columnPadding, stringPadding } from './helpers';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: blanchedalmond;
    min-height: 100vh;
`;
export const ContainerArea = styled.div`
    display: flex;
    flex-direction: column;
`;
export const CubesWrapper = styled.div<{columns : number, strings: number}>`
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    grid-template-rows: ${({ strings }) => `repeat(${strings}, 1fr)`};
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;
export const Cube = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 1px;
    background-color: #9e9ef5;
    width: 50px;
    height: 50px;
    transition: 0.4s;
    &:hover{
        border: 1px solid white;
        background-color: #bebef1;
        transition: 0s;

    }
`;
export const AreaWrapper = styled.div`
    display: flex;
`;
// Buttons \/====================\/

export const ButtonAdd = styled.button`
    background-color: #9be79b;
    width: 50px;
    height: 50px;
    margin: 1px;
    border: none;
    &:hover{
        border: 1px solid white;
    }
    &:disabled{
       opacity: 0;
    }
`;
export const ButtonDelete = styled.button`
    background-color: #cd7b7b;
    width: 50px;
    height: 50px;
    margin: 1px;
    border: none;
    &:hover{
        border: 1px solid white;
    }
    &:disabled{
        opacity: 0;
    }
`;
// Container for Add Buttons \/=============\/

export const AddColumnButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const AddStringButtonContainer = styled.div`
margin-left: 52px;
    display: flex;
`;
// Containers for Delete Buttons \/===============\/

export const DelColumnBtnContainer = styled.div<{columns: number, cubeIndex: number}>`
    opacity: ${({ cubeIndex }) => `${cubeIndex === 0.1 ? '0' : '1'}`};
    width: ${({ columns }) => `${columns * 52}px`};
    padding-left: ${({ columns, cubeIndex }) => `calc(52px + ${columnPadding(cubeIndex, columns)}px)`};
`;
export const DelStringBtnContainer = styled.div<{strings: number, columns: number, cubeIndex: number}>`
    opacity: ${({ cubeIndex }) => `${cubeIndex === 0.1 ? '0' : '1'}`};
    height: ${({ strings }) => `${strings * 52}px`};
    padding-top:${({ strings, columns, cubeIndex }) => `${stringPadding(cubeIndex, columns, strings)}px`};
    
`;
