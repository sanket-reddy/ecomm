import axios from "axios";
export default async function handleRating(
  rating: string,
  token: string,
  title: string,
  category: string
) {
  console.log("reached the function");
  try {
    let response = await axios.post("http://localhost:3000/api/buyproduct", {
      rating,
      title,
      category,
      token,
    });
    if (response.status === 200) {
      console.log(response.data);
    } else {
      console.log(response.data);
    }
  } catch (error) {
    console.log(`error : ${error}`);
  }
}
