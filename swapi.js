let request="https://swapi.dev/api/people/1/";
fetch(request).then((response) => {
    return response.json();
}).then( (data)=> {
   const description=data.description
   const pElement=document.createElement("p")
   pElement.textContent=description
   const descriptionBox=document.getElementById("desc")
   descriptionBox.appendChild(pElement)
})
.catch(error => console.log(error))