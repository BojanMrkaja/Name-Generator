document.querySelector('#generate-names').addEventListener('submit', loadNames);


function loadNames(e){
    e.preventDefault();
    

    //Rad the value from form and create the variables

    const origin = document.getElementById('country').value;
    const gender = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    //bild the URL
    let url = 'https://uinames.com/api/?';

    //Read the origin and append to url
    if(origin !== ''){
        url += `region=${origin}&`;
    }
    
    //Read gender to url
    if(gender !== ''){
        url += `gender=${gender}&`;
    }

    // //Read the amount of names
    if(isNaN(amount)){
        url =+ ``;
    }else{
        url += `amount=${amount}&`;
    }



    const xhr = new XMLHttpRequest();

    xhr.open('GET', url , true);

    xhr.onload = function(){
        if(this.status === 200){
            const names = JSON.parse(this.responseText);

            let output = `<h5>Generated Names for ${origin}, ${gender}</h5>`
            output += '<ul class="list">';

            names.forEach(function(name){
                output += `<li>${name.name}</li>`;
            });

            output += '</ul>'

            document.getElementById('result').innerHTML = output;
        }
    }

    xhr.send();
}