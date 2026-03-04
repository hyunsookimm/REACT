import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// DOM이 완전히 로드된 후 앱 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}

function initApp() {
  const root = document.getElementById('root')
  if (root) {
    createRoot(root).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  }
}
