var capaceteInput = document.querySelector("#i-capacete")
capaceteInput.addEventListener('input', function(){
    var capa = cadastraItem(capaceteInput);
    if (capa=="Skil Distance"){
        var disableLi = document.querySelector("#imbui-skil-distancia");
        disableLi.classList.remove("invisivel")
    }
})
var arcoInput = document.querySelector("#i-distancia");
arcoInput.addEventListener('input', function(event){
    event.preventDefault;
    var arco = cadastraItem(arcoInput);
    if (arco=="Skil Distance"){
        var disableLi = document.querySelector("#imbui-skil-distancia");
        disableLi.classList.remove("invisivel");
    }
})
var tierImbui = document.querySelector("#imbui-skil-distancia");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totvalor").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-skildistancia").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-distancia");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-distancia");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-distancia");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-distancia");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-distancia");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-distancia");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-distancia");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-distancia");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-distancia");
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
   var checkTier = document.querySelector("#i-tier-skildistancia").value;
   var res = tierImbuimenteClava(checkTier);
   document.querySelector("#totvalor").innerHTML = res;
})
function tierImbuimenteClava(tier){
    var nvOne = document.querySelector("#ielven").value;
    var nvTwo = document.querySelector("#ielvenhoof").value;
    var nvTri = document.querySelector("#imetalspike").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*25)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*20)+(parseInt(nvOne)*25)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*10)+(parseInt(nvTwo)*20)+(parseInt(nvOne)*25)+150000; return retorno}

}

