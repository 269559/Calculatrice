const info = document.querySelector('.infos')

const altBtns = document.querySelectorAll('input[type="button"]')

function val(resultat){
    form.fenetre.value = form.fenetre.value + resultat


}

function calcule(){
    if(form.fenetre.value == ""){
        info.innerText = 'Veuillez ecrire un chiffre';
        allBtns.forEach(btn => {
            btn.addEventListener('click', function(){
                info.innerText = ""

            })
       
})
    }else {
        form.fenetre.value= eval(form.fenetre.value)
    }
}

function suppr() {

    form.fenetre.value='';

}