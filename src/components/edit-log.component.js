import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { editLogEntry } from "../API";

export async function editLogEntry(entry){
    // const [isLoading, setLoading] = useState(true);
    // const [title, setTitle] = useState("");
    // const [comments, setComments] = useState("");
    // const [image, setImage] = useState("");
    // const [description, setDescription] = useState("");
    // const [rating, setRating] = useState("");
    // const [latitude, setLatitude] = useState("");
    // const [longitude, setLongitude] = useState("");
    // const [visitDate, setVisitDate] = useState("");
    const response = await fetch(`${API_URL}/api/logs/update/${entry.id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body:JSON.stringify(entry)
    });
    return response.json();
    }