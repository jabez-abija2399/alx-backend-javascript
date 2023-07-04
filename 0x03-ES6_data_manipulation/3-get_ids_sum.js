export default function getListStudentIds(array) {
  return array.reduce((accumulator, student) => accumulator + student.id, 0);
}