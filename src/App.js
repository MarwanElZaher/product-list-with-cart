import './App.css';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="app-container">
      <main className="product-list">
        <ProductList />
      </main>
      <aside className="cart">
        <Cart />
      </aside>
    </div>
  );
}

export default App;
