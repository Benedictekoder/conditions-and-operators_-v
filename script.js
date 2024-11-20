const nameElement = document .querySelector( `#name` )
const ageElement = document. querySelector(`#age`)
const heightElement = document. querySelector(`#height`)

const submitButton = document. querySelector(`#submit button`)

function submit ()[
    const name = nameElement .value
    const age= ageElement .value
    const height = heightElement. value

    if(name === `B`){
        console.log(`navnet er B`)
    } else if (name ==="B"){
        console.log("navnet er B")
     } else {
        console.log("navnet var ikke D")
     }
]

submitButton .addEventListener ("click",submit)
