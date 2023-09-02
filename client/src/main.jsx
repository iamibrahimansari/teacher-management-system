import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {TeacherContextProvider} from './context/TeacherContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TeacherContextProvider>
      <App />
    </TeacherContextProvider>
  </React.StrictMode>,
)
