var list=[
    "Apple Developer Site" ,"https://developer.apple.com/",
    "BetterExplained","https://betterexplained.com/",
    "Code.org","https://code.org/",
    "Codecademy","https://www.codecademy.com/",
    "Cognitive Class","https://cognitiveclass.ai/",
    "Coursera","https://zh-tw.coursera.org/",
    "CreativeLive" ,"https://www.creativelive.com/",
    "DataCamp","https://www.datacamp.com/",
    "Duolingo" ,"https://www.duolingo.com/",
    "edX","https://www.edx.org/",
    "freeCodeCamp","https://www.freecodecamp.org/",
    "Grovo","https://www.grovo.com/",
    "Hack Design","https://hackdesign.org/",
    "Khan Academy","https://zh.khanacademy.org/",
    "Lernu","https://lernu.net/zh-tw",
    "LinkedIn Learning","https://www.linkedin.com/learning",
    "Lynda","https://www.lynda.com/",
    "Memrise","https://www.memrise.com/zh-hant/",
    "MIT OpenCourseWare","https://ocw.mit.edu/index.htm",
    "NovoEd","https://www.novoed.com/",
    "Open Learning Initiative","https://oli.cmu.edu/",
    "Open Yale Courses","https://oyc.yale.edu/",
    "Stack Exchange","https://stackexchange.com/",
    "Stanford Engineering","https://see.stanford.edu/",
    "Tut+","https://tutsplus.com/",
    "Udacity","https://www.udacity.com/",
    "Udemy","https://www.udemy.com/zh-tw/",
    
];

console.log(list[0]);
var output='';
var list_length=list.length/2;
var number_of_column = 3;
var number_of_row = 9;
console.log("list_length="+list_length);
for (var column = 1; column <= number_of_column; column++) {
    console.log("column="+column);
    output = output + '<div class="option_column" id="option_column_'+column+'">';
    for (var row = 1; row <= number_of_row; row++){
        console.log("row="+row);
        if ((column-1)*number_of_row+row <= list_length){
            output += '<a class="column_link column_link_'+column+'" href="'+list[(column-1)*number_of_row*2+(row-1)*2+1]+'" target="_blank"><img class="link_sign" src="../../material/resources/5_1_resources_sign.png">' + list[(column-1)*number_of_row*2+(row-1)*2] + '</a>';
        }
    }
    output += '</div>';
  }
document.getElementById("middle_option").innerHTML = output ;