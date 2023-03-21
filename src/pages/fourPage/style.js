import styled from 'styled-components';

export const ContainerPage = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
`;

export const ContainerList = styled.div`
    width:100%;
    height: 100%;
    border: 2px solid black;
    flex-wrap: wrap;
    overflow-y: auto;
    .btnDelete{
        background: red;
    }
    .btnUpdate{
        background: blue;
    }
    table{
        width:100%;
        text-align: center;
        tr{
            th{
                width:100px;
                background:#424242;
                color: #fff;
            }
            td{
                height: 30px;
                img{
                    width: 40px;
                    height: 40px;
                    margin: 0 1rem;
                    cursor: pointer;
                    :hover{
                        scale: 1.1;
                        transition: all 0.3s;
                    }
                }
            }
        }
    }
   
`





