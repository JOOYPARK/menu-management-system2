"use client";

import { useState } from "react";
import axios from "axios";
import {useRouter} from 'next/navigation'
import { Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button";

const AddItem = () => {

  const router = useRouter();


  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/menuItem", {name: inputs.name, price: parseInt(inputs.price)})
      .then((res) => {
        router.reload()
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({});
        router.refresh();
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <>
        <form onSubmit={handleSubmit}>
          
        <h1 className="text-2xl pb-3">Add New Item</h1>
          <div class="grid gap-6 mb-6 md:grid-cols-2"></div>
            <div>
             <label for="Item Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
             <input 
               type="text" 
               name="name"
               value={inputs.name || ""}
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               placeholder= "Item Name"
               onChange={handleChange}
              />
            </div>
            <div>
             <label for="Price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
             <input 
               type="text" 
               name="price"
               value={inputs.price || ""}
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               placeholder= "Price"
               onChange={handleChange}
              />
            </div>

          <button 
            type="submit" 
            className= "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick = {()=> router.push(`/menu`)}
          >Submit</button>
        </form>
        </>
  )}
  
export default AddItem;
