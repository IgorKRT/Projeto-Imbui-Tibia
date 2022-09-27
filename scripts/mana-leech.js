var meleeInput = document.querySelector("#i-melee");
meleeInput.addEventListener('input',function(event){
    event.preventDefault;
    var melee = cadastraItem(meleeInput);
    if (melee=="Mana Leech"){
        var disableLi = document.querySelector("#imbui-mana-leech");
        disableLi.classList.remove("invisivel")
    }
})
var capaceteInput = document.querySelector("#i-capacete")
capaceteInput.addEventListener('input', function(){
    var capa = cadastraItem(capaceteInput);
    if (capa=="Mana Leech"){
        var disableLi = document.querySelector("#imbui-mana-leech");
        disableLi.classList.remove("invisivel")
    }
})
var arcoInput = document.querySelector("#i-distancia");
arcoInput.addEventListener('input', function(event){
    event.preventDefault;
    var arco = cadastraItem(arcoInput);
    if (arco=="Mana Leech"){
        var disableLi = document.querySelector("#imbui-mana-leech");
        disableLi.classList.remove("invisivel");
    }
})
var cajadoInput = document.querySelector("#i-cajado");
cajadoInput.addEventListener('input', function(event){
    event.preventDefault;
    var cajadoT = cadastraItem(cajadoInput);
    if (cajadoT=="Mana Leech"){
        var disableLi = document.querySelector("#imbui-mana-leech");
        disableLi.classList.remove("invisivel");
    }
})

var tierImbui = document.querySelector("#imbui-mana-leech");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totvalor").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-mana").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-mana");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-mana");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-mana");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-mana");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-mana");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-mana");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-mana");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-mana");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-mana");
        disableVn3.classList.add("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.add("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.add("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.add("invisivel");
        var disablegtgeral = document.querySelector("#gold-token");
        disablegtgeral.classList.add("invisivel");
   }
})
var botaoCacl = document.querySelector("#btn-total");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-mana").value;
   var res = tierImbuimenteMana(checkTier);
   document.querySelector("#totvalor").innerHTML = res;
})
function tierImbuimenteMana(tier){
    var nvOne = document.querySelector("#irope").value;
    var nvTwo = document.querySelector("#isilencer").value;
    var nvTri = document.querySelector("#igrimeleech").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*25)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*25)+(parseInt(nvOne)*25)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*5)+(parseInt(nvTwo)*25)+(parseInt(nvOne)*25)+150000; return retorno}

}

