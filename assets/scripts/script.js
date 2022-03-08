function Password(){
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let colore = document.getElementById('colore').value;
    let result = document.getElementById('password');
    let numero = Math.round(Math.random() * 1000);
    
    result.innerHTML = `La tua password è: ${nome}${cognome}${colore}${numero}`;
}