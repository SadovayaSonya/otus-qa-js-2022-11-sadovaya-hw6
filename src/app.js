function getScore(scores) {
    return Object.values(scores).reduce((partialSum, a) => partialSum + a, 0);
}

const scoresFirstExample = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
}
console.log(getScore(scoresFirstExample)); // 16

const scoresSecondExample = {
    Alex: 10,
    Marty: 9,
    Melman: 8,
    Gloria: 7,
    Skipper: 6,
    Kowalski: 5,
    Rico: 4,
    Private: 3,
    Maurice: 2,
    Mort: 100
}
console.log(getScore(scoresSecondExample)); // 154