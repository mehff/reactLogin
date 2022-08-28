import React, { useState } from 'react';
import './App.css';

function App() {
  const allowedEmails = ["matheus.facini@pucpr.edu.br", "eduardo.lino@pucpr.br"];
  const [user, userInfo] = useState({ email: '', senha: '' });
  const [status, setStatus] = useState({ type: '', mensagem: ''});
  const values = e => userInfo({ ...user, [e.target.name]: e.target.value });
  const validate = e => {
    e.preventDefault();

    if(!validateFields(allowedEmails)) return;
  };

  function validateFields(emails) {
    if(!user.email){
      return setStatus({ type: 'error', mensagem: "Preencha o email!" });
    }
    else if(!user.senha){
      return setStatus({ type: 'error', mensagem: "Preencha a senha!" });
    } else if(emails.includes(user.email) && user.senha === "123456"){
      return setStatus({ type: 'success', mensagem: "Acessado com Sucesso!"});
    } else if(user.senha !== "123456") {
      return setStatus({ type: 'error', mensagem: "Senha incorreta!" });
    } else {
      return setStatus({ type: 'error', mensagem: "Seu email não está cadastrado!" });
    };
  };

  return (
    <div className="App">
      <header>
        <h1>Login</h1>

        <form onSubmit={validate}>
          <label>Email:</label><br></br>
          <input type = "text" name = "email" onChange={values} value = {user.email}></input><br></br>
          
          <label>Senha:</label><br></br>
          <input type = "password" name = "senha" onChange={values} value = {user.senha}></input><br></br>

          <button >Acessar</button>
          {status.type === 'success' ? <p style={{color:"green"}}>{status.mensagem}</p> : ''}
          {status.type === 'error' ? <p style={{color:"#ff0000"}}>{status.mensagem}</p> : ''}
        </form>

        <p className='texto'>Apenas os emails matheus.facini@pucpr.edu.br e eduardo.lino@pucpr.br podem acessar, ambos com a senha 123456</p>

      </header>
    </div>
  );
};

export default App;
