import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Obrigada pela sua solicitação!</h1>
      <p>Em breve, você receberá as opções de cotações solicitadas.</p>
      <Link to="/" style={{ marginTop: '20px', display: 'inline-block' }}>Voltar para o formulário</Link>
    </div>
  );
};
