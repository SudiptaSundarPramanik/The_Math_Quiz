function addUser(){
    player1_name=document.getElementById("guess_input1").value;
    player2_name=document.getElementById("guess_input2").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location="quiz_game_page.html";
}