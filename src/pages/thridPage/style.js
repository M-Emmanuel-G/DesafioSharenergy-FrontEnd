import styled from 'styled-components';

export const ContainerPage = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    justify-content: center;
    img{
        width: 50%;
        height: 70%;
        border-radius: 100px;
    }
`;

export const ContainerAction = styled.div`
    width: 100%;
    height: 10%;
    background:#424242;
    display:flex;
    justify-content:center;
    align-items:center;
    button{
        width: 150px;
        height: 30px;
        margin: 0 10px;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        background: none;
        color: #fff;
        :hover{
            font-size: 20px;
            transition: all 0.3s
        }
    }
`