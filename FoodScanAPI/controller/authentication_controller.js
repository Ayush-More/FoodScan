const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const userModel = require("./../models/userModel");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  console.log("Cookie send");
  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

exports.Signup = asyncHandler(async (req, res) => {
  try {
    console.log("signup called");
    if (req.body.username && req.body.password) {
      const user = await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        allergeies: req.body.allergeies,
        category: req.body.category,
        height: req.body.height,
        weight: req.body.weight,
      });
      createSendToken(user, 200, res);
    }
  } catch (error) {
    console.log("Error in the signup controller");
  }
});
exports.login = asyncHandler(async (req, res) => {
  try {
    const { password, email } = req.body;
    if (!email || !password) {
      console.log("your email or password does not exist");
    }
    const LoginData = await userModel
      .findOne({ email: email })
      .select("+password");
    createSendToken(LoginData, 200, res);
  } catch (error) {
    console.log(error);
  }
});

const fetchMain = (key) => {
  console.log(key);
  const apiUrl = "https://world.openfoodfacts.org/api/v2/search?page_size=100";
  // Make a GET request to the API
  fetch(apiUrl)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      const product = data.products;
      const alternate = [];
      product.forEach((item) => {
        if (item.food_groups === key) {
          alternate.push({
            category: item.ingredients_analysis_tags,
            code: item.code,
            image:
              item.selected_images &&
              item.selected_images.front &&
              item.selected_images.front.display &&
              item.selected_images.front.display.fr,
            keywords: item._keywords,
            name: item.product_name,
          });
        }
      });
      return alternate;
    });
};
exports.FetchAll = asyncHandler(async (req, res) => {
  const apiUrl = "https://world.openfoodfacts.org/api/v2/search?page_size=100";
  // Make a GET request to the API
  fetch(apiUrl)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      const products = data.products;
      const vegan = true;
      const veg = false;
      const nonveg = false;
      const filterProduct = (product) => {
        console.log(product.ingredients_analysis_tags);
        if (vegan && !product.ingredients_analysis_tags.includes("en:vegan")) {
          return false;
        }
        if (
          veg &&
          !product.ingredients_analysis_tags.includes("en:vegetarian")
        ) {
          return false;
        }
        if (nonveg && product.ingredients_analysis_tags.includes("en:vegan")) {
          return false;
        }
        return true;
      };
      const filteredProducts = products.filter(filterProduct);
      const ingredientsTagsArray = filteredProducts.map((product) => ({
        category: product.ingredients_analysis_tags,
        code: product.code,
        image:
          product.selected_images &&
          product.selected_images.front &&
          product.selected_images.front.display &&
          product.selected_images.front.display.fr,
        keywords: product._keywords,
        name: product.product_name,
      }));

      // Now you have an array containing ingredients_analysis_tags of each product
      console.log(ingredientsTagsArray);

      res.status(200).json({
        count: ingredientsTagsArray.length,
        status: "success",
        result: { ingredientsTagsArray },
      });
    });
});

exports.ProductDetails = asyncHandler(async (req, res) => {
  const barcode = "3017624010701";
  const apiurl = `https://world.openfoodfacts.net/api/v2/product/${barcode}`;

  fetch(apiurl)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      const product = data.product;
      const ingredientsTagsArray = {
        ingrident: product.ingredients_tags,
        calories: product.nutriments["energy-kcal_value"],
        nutrients: {
          fat: product.nutrient_levels.fats,
          salt: product.nutrient_levels.salt,
          saturated_fats: product.nutrient_levels["saturated-fat"],
          sugars: product.nutrient_levels.sugars,
        },
        nutriscore: product.nutriscore_score,
        Alternate: fetchMain(product.food_groups),
      };

      // Now you have an array containing ingredients_analysis_tags of each product
      console.log(ingredientsTagsArray);

      res.status(200).json({
        status: "success",
      });
    });
});
