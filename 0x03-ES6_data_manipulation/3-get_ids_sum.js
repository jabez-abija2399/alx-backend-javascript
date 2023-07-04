export default function getListStudentIds(array) {
  return array.reduce((total, student) => total + student.id, 0);
}
