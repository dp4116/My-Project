import { useState } from "react";
import { Button } from "./App";


export default function FormAddFriend({setShowAddFriend,setFriends}){
    const [name,setName]=useState('');
    const [image,setImage]=useState("https://i.pravatar.cc/48");

    function handleSubmit(e){
        e.preventDefault();

        const id = crypto.randomUUID();
        const newfriend={
            id: id,
            name: name,
            image: `${image}?=${id}`,
            balance: 0,
        }

        setFriends((array)=>[...array,newfriend]);
        setName('');
        setShowAddFriend(false);
    }

    return (
        <>
        <form className='form-add-friend' onSubmit={handleSubmit}>
            <lable> 🤷‍♂️Friend Name</lable>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>🧒Image URL:</label>
            <input type='text' value={image} onChange={(e)=>setImage(e.target.value)}/>
            <Button>ADD</Button>
        </form>
        </>
    );
}