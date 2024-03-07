import { colors } from "@mui/material";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Info = () => {
  const product = {
    name: "Sample Product",
    image: "https://via.placeholder.com/150",
    isVeg: true,
    isVegan: false,

    ingredients: [
      { name: "Ingredient 1", percentage: "10%" },
      { name: "Ingredient 2", percentage: "20%" },
      { name: "Ingredient 3", percentage: "30%" },
      { name: "Ingredient 4", percentage: "40%" },
    ],
    nutrients: {
      fat: "5g",
      salt: "2g",
      saturatedFat: "3g",
      sugar: "10g",
    },
    nutrientScore: 80,
    calories: 200,
    alternateProducts: [
      { name: "Alternate Product 1", image: "https://via.placeholder.com/50" },
      { name: "Alternate Product 2", image: "https://via.placeholder.com/50" },
    ],
  };

  return (
    <div
      style={{ fontFamily: "cursive" }}
      className="w-[1900px] bg-red-100 rounded-3xl flex items-center justify-center"
    >
      <div className="mx-auto bg-white rounded-3xl  shadow-gray-300 shadow-2xl  overflow-hidden w-[90%]">
        <div className="flex">
          <img
            src={product.image}
            alt={product.name}
            className="w-[600px] h-[440px] rounded-3xl  shadow-2xl border-2 border-black mt-[20px] ml-[60px]"
          />
          <div className="p-4 w-1/2">
            <h2 className="text-[40px] font-semibold mb-4 text-indigo-800 font-cursive mt-[100px] ml-[200px]">
              {product.name}
            </h2>
            <div className="flex mb-4 items-center">
              <div
                className={`w-12 h-12   ml-[200px] mt-[20px]  rounded-full flex items-center justify-center ${
                  product.isVeg ? "bg-green-500" : "bg-red-500"
                } mr-4`}
              >
                {product.isVeg ? (
                  <span className="text-white">V</span>
                ) : (
                  <span className="text-white">NV</span>
                )}
              </div>
              <p className="text-[20px] mt-[20px] font-semibold text-gray-700">
                {product.isVegan ? "Vegan" : "Non-vegan"}
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-4 ml-[100px] ">
          <div className="py-4">
            <h3 className="text-xl font-semibold mb-2 text-indigo-800">
              Ingredients
            </h3>
            {product.ingredients.map((ingredient, index) => (
              <div key={index} className="flex space-x-[200px] py-2 mb-2">
                <p className="text-gray-700">{ingredient.name}</p>
                <p className="text-gray-700">{ingredient.percentage}</p>
              </div>
            ))}
          </div>
          <div className="py-4">
            <h3 className="text-xl font-semibold mb-2 py-2 text-indigo-800">
              Nutrient Levels
            </h3>
            <div className="flex space-x-[200px] py-2 mb-2">
              <p className="text-gray-700">Fat</p>
              <p className="text-gray-700">{product.nutrients.fat}</p>
            </div>
            <div className="flex space-x-[200px] py-2 mb-2">
              <p className="text-gray-700">Salt</p>
              <p className="text-gray-700">{product.nutrients.salt}</p>
            </div>
            <div className="flex space-x-[120px] py-2 mb-2">
              <p className="text-gray-700">Saturated Fat</p>
              <p className="text-gray-700">{product.nutrients.saturatedFat}</p>
            </div>
            <div className="flex space-x-[200px] py-2 mb-2">
              <p className="text-gray-700">Sugar</p>
              <p className="text-gray-700">{product.nutrients.sugar}</p>
            </div>
          </div>
          <div className="py-4">
            <h3 className="text-xl font-semibold py-2 mb-2 text-indigo-800">
              Nutrient Score & Calories
            </h3>
            <div className="flex space-x-[200px] py-2 mb-2">
              <p className="text-gray-700">Nutrient Score</p>
              <p className="text-gray-700">{product.nutrientScore}</p>
            </div>
            <div className="flex space-x-[240px] py-2 mb-2">
              <p className="text-gray-700">Calories</p>
              <p className="text-gray-700">{product.calories}</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold py-2 mb-2 text-indigo-800">
          Allergic item
            </h3>
            <h3 className="text-xl font-semibold py-2 mb-2 text-indigo-800">
            nutriscore
            </h3>
            <h3 className="text-xl font-semibold py-2 mb-2 text-indigo-800">
            calories
            </h3>
        </div>

        <div className="p-4 border-t border-gray-200 py-2 ml-[80px]">
          <h3 className="text-xl font-semibold mb-2 py-2 text-indigo-800">
            Alternate Products
          </h3>

          <AwesomeSlider
            play={true}
            interval={6000}
            
            animation="cubeAnimation"
            className="h-[400px] w-[651px]   sm:ml-[290px]"
          >
            {product.alternateProducts.map((alternateProduct, index) => (
              <div key={index} className="">
                <img
                  src={alternateProduct.image}
                  alt={alternateProduct.name}
                  className="w-[490px] h-[281px]  object-cover rounded-md  mt-[50px]"
                />
                <p className="text-red-700 text-[30px] py-8 pl-[100px]">
                  {alternateProduct.name}
                </p>
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </div>
    </div>
  );
};

export default Info;
