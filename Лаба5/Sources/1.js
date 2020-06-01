console.log("   TASK 1:Italian fiscal code  ");
class Person {
	constructor(name, surname, gender, date) {
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.date = date;
	}
}
const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }
var a = new Person('Mat','Ed','F','25/1/1900');
console.log(a);

function removeVowels( input ){
    input=input.replace(/[aeiouAEIOU]/g, "");
    input=input.toUpperCase();
    return input;
}
function removeConsonant(input){              
    input=input.replace(/[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]/g, "");
    input=input.toUpperCase();
    return input;
}

function threeSymbolsSur(input){
        threeLetters="";
        if (input.length<3){//Менше трьох літер тоді "X" займе третю позицію після приголосного та голосного
            threeLetters+=removeVowels(input)+removeConsonant(input)+"X";
            return threeLetters;
        }
    if (removeVowels(input).length>=3){ //Якщо більше 3 приголосних виводимо перші 3
    for (i=0; i<3;i++) {
        threeLetters +=removeVowels(input)[i];
      }
    return threeLetters;
    }
    if (removeVowels(input).length<3){//Якщо менше 3 приголосних, в кінець додаємо голосні
          threeLetters+=removeVowels(input);
          for(i=0; i<3; i++){
              if(threeLetters.length != 3){
                  threeLetters += removeConsonant(input)[i];
              }else{
                threeLetters += "X";
              }
          }
          return threeLetters;
      }
}
function threeSymbolsName(input){
    threeLetters="";
    if (input.length<3){//Менше трьох літер тоді "X" займе третю позицію після приголосного та голосного
        threeLetters+=removeVowels(input)+removeConsonant(input)+"X";
        return threeLetters;
    }
    if (removeVowels(input).length<3){//Менше трьох приголосних, тоді голосні замінять відсутні літери в тому ж порядку, в якому вони відображаються 
        threeLetters+=removeVowels(input);
        for(i=0; i<3; i++){
            if(threeLetters.length != 3){
                threeLetters += removeConsonant(input)[i];
            }else{
              break;
            }
        }
        return threeLetters;
    }
    if (removeVowels(input).length==3){ //Рівно 3 приголосних тоді приголосні вживаються в тому порядку, в якому вони з’являються 
        for (i=0; i<3;i++) {
            threeLetters +=removeVowels(input)[i];
          }
        return threeLetters;
        }
if (removeVowels(input).length>3){ //Вживається більше 3 приголосних, тоді перший, третій та четвертий приголосні
    threeLetters +=removeVowels(input)[0]+removeVowels(input)[2]+removeVowels(input)[3];
return threeLetters;
}
}
function genderdate(gen,dat){
    var data="";
    var res="";
    for (i=0;i<2;i++){
        data=dat.split('/');
    }
    day=data[0];
    month=data[1];
    year=data[2];
    res=year.substr(-2);
   res+=months[month];
   if (gen=="M"){
if (day<10){
res+="0"+day;
}else{
    res+=day;
}
   }else{
       var newday=+day;
       newday+=40;
       res+=newday;
   }
   return(res);
}
console.log(threeSymbolsSur(a.surname)+threeSymbolsName(a.name)+genderdate(a.gender,a.date));

