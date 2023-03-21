import styled from 'styled-components';

export const ContainerLogin = styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
        color: #fff;
    }
    form{
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(255,255,255, 0.1);
        border-radius: 30px;
       
        
        button{
            width: 100px;
            height: 25px;
            background: green;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: bold;
            margin: 2rem 0;
            color: #fff;
        }
    }
`;

export const LoginCamp = styled.div`
    width: 100%;
    height: 80%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input{
            width: 300px;
            height: 25px;
            margin: 10px 0;
            outline: 0;
            border: none;
            background: none;
            color: #fff;
            text-align: center;
            font-size: 1.2rem;
            
            :hover{
                border-bottom: 1px solid green;
                transition: .7s ;
            }
            :focus{
                border-bottom: 1px solid green;
            }
            ::placeholder{
                text-align: center;
                font-size: 1rem;
                font-weight: 800;
                color: #fff;
            }
        }
`

export const ButtonCamp = styled.div`
    width: 100%;
    height: 20%;
    background: yellow;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button{
            width: 100px;
            height: 25px;
            background: green;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: bold;
            margin: 2rem 0;
            color: #fff;
        }
    div{
        label{
            margin-right: 2rem;
        }
    }
`