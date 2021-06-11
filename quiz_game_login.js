function addUser(){
    player1_save=document.getElementById("guess_input1").value;
    player2_save=document.getElementById("guess_input2").value;
    localStorage.setItem("player1_save",player1_save);
    localStorage.setItem("player2_save",player2_save);
    window.location="game_page.html";

}