const APIURL = "http://localhost:3000/api/courses";

export async function getCourses() {
  const response = await fetch(APIURL);
  const data = await response.json();

  return data;
}

export async function postCourse(courseData) {
  try {
    const response = await fetch("http://localhost:3000/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });

    if (!response.ok) {
      throw new Error("Failed to create course on the server");
    }

    const savedCourse = await response.json();
    return savedCourse;
  } catch (error) {
    console.error("Error posting course:", error);
    throw error;
  }
};

export async function updateCourse(courseData) {
  const response = await fetch(`http://localhost:3000/api/courses/${courseData.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(courseData),
  });
  if (!response.ok) throw new Error("Failed to update course");
  return response.json();
};

export async function deleteCourse(courseId) {
  const response = await fetch(`http://localhost:3000/api/courses/${courseId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete course");
  return response.json();
};