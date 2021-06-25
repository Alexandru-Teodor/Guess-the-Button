const winningBtn = (Math.floor(Math.random()* 3) + 1);
let elem = document.body;
function changeColors() {
    let elements = document.getElementsByClassName('btn');
	for(let i = 0; i < elements.length; ++i){
		elements[i].style.backgroundColor = "FireBrick";
	}
}
 
function reply_click(clicked_id){
    changeColors();
    document.getElementById('box').style.visibility = "visible";
    document.getElementById('box').classList.add("box-anim");
    if (clicked_id == winningBtn) {
        elem.classList.add("correct");
        document.getElementById('guessed').style.display = "block";
    }
    else {
        elem.classList.add("wrong");
        document.getElementById('not-guessed').style.display = "block";
    }
    document.getElementById(winningBtn).style.backgroundColor = "#009940";
    document.getElementById(clicked_id).style.transform = "scale(1.5, 1.5) translate(10px, 50px)";
    console.log(winningBtn);
    console.log(clicked_id);
    disableBtns();
}

function ans_click(clicked_id) {
    if (clicked_id == "yes") {
        location.reload();
    }
    else {
        document.getElementById("hide-game").style.visibility = "hidden";
        document.getElementById('box').style.visibility = "hidden";
        document.getElementById('guessed').style.visibility = "hidden";
        document.getElementById('not-guessed').style.visibility = "hidden";
        document.getElementById("endGame").className += "end-msg-style";
        document.getElementById("endGame").style.visibility = "visible";
    }
}
function disableBtns() {
    const btns = document.querySelectorAll('.btn');
    for (let i = 0; i < btns.length; ++i) {
        btns[i].disabled = true;
    }

}