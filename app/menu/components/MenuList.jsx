"use client"
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpEdit from '../edit/[id]/page';


const MenuList = ({ items }) => {
  const router = useRouter();
  
  return (
    <>
    <Table>
    <TableCaption>Menu</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Name</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>${parseFloat(item.price) / 100}</TableCell>
            <TableCell>
              <Button 
                  type="button" 
                  onClick={() => {
                    router.push(`/menu/edit/${item.id}`);
                  }}
                >
                  Edit
                </Button>
               
            </TableCell>
            
          </TableRow>
            ))}
      </TableBody>

    </Table>
    </>
  );
}

export default MenuList;