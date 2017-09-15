const _ = require('lodash');

// WARNING: beware object mutable

/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {

    for(var i=0;i<store.length;i++){
        var ind = _.findIndex(store.students, { name: name })
        store[i].students[ind].scores = scores[store[i].subject]
    }
    return store
};

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
    // code here
    var ind = _.findIndex(store, { subject: subject })
    var ind2 = _.findIndex(store.students, { name: name })
    if(ind!=-1){
        store[ind].students[ind2].scores = subject[store[ind].subject]
    }
    return store
};

/**
 * @params {Object} store
 */
exports.transformData = store => {
    
};
