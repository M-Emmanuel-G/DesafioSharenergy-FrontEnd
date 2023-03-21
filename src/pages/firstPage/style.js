import styled from 'styled-components';

export const ContainerSearch = styled.div`
    width: 100%;
    height: 10%;
    background:#131314;
    display:flex;
    justify-content:center;
    align-items:center;
    
    input{
        width: 300px;
        height: 30px;
        margin: 0 1rem;
        border: none;
        background: none;
        outline: 0;
        text-align: center;
        color: #fff;
        font-size: 2rem;

        ::placeholder{
            text-align: center;
            font-size: 2rem;
            color: #fff;
        }
        :hover{
            border-bottom: 1px solid #00f504;
        }
        :focus{
            border-bottom: 1px solid #00f504;
        }
    }
    button{
        width: 100px;
        height: 30px;
        margin: 0 1rem;
        color: #fff;
        background: none;
        border: none;
        :hover{
            scale: 1.2;
            transition: .4s;
            color: #00f504;
            cursor: pointer;
        }
    }
` 

export const ContainerPage = styled.div`

    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    color: #fff;
    background: #000;
    flex-wrap: wrap;
    span{
            margin:10px 0;
        }
        img{
            width: 200px;
            height: 190px;
            margin-top: 5%;
            border-radius: 50%;
        }
    
`

export const CardUser = styled.div`
    width: 300px;
    height: 400px;
    background: #00f504;
    display:flex;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    border-radius: 10%;
    opacity: 0.5;
    color: #131314;
`

