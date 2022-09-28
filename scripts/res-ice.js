var escudoInput = document.querySelector("#i-escudo");
escudoInput.addEventListener('input', function(){
    var escu = cadastraItem(escudoInput);
    if (escu=="Proteção a Ice"){
        var disableLi = document.querySelector("#imbui-resice");
        disableLi.classList.remove("invisivel")
    }
})
var armaduraInput = document.querySelector("#i-armadura");
armaduraInput.addEventListener('input', function(event){
    event.preventDefault;
    var armadura = cadastraItem(armaduraInput);
    if (armadura=="Proteção a Ice"){
        var disableLi = document.querySelector("#imbui-resice");
        disableLi.classList.remove("invisivel");
    }
})

var tierImbui = document.querySelector("#imbui-resice");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totresice").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-resice").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-resice");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-resice");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-resice");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-resice");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-resice");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-resice");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-resice");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-resice");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-resice");
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
var botaoCacl = document.querySelector("#btn-resice");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-resice").value;
   var res = tierImbuimenteResIce(checkTier);
   document.querySelector("#totresice").innerHTML = res;
})
function tierImbuimenteResIce(tier){
    var nvOne = document.querySelector("#iwinterwolf").value;
    var nvTwo = document.querySelector("#ithickfur").value;
    var nvTri = document.querySelector("#ideeplingwarts").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*25)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*15)+(parseInt(nvOne)*25)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*10)+(parseInt(nvTwo)*15)+(parseInt(nvOne)*25)+150000; return retorno}

}
