//mapMethod:-creates a new array populated with the results of calling a provided function on every element in the calling array



function extractValues(people,key) {
    return people.map(person => person[key])
}
