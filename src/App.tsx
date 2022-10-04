import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { NotFound } from './pages/404';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

import './scss/app.scss';

export const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
