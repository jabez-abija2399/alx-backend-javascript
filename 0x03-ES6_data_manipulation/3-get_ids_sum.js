export default function getListStudentIds(array) {
  return array.reduce((total, i) => total + i.id, 0);
}