var escudoInput = document.querySelector("#i-escudo");
escudoInput.addEventListener('input', function(){
    var escu = cadastraItem(escudoInput);
    if (escu=="Proteção a Holy"){
        var disableLi = document.querySelector("#imbui-resholy");
        disableLi.classList.remove("invisivel")
    }
})
var armaduraInput = document.querySelector("#i-armadura");
armaduraInput.addEventListener('input', function(event){
    event.preventDefault;
    var armadura = cadastraItem(armaduraInput);
    if (armadura=="Proteção a Holy"){
        var disableLi = document.querySelector("#imbui-resholy");
        disableLi.classList.remove("invisivel");
    }
})

var tierImbui = document.querySelector("#imbui-resholy");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totresholy").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-resholy").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-resholy");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-resholy");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-resholy");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-resholy");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-resholy");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-resholy");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-resholy");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-resholy");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-resholy");
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
var botaoCacl = document.querySelector("#btn-resholy");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-resholy").value;
   var res = tierImbuimenteResHoly(checkTier);
   document.querySelector("#totresholy").innerHTML = res;
})
function tierImbuimenteResHoly(tier){
    var nvOne = document.querySelector("#icultishrobe").value;
    var nvTwo = document.querySelector("#icultishmask").value;
    var nvTri = document.querySelector("#ihellspawn").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*25)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*25)+(parseInt(nvOne)*25)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*20)+(parseInt(nvTwo)*25)+(parseInt(nvOne)*25)+150000; return retorno}

}
