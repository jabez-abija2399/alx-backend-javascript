export default function getStudentIdsSum(students) {
	return sum = students.reduce((total, student) => total + student.id, 0);		
}