var escudoInput = document.querySelector("#i-escudo");
escudoInput.addEventListener('input', function(){
    var escu = cadastraItem(escudoInput);
    if (escu=="Proteção a Death"){
        var disableLi = document.querySelector("#imbui-resdeath");
        disableLi.classList.remove("invisivel")
    }
})
var armaduraInput = document.querySelector("#i-armadura");
armaduraInput.addEventListener('input', function(event){
    event.preventDefault;
    var armadura = cadastraItem(armaduraInput);
    if (armadura=="Proteção a Death"){
        var disableLi = document.querySelector("#imbui-resdeath");
        disableLi.classList.remove("invisivel");
    }
})

var tierImbui = document.querySelector("#imbui-resdeath");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totresdeath").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-resdeath").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-resdeath");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-resdeath");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-resdeath");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-resdeath");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-resdeath");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-resdeath");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-resdeath");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-resdeath");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-resdeath");
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
var botaoCacl = document.querySelector("#btn-resdeath");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-resdeath").value;
   var res = tierImbuimenteResDeath(checkTier);
   document.querySelector("#totresdeath").innerHTML = res;
})
function tierImbuimenteResDeath(tier){
    var nvOne = document.querySelector("#iflask").value;
    var nvTwo = document.querySelector("#igloomwolf").value;
    var nvTri = document.querySelector("#imystical").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*25)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*20)+(parseInt(nvOne)*25)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*5)+(parseInt(nvTwo)*20)+(parseInt(nvOne)*25)+150000; return retorno}

}
