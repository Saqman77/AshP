import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { ThemeContextProvider } from './utils/ThemeContextProvider.tsx'
import { ReactLenis } from '@studio-freight/react-lenis'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <ReactLenis root>
        <App />
      </ReactLenis>
    </ThemeContextProvider>
  </StrictMode>,
)
