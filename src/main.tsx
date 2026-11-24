import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import RouteMeta from './Components/Commons/RouteMeta.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <RouteMeta />
    <App />
    </BrowserRouter>
  </StrictMode>,
)
