const students = [
    {
        name: 'Néfi',
        grade: 7
    },
    {
        name: 'Nara',
        grade: 8
    },
    {
        name: 'Michael',
        grade: 5
    }
]

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7)
}

console.log('Alunos aprovados: ')
console.log(getApprovedStudents(students))

console.log('\nLista de alunos')
console.log(students)