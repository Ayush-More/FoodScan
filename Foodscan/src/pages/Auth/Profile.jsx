import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import { CheckCircleIcon, ClockIcon, HeartIcon, LockClosedIcon, UserIcon } from "@heroicons/react/20/solid";
import { Email,Lock } from "@mui/icons-material";
import Animation from "../../assets/5.json";
import Lottie from "lottie-react";

function Profile() {
    return (
        <div className="bg-gray-100 min-h-screen py-8" style={{fontFamily:'cursive'}}>
        <div className="LandPage ">
            <div className="bg-linear1">
                <nav className="navbar1">
                    <div className="flex items-center justify-evenly space-x-4">
                        <SchoolIcon className="text-blue-500 w-8 h-8" />
                        <h1 className="text-xl font-semibold text-blue-500">
                            <span>Product</span> Scan
                        </h1>
                    </div>
                    
                </nav>
                
                <div className="flex sm:flex">
                <Lottie animationData={Animation} 
                  className="ml-14"
                />
                
                <div className="w-[650px] flex rounded-e-lg  md:ml-[150px] shadow-2xl mb-6 ">
                  
                    <div className="rounded-lg w-[800px] shadow-md p-4 pl-12 ">
                        <div className="mb-10">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="userName">
                                <PersonIcon className="w-6 h-6 inline-block mr-2 text-blue-500" /> User Name
                            </label>
                            <div className="flex items-center justify-between">
                                <p className="border-b border-gray-300">John Doe</p>
                                <IconButton onClick={() => {}}>
                                    <Edit className="text-blue-500" />
                                </IconButton>
                            </div>
                        </div>
                        <div className="flex  ">
                        <div className="mb-10">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                <Email className="w-6 h-6 inline-block mr-2 " /> Email
                            </label>
                            <p>john@example.com</p>
                        </div>
                        <div className="mb-9 ml-[122px]  pl-12">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                <LockClosedIcon className="w-6 h-6 inline-block mr-2 text-purple-500" /> Password
                            </label>
                            <p>********</p>
                        </div>
                        </div>
                        <div className="flex  ">
                        <div className="mb-9">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="allergicItem">
                                <HeartIcon className="w-6 h-6 inline-block mr-2 text-red-500" /> Allergic Item
                            </label>
                            <p>Eggs, Milk</p>
                        </div>
                        <div className="mb-6 ml-[122px] pl-12">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="ageCategory">
                                <UserIcon className="w-6 h-6 inline-block mr-2 text-blue-500" /> Age Category
                            </label>
                            <p>25-40</p>
                        </div>
                        </div>
                        <div className="flex">
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="vegNonVeg">
                                <CheckCircleIcon className="w-6 h-6 inline-block mr-2 text-green-500" /> Veg/Non-Veg/Vegan
                            </label>
                            <p>Veg</p>
                        </div>
                        <div className="mb-6 pl-[113px]">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="exerciseTime">
                                <ClockIcon className="w-6 h-6 inline-block mr-2 text-yellow-500" /> Time Available for Exercise
                            </label>
                            <p>1 hour</p>
                        </div>
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="previousInjury">
                                <LockClosedIcon className="w-6 h-6 inline-block mr-2 text-gray-500" /> Previous Injury
                            </label>
                            <p>Knee Injury</p>
                        </div>
                        <div className="flex justify-end">
                            <IconButton onClick={() => {}}>
                                <Delete className="text-red-500" />
                            </IconButton>
                            <IconButton onClick={() => {}}>
                                <Edit className="text-blue-500" />
                            </IconButton>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Profile;
