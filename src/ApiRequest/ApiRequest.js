import axios from "axios";


export async function PostCatagoris() {
  try {
    let res = await axios.get('https://openapi.programming-hero.com/api/peddy/categories');
    if (res.status === 200 && res.data.status === true) {
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}



export async function Allpets() {
  try {
    let res = await axios.get('https://openapi.programming-hero.com/api/peddy/pets');
    if (res.status === 200 && res.data.status === true) {
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}


export async function CategoriIDFetch(category) {
  try {
    let res = await axios.get('https://openapi.programming-hero.com/api/peddy/category/'+category);
    if (res.status === 200 && res.data.status === true) {
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
