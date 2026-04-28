import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FormspreeProvider } from '@formspree/react'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormspreeProvider project="xojyorop">
      <App />
    </FormspreeProvider>
  </StrictMode>,
)
