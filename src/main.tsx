import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
async function deferRender() {
  
  // if(process.env.NODE_ENV != 'development') {
  //   return;
  // }
  const {worker} = await import('./mocks/browser.ts');
  return worker.start();
}

deferRender().then(()=>{
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )  
})

