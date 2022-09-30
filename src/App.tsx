import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './components/PizzaBlock';
import { Sort } from './components/Sort';
import pizzas from './assets/pizzas.json';
import './scss/app.scss';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map(obj => (
                <PizzaBlock key={obj.id} {...obj} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
