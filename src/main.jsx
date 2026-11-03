import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/quicksand/400.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'
import App from './App.jsx'
import './styles/index.css'
createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>)
