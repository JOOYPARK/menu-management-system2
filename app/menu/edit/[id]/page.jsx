"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";  
import EditForm from './components/EditForm'


const getItemById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/menuItem/${id}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.error(error);
    }
};

const UpdateItem = () => {
    const router = useRouter();
    console.log("id: ", router)
    const { id } = router.query

    const [data, setData] = useState({});

    useEffect(() => {
        if (id) {
            (async () => {
                const fetchedData = await getItemById(id);
                if (fetchedData) {
                    setData(fetchedData);
                }
            });
        }
    }, [id]);

    return <EditForm id={id} name={data.name} price={data.price} />;
};


export default UpdateItem;