var meleeInput = document.querySelector("#i-melee");
meleeInput.addEventListener('input',function(event){
    event.preventDefault;
    var melee = cadastraItem(meleeInput);
    if (melee=="Critical Hit"){
        var disableLi = document.querySelector("#imbui-critical");
        disableLi.classList.remove("invisivel")
    }
})
var arcoInput = document.querySelector("#i-distancia");
arcoInput.addEventListener('input', function(event){
    event.preventDefault;
    var arco = cadastraItem(arcoInput);
    if (arco=="Critical Hit"){
        var disableLi = document.querySelector("#imbui-critical");
        disableLi.classList.remove("invisivel");
    }
})
var cajadoInput = document.querySelector("#i-cajado");
cajadoInput.addEventListener('input', function(event){
    event.preventDefault;
    var cajados = cadastraItem(cajadoInput);
    if (cajados=="Critical Hit"){
        var disableLi = document.querySelector("#imbui-critical");
        disableLi.classList.remove("invisivel");
    }
})
var tierImbui = document.querySelector("#imbui-critical");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totcritical").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-critical").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-critical");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-critical");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-critical");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-critical");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-critical");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-critical");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-critical");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-critical");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-critical");
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
var botaoCacl = document.querySelector("#btn-critical");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-critical").value;
   var res = tierImbuimenteCritical(checkTier);
   document.querySelector("#totcritical").innerHTML = res;
})
function tierImbuimenteCritical(tier){
    var nvOne = document.querySelector("#icharm").value;
    var nvTwo = document.querySelector("#isabretooth").value;
    var nvTri = document.querySelector("#ivexclaw").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*20)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*25)+(parseInt(nvOne)*20)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*5)+(parseInt(nvTwo)*25)+(parseInt(nvOne)*20)+150000; return retorno}
}
