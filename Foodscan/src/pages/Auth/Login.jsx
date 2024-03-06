import { useState } from 'react';
import { Email, Lock, Person, School } from '@mui/icons-material'; // Import icons
import { IconButton } from '@mui/material';
import Lottie from 'lottie-react';
import Animation from '../../assets/3.json';
import { useNavigate } from 'react-router-dom';

function Login() {
  const nav = useNavigate();

  // Define state variables for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="LandPage1">
        <div className="bg-linear">
          <nav className="navbar">
            <div style={{ display: 'flex', columnGap: '20px' }}>
              <School className="icon " />
              <h1>
                <span style={{ color: '#40679E' }}>Product</span> Scan
              </h1>
            </div>
          </nav>
          <div className="flex mt-[60px] sm:mt-[2px] ">
            <Lottie
              animationData={Animation}
              style={{ width: '40%', height: '40%', marginTop: '90px', marginLeft: '30px' }}
            />

            <form
              onSubmit={handleSubmit}
              className="sm ml-[50px]  md:ml-[280px] w-[180px] sm:w-[255px] "
            >
              <h1
                className=" mb-2 sm:mb-6 font-mono ml-10 sm:ml-[42px] text-[30px]"
                style={{ fontFamily: 'cursive' }}
              >
                Welcome back{' '}
              </h1>
              <div className="mb-3 relative">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-red-600"
                >
                  Your username
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[322px] sm:mt-6 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:pl-7 sm:pl-8"
                  placeholder="Enter Your Username"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center  mt-8 sm:mt-12 pointer-events-none">
                  <Person />
                </div>
              </div>
              <div className="mb-3 relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-red-600"
                >
                  Your Email
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[322px]  sm:mt-6 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:pl-7 sm:pl-8"
                  placeholder="Enter Your Password"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center  mt-8 sm:mt-12 pointer-events-none">
                  <Email />
                </div>
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="repeat-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-red-600"
                >
                  Your Password
                </label>
                <input
                  type="password"
                  id="repeat-password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[322px] sm:mt-6 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light placeholder:pl-7 sm:pl-8"
                  placeholder="Repeat Your Password"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center  mt-8 sm:mt-12 pointer-events-none">
                  <Lock />
                </div>
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{' '}
                  <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                    terms and conditions
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-11 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <p className="flex text-sm font-light text-gray-500 dark:text-blue-500 mt-6 ml-1">
                <h4 className="text-black mr-2">New User?</h4>{' '}
                <div
                  onClick={() => {
                    nav('/signup');
                  }}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                >
                  Register Now
                </div>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
