import { createRoot } from 'react-dom/client';
import { LanguageProvider } from './i18n';
import App from './App';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
