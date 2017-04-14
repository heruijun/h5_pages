import './index.css';

import React from 'react';
import { render } from 'react-dom';

import TitleComponent from './components/TitleComponent';
import ToastComponent from './components/ToastComponent';
import MenuComponent from './components/MenuComponent';
import DialogComponent from './components/DialogComponent';
import CntrAPIComponent from './components/CntrAPIComponent';

const Demo = () => (
  <div>
    <a href="mgzf://mgzf-container/widget/toast?level=info&message=你好蘑菇租房">测试22</a>
    <TitleComponent />
    <ToastComponent />
    <MenuComponent />
    <DialogComponent />
    <CntrAPIComponent />
  </div>
)

render(
  <Demo />,
  document.getElementById('app')
)
