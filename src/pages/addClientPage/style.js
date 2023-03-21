import styled from 'styled-components';

export const ContainerPage = styled.div`
    width: 100%;
    height: 90%;
    background: #000000;
    display: flex;
    justify-content: center;
`;

export const ContainerAdd = styled.div`
    width: 40%;
    height: 100%;
    form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h2{
            color: white;
        }
        input{
            width: 300px;
            height: 30px;
            margin: 1rem 0;
            outline: 0;
            text-align: center;
            color: #fff;
            font-size: 1rem;
            background: none;
            border: none;
            :hover{
                border-bottom: 1px solid green;
            }
            :focus{
                border-bottom: 1px solid green;
            }

            ::placeholder{
                text-align: center;
                font-size: 1rem;
                font-weight: bold;
            }
        }
        button{
            margin: 1rem 0;
            width: 250px;
            height: 30px;
            background: #00f504;
            border-radius: 20px;
            border: none;
        }
    }
`