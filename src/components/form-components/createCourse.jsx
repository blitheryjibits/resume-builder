
export default function createCourse(course = {}) {
    const newCourse = {
        schoolName: course.schoolName ?? "",
        degree: course.degree ?? "",
        GPA: course.GPA ?? "",
        graduationYear: course.graduationYear ?? "",
        id: course.id ?? ""
    }
    return newCourse;
}