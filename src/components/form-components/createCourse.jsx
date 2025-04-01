
export default function createCourse(course = {}) {
    const newCourse = {
        "School-Name": course["School-Name"] ?? "",
        "Graduation-Year": course["Graduation-Year"] ?? "",
        "Degree": course["Degree"] ?? "",
        "GPA": course["GPA"] ?? "",
        id: course.id ?? ""
    }
    return newCourse;
}