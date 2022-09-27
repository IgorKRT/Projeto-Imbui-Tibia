var meleeInput = document.querySelector("#i-melee");
meleeInput.addEventListener('input',function(event){
    event.preventDefault;
    var melee = cadastraItem(meleeInput);
    if (melee=="Skil Espada"){
        var disableLi = document.querySelector("#imbui-skil-espada");
        disableLi.classList.remove("invisivel")
    }
})
var capaceteInput = document.querySelector("#i-capacete")
capaceteInput.addEventListener('input', function(){
    var capa = cadastraItem(capaceteInput);
    if (capa=="Skil Espada"){
        var disableLi = document.querySelector("#imbui-skil-espada");
        disableLi.classList.remove("invisivel")
    }
})

var tierImbui = document.querySelector("#imbui-skil-espada");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totvalor").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-skilespada").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-espada");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-espada");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-espada");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-espada");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-espada");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-espada");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-espada");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-espada");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-espada");
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
   var checkTier = document.querySelector("#i-tier-skilespada").value;
   var res = tierImbuimenteEspada(checkTier);
   document.querySelector("#totvalor").innerHTML = res;
})
function tierImbuimenteEspada(tier){
    var nvOne = document.querySelector("#ilion").value;
    var nvTwo = document.querySelector("#imooh").value;
    var nvTri = document.querySelector("#icrystal").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*25)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*25)+(parseInt(nvOne)*25)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*5)+(parseInt(nvTwo)*25)+(parseInt(nvOne)*25)+150000; return retorno}

}

