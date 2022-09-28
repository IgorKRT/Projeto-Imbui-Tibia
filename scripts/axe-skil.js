var meleeInput = document.querySelector("#i-melee");
meleeInput.addEventListener('input',function(event){
    event.preventDefault;
    var melee = cadastraItem(meleeInput);
    if (melee=="Skil Axe"){
        var disableLi = document.querySelector("#imbui-skil-axe");
        disableLi.classList.remove("invisivel")
    }
})
var capaceteInput = document.querySelector("#i-capacete")
capaceteInput.addEventListener('input', function(){
    var capa = cadastraItem(capaceteInput);
    if (capa=="Skil Axe"){
        var disableLi = document.querySelector("#imbui-skil-axe");
        disableLi.classList.remove("invisivel")
    }
})

var tierImbui = document.querySelector("#imbui-skil-axe");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totaxe").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-skilaxe").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-axe");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-axe");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-axe");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-axe");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-axe");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-axe");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-axe");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-axe");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-axe");
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
var botaoCacl = document.querySelector("#btn-axe");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-skilaxe").value;
   var res = tierImbuimenteAxe(checkTier);
   document.querySelector("#totaxe").innerHTML = res;
})
function tierImbuimenteAxe(tier){
    var nvOne = document.querySelector("#iorc").value;
    var nvTwo = document.querySelector("#ibattlestone").value;
    var nvTri = document.querySelector("#imoohtant").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*20)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*25)+(parseInt(nvOne)*20)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*20)+(parseInt(nvTwo)*25)+(parseInt(nvOne)*20)+150000; return retorno}

}
