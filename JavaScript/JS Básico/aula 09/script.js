var naame = '';

if( typeof localStorage.naame == 'undefined'){
    localStorage.naame = prompt('Digite seu nome');
}

naame = localStorage.naame;

document.getElementById('nome').innerHTML = naame;