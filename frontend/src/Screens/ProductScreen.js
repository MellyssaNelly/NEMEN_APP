import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen() {
  const { id } = useParams();
  const product = data.products.find((c) => c._id === id);
  if (!product) {
    return <div>Sorry! Product Not Found</div>;
  }
  return (
    <div className="content">
      <div className="btn">
        <Link to="/">Go Back To Home Page</Link>
      </div>

      <div className="single-content">
        <div className="top-row">
          <img
            className="large-img"
            src={`${product.image}`}
            alt={product.name}
          />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Pirce : {product.price} Fbu</li>
            <li>
              Description:
              <p style={{ whiteSpace: 'pre-line' }}>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="reg-button">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
