import React, { useState } from 'react';
import './GeradorMensagens.css';

const GeradorMensagens = () => {
  const [mensagem, setMensagem] = useState('');

  const mensagensInspiradoras = {
    amor: 'O amor é a força mais poderosa do universo.',
    coragem: 'A coragem é a resistência ao medo, o domínio do medo, não a ausência do medo.',
    sucesso: 'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
  };

  const atualizarMensagem = (evento) => {
    const palavraChave = evento.target.value.toLowerCase();
    const novaMensagem = mensagensInspiradoras[palavraChave] || 'Digite uma palavra-chave inspiradora.';
    setMensagem(novaMensagem);
  };

  return (
    <div className="gerador-mensagens">
      <h2>Gerador de Mensagens Inspiradoras</h2>
      <p>Digite uma palavra-chave para receber uma mensagem inspiradora, entre:</p>
      <p>1- Amor</p>
      <p>2- Coragem</p>
      <p>3- Sucesso</p>
      <input
        type="text"
        placeholder="Digite uma palavra-chave..."
        onChange={atualizarMensagem}
      />
      <p>{mensagem}</p>
    </div>
  );
};

export default GeradorMensagens;