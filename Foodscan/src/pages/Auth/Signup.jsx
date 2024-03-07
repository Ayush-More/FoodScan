import SchoolIcon from "@mui/icons-material/School";
import { IconButton, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import Animation from "../../assets/4.json";
import { useState } from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  HeartIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

function Signup() {
  const nav = useNavigate();
  const [section, setSection] = useState(1);
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    allergicItem: "",
    ageCategory: "",
    dietaryPreferences: [],
    height: "", // New field for height
    weight: "", // New field for weight
    previousInjury: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setSection(section + 1);
  };

  const handlePrevious = () => {
    setSection(section - 1);
  };

  const handleDietaryPreferenceChange = (event, newPreferences) => {
    setFormData({ ...formData, dietaryPreferences: newPreferences });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "cursive",
      }}
    >
      <div className="LandPage">
        <div className="bg-linear">
          <nav className="navbar">
            <div style={{ display: "flex", columnGap: "20px" }}>
              {" "}
              <SchoolIcon className="icon " />
              <h1>
                <span style={{ color: "#40679E" }}>Product</span> Scan
              </h1>
            </div>
          </nav>
          <div className="flex mt-[60px] sm:mt-[0px] ">
            <Lottie
              animationData={Animation}
              className=" w-[50%] sm:w-[35%] h-[40%] mt-12 sm:mt-[50px] ml-6  sm:ml-[46px]"
            />
            <div className="max-w-md ml-[120px] sm:ml-[290px] w-[510px]  px-10 py-3  border rounded-lg shadow-2xl">
              {section === 1 ? (
                <div>
                  <h2 style={{ fontFamily: "cursive" }} className="text-2xl font-bold mb-4">
                    Personal Information
                  </h2>
                  <div className="mb-2">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="allergicItem">
                      <HeartIcon className="w-6 h-6 inline-block mr-2 text-red-500" /> Allergic Item
                    </label>
                    <input
                      type="text"
                      className="border-2 border-gray-300 rounded-md p-2 w-full"
                      id="allergicItem"
                      name="allergicItem"
                      value={formData.allergicItem}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="ageCategory">
                      <UserIcon className="w-6 h-6 inline-block mr-2 text-blue-400" /> Age Category
                    </label>
                    <select
                      className="border-2 border-gray-300 rounded-md p-2 w-full"
                      id="ageCategory"
                      name="ageCategory"
                      value={formData.ageCategory}
                      onChange={handleChange}
                    >
                      <option value="">Select Age</option>
                      <option value="18-30">18-30</option>
                      <option value="31-45">31-45</option>
                      <option value="46-60">46-60</option>
                      <option value="Above 60">Above 60</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="dietaryPreferences">
                      <CheckCircleIcon className="w-6 h-6 inline-block mr-2 text-green-400" /> Dietary Preferences
                    </label>
                    <ToggleButtonGroup
                      value={formData.dietaryPreferences}
                      onChange={handleDietaryPreferenceChange}
                      aria-label="dietary preferences"
                    >
                      <ToggleButton value="veg" aria-label="vegetarian" sx={{ bgcolor: formData.dietaryPreferences.includes("veg") ? "initial" : "initial" }}>
                        Vegetarian
                      </ToggleButton>
                      <ToggleButton value="nonVeg" aria-label="non-vegetarian" sx={{ bgcolor: formData.dietaryPreferences.includes("nonVeg") ? "#ff0000" : "initial" }}>
                        Non-Vegetarian
                      </ToggleButton>
                      <ToggleButton value="vegan" aria-label="vegan" sx={{ bgcolor: formData.dietaryPreferences.includes("vegan") ? "#ff0000" : "initial" }}>
                        Vegan
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                  <div className="mb-3 flex">
                    <div style={{ marginRight: '10px', flex: 1 }}>
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="height">
                        Height
                      </label>
                      <input
                        type="text"
                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label className="block text-gray-700 font-bold mb-2" htmlFor="weight">
                        Weight
                      </label>
                      <input
                        type="text"
                        className="border-2 border-gray-300 rounded-md p-2 w-full"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="previousInjury">
                      <LockClosedIcon className="w-6 h-6 inline-block mr-2 text-fuchsia-300" /> Previous Injury
                    </label>
                    <input
                      type="text"
                      className="border-2 border-gray-300 rounded-md p-2 w-full"
                      id="previousInjury"
                      name="previousInjury"
                      value={formData.previousInjury}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold mb-4"> Account Information</h2>
                  <div className="mb-3">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="userName">
                      <UserIcon className="w-6 h-6 inline-block mr-2 text-red-900" /> User Name
                    </label>
                    <input
                      type="text"
                      className="border-2 border-gray-300 rounded-md p-2 w-full"
                      id="userName"
                      name="userName"
                      value={formData.userName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                      <LockClosedIcon className="w-6 h-6 inline-block mr-2 text-blue-800" /> Password
                    </label>
                    <input
                      type="password"
                      className="border-2 border-gray-300 rounded-md p-2 w-full"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
                      <LockClosedIcon className="w-6 h-6 inline-block mr-2 text-green-600" /> Confirm Password
                    </label>
                    <input
                      type="password"
                      className="border-2 border-gray-300 rounded-md p-2 w-full"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              <div className=" justify-between">
                {section > 1 && (
                  <>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[50px] py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline"
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                    <button className="bg-red-500 ml-7 hover:bg-blue-700 text-white font-bold h-[50px] px-6 mt-5 rounded focus:outline-none focus:shadow-outline">
                      Submit
                    </button>

                    <p className="flex text-sm font-light text-gray-500 dark:text-blue-500 mt-6 ml-1">
                      <h4 className="text-black mr-2">Already have an account? </h4>{' '}
                      <div
                        onClick={() => {
                          nav("/login");
                        }}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                      >
                        Login
                      </div>
                    </p>
                  </>
                )}
                {section < 2 && (
                  <>
                    <div className="flex mt-1">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleNext}
                      >
                        Next
                      </button>
                      <p className="flex text-sm font-light text-gray-500 dark:text-blue-500 mt-2 ml-4">
                        <h4 className="text-black mr-2">Already have an account? </h4>{' '}
                        <div
                          onClick={() => {
                            nav("/login");
                          }}
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                        >
                          Login
                        </div>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
