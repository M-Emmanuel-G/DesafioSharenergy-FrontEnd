import styled from 'styled-components';

export const EachClient = styled.div`
    width: 300px;
    height: 350px;
    background: crimson;
    display: flex;
    flex-direction: column;
    margin: 1rem;
`;

export const InfoClient = styled.div`
    width: 100%;
    height: 90%;
    background: white ;
    div{
        display: flex;
        flex-direction: column;
        margin: 1rem;
        span{
            margin: 2px;
        }
    }
`

export const ActionClient = styled.div`
    width: 100%;
    height: 10%;
    background: white ;
    display:flex;
    justify-content: center;
    align-items: center;
    button{
        width:100px;
        height:30px;
        margin: 0 1rem
    }
`