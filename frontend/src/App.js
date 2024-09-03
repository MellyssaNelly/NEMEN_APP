import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div class="container">
        <header class="header">
          <div class="logo">
            <a class="active" href="#home">
              <img src="/NEMEN_logo.png" alt="Logo" />
            </a>
          </div>
          <div class="top_nav">
            <a href="/cart">
              <strong>Cart</strong>
            </a>
            <a href="/signin">
              <strong>Sign In</strong>
            </a>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </main>
        <footer class="footer">&copy; Copyright NEMEN</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
