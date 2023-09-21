import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"

export const POST = async (request) => {
    try{
        const body = await request.json();
        const {name,price} = body;

        const newItem = await prisma.menu2.create({
            data: {
                name,
                price
            }
        })
        console.log("NEWiTEM: " ,newItem)
        return NextResponse.json(newItem)
    }catch(err){
        return NextResponse.json({message: "POST ERROR",err},{status: 500})
    }
}

export const GET = async () => {
    try{
        const allItem = await prisma.menu2.findMany()
        return NextResponse.json(allItem);
    }catch(err){
        return NextResponse.json({message: "GET ERROR",err},{status: 500})
    }
}