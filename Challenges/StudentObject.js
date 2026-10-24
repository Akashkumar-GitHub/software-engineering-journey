const student ={
    name : "Akash",
    course : "AIMl",
    Semester : 7,
    isLearningDevelopment : true,
}
console.log(student.name);
console.log(student.course);

student.targetrole ="software engineer"
student.Semester = 8
console.log(student);

function displayStudent(student){
    console.log("Student Name:", student.name);
    console.log("Course:", student.course);
    console.log("Semester:", student.Semester);
    console.log("Is Learning Development:", student.isLearningDevelopment);
    console.log("Target Role:", student.targetrole);
}
displayStudent(student);