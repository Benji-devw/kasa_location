const FetchData = async (id) => {
  const response = await fetch("http://localhost:3000/logements.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();

  if (id !== undefined) {
    const article = data.find((item) => item.id === id);
    return article;
  } else {
    return data;
  }
};
export default FetchData;
