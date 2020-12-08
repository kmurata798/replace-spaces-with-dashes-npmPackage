// const sayHi = () => {
//   console.log("HIIIIIIIIIIIII!!!");
// }
// const sayBye = () => {
//     console.log("BYEEEEEEEEEEEEE!!!");
// }

// module.exports = {
//   sayHi,
//   sayBye
// }

module.exports = {
    addDashes: (string) => {
        // Replace all white spaces in a given string with dashes (-)
        console.log("Replacing spaces with dashes...")

        // Must use RegExp /\s+/g to find each whitespace
        // \s means 'one space' and \s+ means 'one or more spaces'
        // g means to search 'globally'. If we didn't inlcude g,
        // Only the first white space found will be replaced.
        const newString = string.replace(/\s+/g, '-').toLowerCase();
        
        // return the new string with replaced white spaces
        return newString;
    }
}