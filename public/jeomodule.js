let categories = require('./categories.json');

function getCategoryName(cID){
    return(categories[cID].name);
}

function getCategoryQuestion(cID, qID){
    return(categories[cID].questions[qID]);
}


getCategoryName(0);


module.exports = {
    categories,
    getCategoryName
}























// module.exports = {
//     categories,
//     questions
// }
