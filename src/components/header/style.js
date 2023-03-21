import styled from 'styled-components';

export const ContainerHeader = styled.div`
    width: 100%;
    height: 10%;
    background: #424242;
    div{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            width: 150px;
            height: 30px;
            border-radius: 10px;
            margin: 0 3rem;
            border: none;
            background: none;
            color: #fff;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            :hover{
                scale: 1.1;
                transition: .2s ease-in-out;
            }
        }
    }
`;