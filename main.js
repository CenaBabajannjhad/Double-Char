let input = 'hello world'

function doubleChar(str) {
    let output = '';

    for(let i = 0 ; i < str.length ; i++){
        output += str[i] + str[i]
        
    }
    
    return output;
}

console.log(doubleChar(input))
// output = output + ( str[i] + str[i] )
  