import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

function Search() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="main-container front" style={{ fontFamily: 'cursive' }}>
      <div className="sb-search">
        <IconButton>
          <SearchIcon className="icon" />
        </IconButton>
        <input
          type="text"
          className="Search-box"
          placeholder="Search..."
        />
      </div>
      <div className="product-list flex flex-wrap ">
        {products.map(product => (
          <div key={product.id} className="product-card relative flex flex-col text-gray-700 bg-gray-700 shadow-gray-700 shadow-lg bg-clip-border rounded-xl w-[280px] mt-2 sm:mt-10 ml-0 sm:ml-[40px]">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-[197px]">
              <img
                src={`https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80`}
                alt="product-image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block text-2xl underline font-bold pl-[62px] antialiased leading-relaxed text-white">
                  {product.name}
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 ml-[62px]">
              <button
                type="button"
                className="text-white bg-[red] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                View more
              </button>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Search;
