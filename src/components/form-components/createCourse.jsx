
export default function createCourse(course = {}) {
    const newCourse = {
        schoolName: course.schoolName ?? "",
        degree: course.degree ?? "",
        fieldOfStudy: course.fieldOfStudy ?? "",
        graduationYear: course.graduationYear ?? "",
        id: course.id ?? ""
    }
    return newCourse;
}