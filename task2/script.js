
const ques = ["Who is known as the Father of Indian Football?"," Which planet is known as the Red Planet?","Which Indian cricketer is known as the Little Master?","What is the name of India's first satellite launched into space?"," Who holds the record for the most runs scored in a single World Cup tournament by an Indian cricketer?"];
const ans = ["c","d","a","b","c"];
const options = [["Bhaichung Bhutia","Mohun Bagan","Nagendra Prasad Sarbadhikari","Sunil Chhetri"],["Earth","Saturn","Venus","Mars"],["Sunil Gavaskar","Sachin Tendulkar","Rahul Dravid","Kapil Dev"],["Mangalyaan","Aryabhata","INSAT-1A","Chandrayaan"],["Sunil Gavaskar","Rohit Sharma","Virat Kohli","Sachin Tendulkar"]];
let counter = 0;
let i=0;
function next(){
if(i==5){
document.getElementById("question").innerHTML="YOUR SCORE IS : "+counter+"/10";
document.getElementById("a").parentNode.removeChild(a);
document.getElementById("b").parentNode.removeChild(b);
document.getElementById("c").parentNode.removeChild(c);
document.getElementById("d").parentNode.removeChild(d);
document.getElementById("a_text").parentNode.removeChild(a_text);
document.getElementById("b_text").parentNode.removeChild(b_text);
document.getElementById("c_text").parentNode.removeChild(c_text);
document.getElementById("d_text").parentNode.removeChild(d_text);
document.getElementById("submit").parentNode.removeChild(submit);
}else{
document.getElementById("question").innerHTML=ques[i];
document.getElementById("a_text").innerHTML = options[i][0];
document.getElementById("b_text").innerHTML = options[i][1];
document.getElementById("c_text").innerHTML = options[i][2];
document.getElementById("d_text").innerHTML = options[i][3];
i++;
}
}
function submitAns(){
selected();
next();
deselect();
}
let checkAnswers= document.querySelectorAll('.answer');
function deselect(){
checkAnswers.forEach(answerEl => answerEl.checked = false)
}
function selected(){
let marked
checkAnswers.forEach(answerEl => {
if(answerEl.checked) {
marked = answerEl.id
}
});
if(marked==ans[i-1]){
counter+=2;
}
}
next();
