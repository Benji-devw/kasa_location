
const FetchData = async () => {
    try {
      const response = await fetch('./logements.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          },
          });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }

};
 export default FetchData;
