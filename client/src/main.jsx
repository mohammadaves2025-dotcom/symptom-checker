import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SymptomProvider from "./context/SymptomContext";

createRoot(document.getElementById('root')).render(
  <SymptomProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SymptomProvider>

)
