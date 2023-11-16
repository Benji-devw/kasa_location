
const FetchData = async (id) => {
    try {
      const response = await fetch('./logements.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          },
          });
      const data = await response.json();

      if (id !== undefined) {
        const article = data.find((item) => item.id === id);
        return article;
      } else {
        return data;
      }

    } catch (error) {
      console.error(error);
    }

};
 export default FetchData;
