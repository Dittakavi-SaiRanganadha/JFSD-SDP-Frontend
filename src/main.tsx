import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { PropertyProvider } from 'components/context/PropertyContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// function MyApp({ Component, pageProps }: any) {
//   return (
//     <PropertyProvider>
//       <Component {...pageProps} />
//     </PropertyProvider>
//   );
// }

// export default MyApp;
