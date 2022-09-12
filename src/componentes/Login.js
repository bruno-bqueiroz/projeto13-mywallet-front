import styled from "styled-components";
import UserContext from "../context/UserContext";
import {useNavigate} from 'react-router-dom';
import {useState, useContext} from 'react';
import axios from "axios";

function Logar (){
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const {setToken} = useContext(UserContext);

    const navigate = useNavigate();

    function fazerLogin (event){

        event.preventDefault();
        
       const promise =  axios.post('http://localhost:5000/', {
            email,
            password
        });
        
        promise.then(tratarSucesso);
        promise.catch(tratarErro);

        function tratarSucesso(resposta) {
            navigate('/registros');
            
            setToken(resposta.data);
            
        }
        function tratarErro(erro) {
	        console.log("Mensagem de erro: " + erro); // Ex: Not Found
            alert("usuario ou senha invalido");
        }
    }
    
    return(
        <div>
        <form onSubmit={fazerLogin}>
		        <input type="email" placeholder='email' value={email} required onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='senha' value={password} required onChange={e => setpassword(e.target.value)} />
                <button type="submit" ><h2>Entrar</h2></button>
		</form>
        </div>
    )


}




export default function Login(){
    const navigate = useNavigate();

    function cadastrar(){
        navigate('/cadastro');
    }

    return(
        <>
        <Body>
            <div>
            <h1> MyWallet </h1>
            </div>
            <Logar />
            <p onClick={cadastrar}>Primeira vez? Cadastre-se!</p>
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