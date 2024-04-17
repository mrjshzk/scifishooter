class Score {
    constructor(nome, score) {
        this.nome = nome;
        this.score = score;
    }
}


function add_score(new_score) {
    console.log(new_score)
    var current_scores = []

    try {
        current_scores = JSON.parse(localStorage.getItem("Scores"))
    } catch (error) {
        console.log(error)
    }

    if (current_scores == null || current_scores.length == 0 ) {
        current_scores = [new_score]
        localStorage.setItem("Scores", JSON.stringify(current_scores))
    }

    // substituir nomes duplicados pelo que tem maior score (ainda não funciona a 100%)
    for (var i = 0; i < current_scores.length; i++) {
        if (new_score.nome == current_scores[i].nome && new_score.score > current_scores[i].score) {
            console.log("replacing " + new_score.nome + " score")
            current_scores.splice(i, 1)
        }
    }
    current_scores.push(new_score)
    console.log(current_scores)
    current_scores.sort((a, b) => b.score - a.score)
    localStorage.setItem("Scores", JSON.stringify(current_scores))
}

// alguns dados pre-feitos, depois será integrado no jogo
localStorage.setItem("Scores", null)
add_score(new Score("Miguel", 100))
add_score(new Score("José", 500))
add_score(new Score("Profª Teresa Terroso", 99999))
add_score(new Score("Spongebob", 10000))
add_score(new Score("Bruna", 250))

if (localStorage.getItem("Nome") != null) {
    add_score(new Score(localStorage.getItem("Nome"), 10001))
}

