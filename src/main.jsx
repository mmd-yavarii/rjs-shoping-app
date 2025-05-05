import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserProvider.jsx';
import CartProvider from './context/CartProvider.jsx';
import BookmarkProvider from './context/BookmarkProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <CartProvider>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </CartProvider>
    </UserProvider>
  </BrowserRouter>
);
