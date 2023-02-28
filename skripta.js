function obrisi_elemente(){ 
  elementi = document.getElementsByClassName("element");
  while(elementi.length > 0){
    elementi[0].parentNode.removeChild(elementi[0]);
  }
}

function dodaj_element(){
  if(document.getElementById("unos").value != ""){
    const novi_element = document.createElement("element");
    novi_element.innerText = "" + document.getElementById("unos").value;
    novi_element.classList.add("element");
    document.getElementById("DIVelementi").appendChild(novi_element);
    document.getElementById("unos").value = "";
  }
}