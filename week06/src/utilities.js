const APIURL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers() {
  const response = await fetch(APIURL);
  const data = await response.json();

  return data;
}
