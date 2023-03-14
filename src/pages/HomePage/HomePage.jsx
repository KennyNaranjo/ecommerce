import { useContext, useState } from 'react';
import Data from '../../db/data.json';
import Card from '../../components/Card/Card';
import { UserContext } from '../../context/user/UserContext';

function HomePage() {
  const  users  = Data;
  const [displayData, setdisPlayData] = useState(users)
  const [text , setText] = useState("")
  const { userData } = useContext(UserContext);
  const handleSearch = (e) => {
    setText(e.target.value) 
    if(text.length>2){
      const results = users.filter(item => item.title.toLowerCase().includes(text.toLowerCase()))
      return setdisPlayData(results)

    }
    return setdisPlayData(users)
  }
  console.log({ userData });
  return (
    <>
    <div>
    <input onChange={handleSearch} value={text} placeholder="type something" type="text"/> 
    </div>
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '2rem',
      }}
    >
      <h1>Welcome: {userData.email}</h1>
      {displayData?.slice(0 , 500).map(({ id, title, thumbnail }) => {
        return <Card key={id} id={id} title={title} thumbnail={thumbnail} />;
      })}
    </div>
    </>
  );
}

export default HomePage;
