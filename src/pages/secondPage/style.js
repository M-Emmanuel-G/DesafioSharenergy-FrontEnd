import styled from 'styled-components';

export const ContainerPage = styled.div`
    width: 100%;    
    height: 90%;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        button{
            width: 150px;
            height: 30px;
            margin:10px 0;
            font-size: 1rem;
        }
    }
    img{
        width: 50%;
        height: 50%;
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
        background: none;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        color: #fff;
        :hover{
            font-size: 1.3rem;
            transition: all 0.3s;
            color: #00f504;
        }
    }
    input{
            width: 300px;
            height: 30px;
            border: none;
            background: none;
            color: #fff;
            outline: 0;
            ::placeholder{
                text-align: center;
                font-size: 1.5rem;
                font-size: 1rem;
            }
            :hover{
                border-bottom: 1px solid #00f504;
            }
            :focus{
                border-bottom: 1px solid #00f504;
            }
        }
`