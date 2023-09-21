"use client"
import MenuList from './components/MenuList'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"


const MenuListPage =() =>{
    const [items, setItems] = useState([]);
    const router = useRouter()

    async function fetchData() {
    try {
      const response = await axios.get('http://localhost:3000/api/menuItem');
      console.log('response:', response);
      setItems(response.data); 
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
    }

    useEffect(() => {
    fetchData();
    }, []);
    
    return (
      <div>
      <h1 className= 'text-center text-3xl font-bold'>
        Menu
      </h1>
      <div className='d-flex justify-content-end'>
      <Button 
      type="button" 
      onClick={() =>{ router.push(`menu/addItem`);}}>
      Add Item
      </Button>
      </div>

      <MenuList items = {items} />
      </div>
)
}

export default MenuListPage;


