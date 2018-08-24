import { LocaleProvider } from 'antd'
import 'antd/dist/antd.css'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
