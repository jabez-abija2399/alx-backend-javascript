export default function getListStudentIds(arr) {
  return arr.reduce((total, student) => total + student.id, 0);
}
