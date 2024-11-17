import api from "../tools/api";

async function getData() {
  const response = await api.get("/home");
  return response.data;
}

export default function GetHomeData() {
  const data = getData();
  return data;
}


