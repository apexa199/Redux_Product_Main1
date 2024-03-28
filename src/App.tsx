import './App.css';
import ProductDetails from './components/ProductDetails';
import Product from './components/Product';
import { Routes, Route, useParams } from 'react-router-dom';
function App() {
  return (

<>
<Routes>
      <Route path="/" element={<Product></Product>}/>
      <Route path="/product/:productId" element={<ProductDetails></ProductDetails>}/>
     
    </Routes>


</>   
   
  );
}

export default App;
