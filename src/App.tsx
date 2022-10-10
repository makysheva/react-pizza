import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

import { NotFound } from './pages/404';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

import './scss/app.scss';

export const App = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Routes>
      <Route path='/' element={<Layout searchValue={searchValue} setSearchValue={setSearchValue} />}>
        <Route index element={<Home searchValue={searchValue} />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
