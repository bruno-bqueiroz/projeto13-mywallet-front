import styled from "styled-components";
import UserContext from "../context/UserContext";
import {useNavigate} from 'react-router-dom';
import {useState, useContext} from 'react'
import axios from "axios";


function Formulario (){
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const {token, setToken} = useContext(UserContext);

    const navigate = useNavigate();

    function postSaida(event){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        event.preventDefault();
        const promise = axios.post("http://localhost:5000/registrodesaida",{   
            valor,
            descricao,
        },config);
        
        promise.then(tratarSucesso);
        promise.catch(tratarErro);

        function tratarSucesso(resposta) {
            navigate('/registros');
        }

        function tratarErro(erro) {
	        console.log("Mensagem de erro: " + erro); // Ex: Not Found
            alert("erro ao fazer login");
        }

        navigate('/registros')
    }

    return(
        <div>
        <form onSubmit={postSaida}>
		        <input type="valor" placeholder='Valor' value={valor} required onChange={e => setValor(e.target.value)} />
                <input type="Descrição" placeholder='Descrição' value={descricao} required onChange={e => setDescricao(e.target.value)} />
                <button type="submit" ><h2>Salvar Saída</h2></button>
		</form>
        </div>
    )


}

export default function Saida(){
    return(
        <>
        <Body>
            <Topo>
                <h2>Nova Saída </h2>
            </Topo>
            <Formulario />
        </Body>
        </>
    )
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #9400d3;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 4vw;
        color: #FFFFFF;
        &:hover{
            cursor: pointer;
            opacity: 0.8 ;
        }
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        button{
            width: 95%;
            height: 9vh;
            display: flex;
            align-items: center;
            justify-content: center;
           background-color: #A328D6;
           border: solid #A328D6 1px;
           border-radius: 7px;
           color: #FFFFFF;
        &:hover{
            cursor: pointer;
            opacity: 0.8 ;
        }
        }
        input{
            width: 95%;
            height: 10vh;
            color: gray;
            margin-bottom: 2vh;
            border: solid #D4D4D4 1px;
            border-radius: 6px;
            
        }
        input::placeholder{
            color :#D4D4D4;
        }
        textarea:focus, input:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
    div{
        width: 90vw;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const Topo = styled.div `

    width: 90vw;
    height: 10vh;
    margin-left: 5vw;
    display: flex;
    justify-content: flex-start;

    h2{
    color: #FFFFFF;
    font-size: 7vw;
    font-weight: 700;
    }
`