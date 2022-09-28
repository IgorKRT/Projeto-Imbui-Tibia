var escudoInput = document.querySelector("#i-escudo");
escudoInput.addEventListener('input', function(){
    var escu = cadastraItem(escudoInput);
    if (escu=="Proteção a Energy"){
        var disableLi = document.querySelector("#imbui-resenergy");
        disableLi.classList.remove("invisivel")
    }
})
var armaduraInput = document.querySelector("#i-armadura");
armaduraInput.addEventListener('input', function(event){
    event.preventDefault;
    var armadura = cadastraItem(armaduraInput);
    if (armadura=="Proteção a Energy"){
        var disableLi = document.querySelector("#imbui-resenergy");
        disableLi.classList.remove("invisivel");
    }
})

var tierImbui = document.querySelector("#imbui-resenergy");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totresenergy").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-resenergy").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-resenergy");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-resenergy");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-resenergy");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-resenergy");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-resenergy");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-resenergy");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-resenergy");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-resenergy");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-resenergy");
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
var botaoCacl = document.querySelector("#btn-resenergy");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-resenergy").value;
   var res = tierImbuimenteResEnergy(checkTier);
   document.querySelector("#totresenergy").innerHTML = res;
})
function tierImbuimenteResEnergy(tier){
    var nvOne = document.querySelector("#iwyvern").value;
    var nvTwo = document.querySelector("#icrawler").value;
    var nvTri = document.querySelector("#iwyrm").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*20)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*15)+(parseInt(nvOne)*20)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*10)+(parseInt(nvTwo)*15)+(parseInt(nvOne)*20)+150000; return retorno}

}
