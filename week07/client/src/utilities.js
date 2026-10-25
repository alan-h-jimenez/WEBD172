const APIURL = "http://localhost:3000/api/courses";

export async function getCourses() {
  const response = await fetch(APIURL);
  const data = await response.json();

  return data;
}
