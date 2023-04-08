import { type NextPage } from "next";
import { useState } from "react";
import { createClient } from "redis";

const client = createClient();

client.on("error", function (error) {
  console.error(error);
});

const Home: NextPage = () => {
  const [value, setValue] = useState(0);

  const handleClick = async () => {
    // Call API to increment counter
    const res = await fetch("/api/counter");
    const data = await res.json();
    setValue(data.value);
  };

  return (
    <div>
      <p>Counter: {value}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export async function getServerSideProps() {
  // Get initial counter value
  const value = await redis.get("counter");
  return { props: { initialValue: parseInt(value) || 0 } };
}

export default Home;
