import data from './data';

function App() {
  return (
    <div class="container">
      <header class="header">
        <div class="logo">
          <a class="active" href="#home">
            <img src="./NEMEN_logo.png" alt="Logo" />
          </a>
        </div>
        <div class="top_nav">
          <a href="/cart">
            <strong>Cart</strong>
          </a>
          <a href="/signin">
            <strong>Sign In</strong>
          </a>
          .
        </div>
      </header>

      <main>
        <div class="content">
          <div class="section">
            <div class="section-title">
              <h1>
                <a class="" href="#">
                  <h2>Welcome to NEMEN Online Shopping for your Little Ones</h2>
                </a>
              </h1>
            </div>
            <div class="section-content">
              {data.products.map((product) => (
                <div class="card" key={product._id}>
                  <a href={`/product/${product._id}`}>
                    <img
                      class="medium"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>
                  <div class="card-body">
                    <a href={`/product/${product._id}`}>
                      <h3>{product.name}</h3>
                    </a>
                    <div>
                      <span>{product.price} Fbu</span>
                      <br />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="section-explore">
              <h1>
                <a class="" href="#">
                  <h3>Explore more about kids' wear</h3>
                </a>
              </h1>
            </div>
          </div>
        </div>
      </main>
      <footer class="footer">&copy; Copyright NEMEN</footer>
    </div>
  );
}

export default App;
