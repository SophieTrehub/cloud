console.log(" ");
console.log("   TASK 2:Patterned strap  ");

var horizontal = [
	["A","A"],
	["B","B"],
	["C","C"]
];
  
  var vertical = [
    ["A", "B"],
    ["A", "B"],
    ["A", "B"]
];

  var diagonalleft=[
    ["A", "B", "C"],
    ["C", "A", "B"],
    ["B", "C", "A"],
    ["A", "B", "C"]
  ];

  var diagonalright=[
    ["A", "B", "C"],
    ["B", "C", "A"],
    ["C", "A", "B"],
    ["A", "B", "A"]
  ];

  function strap(pattern){
    answer2 = true;
    answer1=true;
    answer3=true;
    answer4=true;
    for (i=0;i<pattern.length;i++ ){//check horizontal type
            console.log(pattern[i]);
        }
      for (i=0;i<pattern.length;i++ ){//check horizontal type
        for(j = 1; j <pattern[i].length; ++j){
            if (pattern[i][j]!=pattern[i][j+1])
                answer1=false;
        }
      }
      for(j = 0; j < pattern[0].length; ++j){//check vertical type
		for(i = 1; i < pattern.length; ++i){
            if(pattern[i][j]!=pattern[i-1][j]) 
             answer2 = false;
		}
	}
    for (i=0;i<pattern.length-2;i++ ){//check left type
        for(j = 0; j <pattern.length-2; ++j){
            if (pattern[i][j]!=pattern[i+1][j+1])
                answer3=false;
        }
      }
      for (i=0;i<pattern.length-1;i++ ){//check right type
        for(j = pattern[0].length-1; j>0; --j){
            if (pattern[i][j]!=pattern[i+1][j-1])
                answer4=false;
        }
      }
      return answer4||answer3||answer2||answer1;
  }

 
  console.log(strap(diagonalright));