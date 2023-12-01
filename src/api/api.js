const fetchLogements = async (id) => {
  const response = await fetch("http://localhost:3000/logements.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const { logements } = await response.json();

  if (id !== undefined) {
    const article = logements.find((item) => item.id === id);
    return article;
  } else {
    return logements;
  }
};


const fetchAbouts = async () => {
  const response = await fetch("http://localhost:3000/logements.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const { about } = await response.json();
  return about;
};
export { fetchLogements, fetchAbouts };
