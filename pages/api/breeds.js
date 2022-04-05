import axios from "axios";

export default async function handler(req, res) {
console.log(req.page);
  const apiEndpoint = `https://api.thecatapi.com/v1/breeds?limit=20&page=${req.page}`;
  try {
    const response = await axios.get(apiEndpoint, {
      headers: {
        "x-api-key": process.env.THE_CAT_API_KEY
      },
    });
    const data = await response.data;
    res.status(200).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(400).end();
  }
}