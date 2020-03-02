var list=[
    "ewant育網開放教育平台","https://www.ewant.org/",
    "Hahow 好學校" ,"https://hahow.in/",
    "Tibame","https://www.tibame.com/",
    "VoiceTube","https://tw.voicetube.com/",
    "YOTTA", "https://www.yottau.com.tw/home/",
    "學習吧", "https://www.learnmode.net/",
    "台灣大學開放課程", "http://ocw.aca.ntu.edu.tw/ntu-ocw/",
    "交通大學開放課程", "https://ocw.nctu.edu.tw/course.php",
    "清華大學學聯網", "https://www.sharecourse.net/sharecourse/unit/nthu",
    "均一教育平台", "https://www.junyiacademy.org/",
    "六角學院", "https://www.hexschool.com/",
    "果殼網MOOC學院", "https://www.openlearning.com/guokrmooc/",
    "高高飛翔Gogovisor", "https://www.gogovisor.com/",
    "萬門大學", "https://www.wanmen.org/ (CN)",
    "網易公開課", "https://open.163.com/",
    "中小企業網路大學校", "https://www.smelearning.org.tw/",
    "微軟教育網", "https://www.microsoft.com/taiwan/education/ms-educator-community.aspx"
];

var output='';
var list_length=list.length/2;
var number_of_column = 3;
var number_of_row = 6;
for (var column = 1; column <= number_of_column; column++) {
    output = output + '<div class="option_column" id="option_column_'+column+'">';
    for (var row = 1; row <= number_of_row; row++){
        if ((column-1)*number_of_row+row <= list_length){
            output += '<a class="column_link column_link_'+column+'" href="'+list[(column-1)*number_of_row*2+(row-1)*2+1]+'" target="_blank"><img class="link_sign" src="../../material/resources/5_1_resources_sign.png">' + list[(column-1)*number_of_row*2+(row-1)*2] + '</a>';
        }
    }
    output += '</div>';
  }
document.getElementById("middle_option").innerHTML = output ;