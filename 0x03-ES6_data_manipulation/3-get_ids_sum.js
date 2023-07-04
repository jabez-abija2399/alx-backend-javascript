export default function getListStudentIds(array) {
  return array.reduce((total, i) => accumulator + i.id, 0);
}