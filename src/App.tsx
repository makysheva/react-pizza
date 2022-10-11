import { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

import { NotFound } from './pages/404';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

import './scss/app.scss';

type SearchContextType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType>({} as SearchContextType)

export const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </SearchContext.Provider >
  );
}
