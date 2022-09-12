import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import Extrato from "./Extrato";
  
export default function Registros(){

    const [registros, setRegistros] = useState('');
    const {token} = useContext(UserContext);
    console.log(token)
    useEffect(()=>{
        console.log('entrou')
        console.log(token)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
         axios.get('http://localhost:5000/registros', config
        ).then(res =>{
            console.log('entrou dentro do then')
            setRegistros(res.data);
        }).catch(erro=>{
            console.log('entrou dentro do catch')
            console.log(erro)
         })
    }, [token]);
    if (!registros){
        console.log('registro esta vazio');
    }else{
        console.log(registros[1]);
    }
    
    const navigate = useNavigate();

    function fazerLogin(){
        navigate('/')
    }
    function entrada(){
        navigate('/entrada')
    }
    function saida(){
        navigate('/saida')
    }

    return (
        <>{!registros? 
        <h2>carregando ...</h2>:
            <Body>
                <Topo>
                    <h2> Olá, {registros[0].email} </h2>
                   <Icone onClick={fazerLogin}> <ion-icon name="log-out-outline"></ion-icon> </Icone>
                </Topo>
                <Registro>
                    {!registros
                    ? 
                    <h1>carregando Extrato...</h1>
                    :
                    <Caixa>
                        <Extrato registros = {registros}/>
                        <Saldo>
                        <h3>Saldo R$</h3>
                        <span>{registros[0].valor}</span>
                        </Saldo>
                    </Caixa>
                    }
                    
                </Registro>

                <Registrar>
                    <div onClick={entrada}>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <h2>Nova entrada</h2>
                    </div>
                    <div onClick={saida}>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <h2>Nova saída</h2>
                    </div>
                </Registrar>
            </Body>
            }
        </>
    )
}

const Caixa = styled.div`
    width: auto;
`
const Saldo = styled.div`
    width: 85vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 70vh;
    z-index: 1;
    h3{
    color: #000000;
    font-size: 6vw;
    font-weight: 700;
    }
    span{
    color: #03AC00;
    font-size: 6vw;
    font-weight: 700;
    }
`

const Body = styled.div`
box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: #9400d3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-size: 4vw;
        color: #FFFFFF;
        &:hover{
            cursor: pointer;
            opacity: 0.8 ;
        }
    }
`

const Topo = styled.div `

    width: 90vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
    color: #FFFFFF;
    font-size: 6vw;
    font-weight: 700;
    }
`

const Registro = styled.div`
    width: 90vw;
    height: 70vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        width: 50vw;
        font-size: 5.5vw;
        font-weight: 400;
        color: #868686;
    }
    
    
`

const Registrar = styled.div`
    box-sizing: border-box;
    width: 90vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
        width: 45%;
        height: 80%;
        border: 1px solid #A328D6 ;
        border-radius: 10px ;
        background-color: #A328D6;
        padding: 1vw;
    }
    ion-icon {
    color: #FFFFFF;
    width: 25%;
    height: 25%;
    }
    h2{
        font-size: 20px;
        color: #FFFFFF;
    }
`


const Icone =  styled.div`
    width: 10vw;
    height: 5vh;
    ion-icon {
    color: #FFFFFF;
    width: 100%;
    height: 100%;
    }
`