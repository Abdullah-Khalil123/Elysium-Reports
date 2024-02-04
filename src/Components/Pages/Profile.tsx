async function handleClick() {
  const response = await fetch("/api/Expenses/2024-02");
  try {
    if (!response.ok) {
      throw new Error();
    }
    const data = await response;
    console.log(data.json());
  } catch (err) {
    console.log(err);
  }
}

const Profile = () => {
  return (
    <div>
      <button onClick={handleClick}>Profile</button>
    </div>
  );
};

export default Profile;
