export default function getListStudentIds(arr) {
  return array.reduce((total, student) => total + student.id, 0);
}
