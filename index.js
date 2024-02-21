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
        const eachtitle = title.split("")
        const titleSpaces = []
        for (let i = 0; i < eachtitle.length; i++) {
            if (eachtitle[i] === " ") {
                titleSpaces.push(i)
            }
        }
        for (let i = 0; i < titleSpaces.length; i++) {
            eachtitle[(titleSpaces[i]+1)] = eachtitle[(titleSpaces[i]+1)].toUpperCase()
        }
        eachtitle[0] = eachtitle[0].toUpperCase()
        const newstring = eachtitle.join("")
        return newstring
    })
}
