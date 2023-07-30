function Friend({ friend, curFriend, setCurFriend }) {
  function handleSelect(friend) {
    if (friend.id === curFriend?.id) {
      setCurFriend({});
    } else {
      setCurFriend(friend);
    }

    return;
  }

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p> You and {friend.name} are even</p>}
      <button className="button" onClick={() => handleSelect(friend)}>
        {curFriend?.name === friend.name ? "Close" : "Select"}
      </button>
    </li>
  );
}

export default function FriendsList({ data, curFriend, setCurFriend }) {
  return (
    <ul>
      {data.map((item) => (
        <Friend
          friend={item}
          curFriend={curFriend}
          setCurFriend={setCurFriend}
        />
      ))}
    </ul>
  );
}
