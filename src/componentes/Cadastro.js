import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from "axios";

function Cadastrar (){
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    function fazerCadastro(event){
        event.preventDefault();
        if(password === password2){
        axios.post('http://localhost:5000/cadastro', {
            nome,
            email,
            password
        }).then(tratarSucesso).catch(tratarErro);

        function tratarSucesso(resposta) {
            console.log ("sucesso " + resposta)
            navigate('/');
        }
        function tratarErro(erro) {
	        console.log("Mensagem de erro: " + erro); // Ex: Not Found
            alert("erro ao fazer cadastro");
        }

    } else alert("senhas diferentes");

    }

    return(
        <div>
        <form onSubmit={fazerCadastro}>
                <input type="nome" placeholder='nome' value={nome} onChange={e => setNome(e.target.value)} />
		        <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='senha' value={password} onChange={e => setPassword(e.target.value)} />
                <input type="password" placeholder='Confirme a senha' value={password2} onChange={e => setPassword2(e.target.value)} />
            <button type="submit">
                <h2>Cadastrar</h2> 
            </button>
		</form>
        </div>
    )
}


export default function Cadastro(){
    const navigate = useNavigate();

    function logar(){
        navigate('/');
    }

    return(
        <>
        <Body>
            <div>
            <h1> MyWallet </h1>
            </div>
            <Cadastrar />
            <p onClick={logar}>Já tem uma conta? Entre agora!</p>
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
    justify-content: center;

    h1{
    color: #FFFFFF;
    margin-top: 0px;
    margin-left: -2vw;
    font-size: 10vw;
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    }
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
            width: 90%;
            height: 7vh;
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
            width: 87%;
            height: 6vh;
            color: gray;
            margin-bottom: 1vh;
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
        align-items: center;
        justify-content: center;
    }
`