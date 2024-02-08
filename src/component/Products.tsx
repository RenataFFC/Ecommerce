import { useEffect, useState } from "react";

// Componente de Loading
const Loading = (): JSX.Element => {
  return <div>Loading...</div>;
};

// Componente para exibir os produtos e botões de filtro
const ShowProducts = ({ handleFilter, filter }: { handleFilter: (category: string) => void; filter: any[] }): JSX.Element => {
  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2" onClick={() => handleFilter('Todos')}>Todos</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handleFilter('men clothing')}>Roupas Masculinas</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handleFilter('women clothing')}>Roupas Femininas</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handleFilter('jewelery')}>Jóias</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handleFilter('electronics')}>Eletrônicos</button>
      </div>
      <div className="row justify-content-center">
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                  <p className="card-text lead fw-bold">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Products = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setData(products);
      setFilter(products);
      setLoading(false);
    };

    getProducts();

    return () => {
      // Cleanup function
    };
  }, []);

  const handleFilter = (category: string): void => {
    setCategory(category);
    if (category === 'Todos') {
      setFilter(data);
    } else {
      const filteredProducts = data.filter(product => product.category === category);
      setFilter(filteredProducts);
    }
  };

  return (
    <div className="container my-5 py-5 text-dark">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Produtos mais recentes</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts handleFilter={handleFilter} filter={filter} />}
      </div>
    </div>
  );
};

export default Products;

