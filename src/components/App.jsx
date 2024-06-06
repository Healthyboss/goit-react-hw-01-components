import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import FriendListItem from "./FriendListItem";
import TransactionHistory from "./TransactionHistory";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

function App() {
  return (
    <>
      <h1
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
          color: "#010101",
        }}>
        React Homework Template (Vite)
      </h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends}>
        <FriendListItem
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      </FriendList>
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
