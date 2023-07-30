import FriendsList from "./FriendList";
import FormSplitBill from "./FormSplitBill";
import FormAddFriend from "./FormAddFriend";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [curFriend, setCurFriend] = useState({});

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === curFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setCurFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          data={friends}
          curFriend={curFriend}
          setCurFriend={setCurFriend}
        />
        {showAddFriend && (
          <FormAddFriend
            setShowAddFriend={setShowAddFriend}
            setFriends={setFriends}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>
      {curFriend && (
        <FormSplitBill
          curFriend={curFriend}
          setCurFriend={setCurFriend}
          onSplitBill={handleSplitBill}
          key={curFriend.id}
        />
      )}
    </div>
  );
}

export default App;
