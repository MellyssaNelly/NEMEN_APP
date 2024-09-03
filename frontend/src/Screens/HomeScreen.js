import Product from '../components/Product';
import data from '../data';

export default function HomeScreen() {
  return (
    <div class="content">
      <Product products={data.products} />
    </div>
  );
}
