player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn : "+ player1_name;
document.getElementById("player_answer").innerHTML="answer turn : "+ player2_name;

function send() {
    get_word=document.getElementById("word").value ;
    word=get_word.toLowerCase();

    char1=word.charAt(1);



    rem1=word
    
    question_word="<h4 id='word_display'> Q. " + rem1 + "</h4>";
    input_box="<br> Answer : <input type='text' id='check_box'>";
    check_btn="<br> <br> <button class='btn btn-primary' onclick='check()'> Check </button>";
    row=question_word + input_box + check_btn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";

