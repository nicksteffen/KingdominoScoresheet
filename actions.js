function totalScoreForPlayer(player) {
    console.log(player);
    var className = player + 'score';
    console.log(className);
    var all = document.getElementsByClassName(className);
    var allVals = Array.from(all)
    sum = allVals.reduce(getSum, 0);
    var y = document.getElementById(player + "answer");
    y.value = sum;
}

function getSum(total, num) {
    return total + parseInt(num.value);
}

function resetNames() {
    var names =  document.getElementsByClassName('name');
    console.log(names);
    for (i = 0; i < names.length; i++) {
        names[i].value = "Player " + parseInt((i + 1));
    }
}

function resetValues() {
    var scores = document.getElementsByClassName('score');
    for (i = 0; i < scores.length; i++) {
        scores[i].value = 0;
    }
    var totals = document.getElementsByClassName('answer');
    for (i = 0; i < totals.length; i++) {
        totals[i].value = 0;
    }
}

function resetGame() {
    resetNames();
    resetValues();
}


