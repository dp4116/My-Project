import { useState } from "react";
import { Button } from "./App";

export default function FormSplitBill({ curFriend, setCurFriend, SplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e){
    e.preventDefault();
    
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);

  }

  return (
    <form className="form-split-bill" onSubmit={(e)=>{handleSubmit(e)}}>
      <h2>Split Bill with {curFriend.name} </h2>

      <lable>💰 Bill value</lable>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <lable>😎 Your expence</lable>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}
    
      />
      <lable>👩‍👧‍👦{curFriend.name}'s expence</lable>
      <input type="text" disabled value={paidByFriend} />
      <lable>🤑 Who is paying the Bill</lable>
      <select
        value={whoIsPaying}
        onChange={(e) => { setWhoIsPaying(e.target.value)}}
      >
        <option value="user">You</option>
        <option value="friend">{curFriend.name}</option>
      </select>

      <Button>SPLIT BILL</Button>
    </form>
  );
}
