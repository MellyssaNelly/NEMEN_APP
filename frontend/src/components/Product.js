import Rating from './Rating';

export default function Product(props) {
  const { products } = props;
  return (
    <div className="section">
      <div className="section-title">
        <h1>
          <a href="#">
            <h2>Welcome to NEMEN Online Shopping for your Little Ones</h2>
          </a>
        </h1>
      </div>
      <div className="section-content">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <a href={`/product/${product._id}`}>
              <img className="medium" src={product.image} alt={product.name} />
            </a>
            <div className="card-body">
              <a href={`/product/${product._id}`}>
                <h3>{product.name}</h3>
              </a>
              <div>
                <span>{product.price} Fbu</span>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="section-explore">
        <h1>
          <a className="" href="#">
            <h3>Explore more about kids' wear</h3>
          </a>
        </h1>
      </div>
    </div>
  );
}
