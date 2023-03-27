

// function forEach(items, callback) {
//     for (let index = 0; index < items.length; index++) {
//         callback(items[index]);
//     }
// }


// module.exports = forEach





function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}


module.exports = {
     forEach,
    forEach2: forEach
};
