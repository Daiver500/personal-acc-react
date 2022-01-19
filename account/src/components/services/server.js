
class GetData {
    getResource = async (url) => {
      let res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
      }
      return await res.json();
    }

    getCharacterInformation = () => {
      return this.getResource("https://random-data-api.com/api/users/random_user");
      
    }

    getProductInformation = () => {
      return this.getResource("https://random-data-api.com/api/beer/random_beer");
      
    }
  }

export default GetData;
  