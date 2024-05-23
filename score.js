class Score {
    constructor(nome, score) {
        this.nome = nome;
        this.score = score;
    }
}

function update_score(all_scores) {
    all_scores.sort((a, b) => b.score - a.score)
    localStorage.setItem("Scores", JSON.stringify(all_scores))
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
        return
    }

    // substituir nomes duplicados pelo que tem maior score
    for (var i = 0; i < current_scores.length; i++) {
        if (new_score.nome != current_scores[i].nome) {
            break
        }
        switch (new_score.score > current_scores[i].score) {
            case true:
                console.log(`Updating ${new_score.nome}'s score from ${current_scores[i].score} to ${new_score.score}`)
                current_scores[i].score = new_score.score
                update_score(current_scores)
                return
            default:
                return
        }
    }
    current_scores.push(new_score)
    update_score(current_scores)
}

// alguns dados pre-feitos, depois será integrado no jogo



