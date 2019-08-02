import React from 'react';
import ReactDOM from 'react-dom';
import Saudacao from './componentes/Saudacao';

ReactDOM.render(
  <div>
    <Saudacao
      tipo="Seja bem - vindo(a)! Aceita um "
      nome="cházinho? 🍵"
    />
  </div>,
  document.getElementById('root')
);

// First = Seja bem - vindo(a)! Aceita um cházinho? 🍵
// Second = Ou prefere um cafézinho? ☕