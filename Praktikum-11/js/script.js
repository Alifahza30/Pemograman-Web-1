document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    //pilihan user 
    let pilihanUser = element.target.innerText;

    // menangkap elemet pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer 
    pilihanKomputer.innerHTML = choices [Math.round(Math.random()*2)]
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilian komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        setTimeout(()=>alert("DRAW"), 300);
    }

    // jika pilihan user menang 
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WINN");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER WINNN");
    }

    // jika pilihan user kalah 
    if(pilihanUser == "Rock" && pilihanKomputer == "Paper"){
        alert("USER LOSE");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Scissors"){
        alert("USER LOSEE");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        alert("USER LOSEEE");
    }
} 