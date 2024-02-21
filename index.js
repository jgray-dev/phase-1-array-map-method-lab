const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
];

function titleCased() {
    return tutorials.map((title)=> {
        let splittitle = title.split(" ")
        splittitle.forEach((word, index)=> {
            word = word.split("")
            word[0] = word[0].toUpperCase()
            index !== splittitle.length-1 ? word.push(" ") : undefined
            splittitle[index] = word.join("")
        })
        return splittitle.join("")
    })
}

