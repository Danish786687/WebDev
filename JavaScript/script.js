function getGrade(score){
    if(score>= 90 && score <=100) return "grade A+";
    if(score>= 80) return "grade A";
    if(score >=70) return "Grade B";
    if(score >= 60) return "Grade c";
    if(score >=33) return "grade d"
    if(score >=0) "fail";
    return "invalid marks entered";
}
let score=-65;
console.log(getGrade(score));