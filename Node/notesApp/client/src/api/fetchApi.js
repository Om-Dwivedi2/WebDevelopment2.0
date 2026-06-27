import axios from "axios";

export async function fetchNotes() {
  try {
    const res = await axios.get("http://localhost:4500/user/notes"); 
    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
}
