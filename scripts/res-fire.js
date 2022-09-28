var escudoInput = document.querySelector("#i-escudo");
escudoInput.addEventListener('input', function(){
    var escu = cadastraItem(escudoInput);
    if (escu=="Proteção a Fire"){
        var disableLi = document.querySelector("#imbui-resfire");
        disableLi.classList.remove("invisivel")
    }
})
var armaduraInput = document.querySelector("#i-armadura");
armaduraInput.addEventListener('input', function(event){
    event.preventDefault;
    var armadura = cadastraItem(armaduraInput);
    if (armadura=="Proteção a Fire"){
        var disableLi = document.querySelector("#imbui-resfire");
        disableLi.classList.remove("invisivel");
    }
})

var tierImbui = document.querySelector("#imbui-resfire");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totresfire").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-resfire").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-resfire");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-resfire");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-resfire");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-resfire");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-resfire");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-resfire");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-resfire");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-resfire");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-resfire");
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
var botaoCacl = document.querySelector("#btn-resfire");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-resfire").value;
   var res = tierImbuimenteResFire(checkTier);
   document.querySelector("#totresfire").innerHTML = res;
})
function tierImbuimenteResFire(tier){
    var nvOne = document.querySelector("#idragonleather").value;
    var nvTwo = document.querySelector("#iblazing").value;
    var nvTri = document.querySelector("#idraken").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*20)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*10)+(parseInt(nvOne)*20)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*5)+(parseInt(nvTwo)*10)+(parseInt(nvOne)*20)+150000; return retorno}

}
