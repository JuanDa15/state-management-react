import { StrictMode } from 'react'
import App from './src/App'
import './style.css'
import { createRoot } from 'react-dom/client'

const app = document.getElementById('app')
const root = createRoot(app)

root.render(
  <StrictMode >
    <App />
  </StrictMode>
)