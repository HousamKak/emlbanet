import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@emlbanet/ui/styles/tokens.css'
import '@emlbanet/ui/styles/components.css'
import './styles/brand.css'
import './i18n'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
