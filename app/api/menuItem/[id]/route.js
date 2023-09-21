import prisma from '@/app/libs/prismadb';
import { NextResponse} from 'next/server';

export const GET = async (request,{params}) => {
    try {
        const {id} = params ;
        const item = await prisma.menu2.findUnique ({
            where: {
                id
            }
        });

        if (!item) {
            return NextResponse.json(
                {message: "NOT FOUND",err},
                {status: 404}
            )
        }
        return NextResponse.json(item);
    }catch (err){
        return NextResponse.json( {message: "NOT FOUND",err}, {status: 500})
    }
}

export const PATCH = async (request,{params}) => {
    try{
        const body = await request.json();
        const {name, price} = body;

        const {id} = params;

        const editedItem = await prisma.menu2.update ({
            where: {
                id
            },
            data: {
                name,
                price
            }
        })
        if (!editedItem) {
            return NextResponse.json(
                {message: "NOT FOUND",err},
                {status: 404}
            )
        }
        return NextResponse.json(item);
    }catch (err){
        return NextResponse.json( {message: "NOT FOUND",err}, {status: 500})
    } 
}

export const DELETE = async (request,{params}) => {
    try{
        const {id} = params ;

        await prisma.menu2.delete ({
            where: {
                id
            }
        });
        return NextResponse.json("Delete Complete");
    }catch (err){
        return NextResponse.json( {message: "DELETE ERROR",err}, {status: 500})
    } 
};

