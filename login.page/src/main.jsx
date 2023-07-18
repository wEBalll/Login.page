import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { PersistentStoreProvider } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <PersistentStoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PersistentStoreProvider>
);
