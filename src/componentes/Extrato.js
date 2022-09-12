import styled from "styled-components";


export default function Extrato({registros}){
    console.log(registros[1])
    return (
        <>
            {
                registros[1].map(value => 
                <Caixa>
                    <Caixa1>
                        <h5>{value.date}</h5> 
                        <h3>{value.descricao}</h3>
                    </Caixa1>
                    {value.type === 'entrada'? 
                    <b>{value.valor}</b> :
                    <h4>{value.valor}</h4>
                    }
                </Caixa>
                )}
        </>
    )
}

const Caixa1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Caixa = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85vw;
    height: 5vh;
    h5{
        margin: 0;
        color: #C6C6C6 ;
        font-size: 5vw;
        font-weight: 400;
    }
    h3{
        margin: 0;
        margin-left: 1vw;
        color: #000000;
        font-size: 5vw;
        font-weight: 400;
    }
    b{
        margin: 0;
        color: #03AC00 ;
        font-size: 5vw;
        font-weight: 400;
    }
    h4{
        margin: 0;
        color: #C70000;
        font-size: 5vw;
        font-weight: 400;
    }


`