fetch('http://localhost:3000/characters')
.then((res)=> res.json())
.then((characters)=>{
    characters.forEach((character)=>displayListCharacters(character))
})


//<li> for list is created
function displayListCharacters(character){
    const listsName = document.createElement('li')
    listsName.className = "listsName";

    const list = document.getElementById('characterList')
    list.appendChild(listsName)

    //creating link to the json from the innerhtml
    const link = document.createElement("a")
    link.href = `http://localhost:3000/characters/${character.id}`
    link.textContent=`${character.name}`

    listsName.appendChild(link)
    
    //makes a name on the list to be clicked
    link.addEventListener('click', (e)=>{
        e.preventDefault()
        //prevents the click from moving into another different tab

        //registers the name on the characters details
        const name = document.querySelector('#mySection h4')
 git add .addEventListener       name.textContent = `${character.name}`

        //registers the votes of the character
        const vote = document.querySelector('label')
        vote.innerHTML=`Votes : ${character.votes}`
        vote.setAttribute("id", "count")

        const image = document.querySelector('#mySection img')
        image.src=character.image

        //creating a form
        const form = document.querySelector("#mySection form")
        form.innerHTML=`
        <input type="text" id="number">
        <input type="submit" id="submit">
        <button id="reset">reset</button>
        `
        
        function addVotes(){
            let submit = document.getElementById("submit")
            submit.addEventListener("click", function(event){
                event.preventDefault()

                let values = document.getElementById('number').value
                //helps in the calculation of the votes
                let result= eval(values)
                vote.textContent = `Votes : ${result}`

                //resets the input field back to the default value
                vote.value= vote.defaultvalue
        
                //to clear input after saving
                document.getElementById("number").value = ''



            })

           
        }
        //call out
        addVotes()

        function resetVotes(){
            //getting the reset button
            let reset = document.getElementById("reset")
            reset.addEventListener("click", function(event){
                event.preventDefault()
                //reset value to 0
                let result = 0
                vote.textContent=`Votes : ${result}`
            })

        }
        //call out
        resetVotes()
    })

}