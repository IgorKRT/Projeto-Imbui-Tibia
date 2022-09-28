var capaceteInput = document.querySelector("#i-capacete");
capaceteInput.addEventListener('input', function(){
    var capa = cadastraItem(capaceteInput);
    if (capa=="Skil Shielding"){
        var disableLi = document.querySelector("#imbui-skil-escudo");
        disableLi.classList.remove("invisivel")
    }
})
var escudoInput = document.querySelector("#i-escudo");
escudoInput.addEventListener('input', function(){
    var escu = cadastraItem(escudoInput);
    if (escu=="Skil Shielding"){
        var disableLi = document.querySelector("#imbui-skil-escudo");
        disableLi.classList.remove("invisivel")
    }
})

var tierImbui = document.querySelector("#imbui-skil-escudo");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totescudo").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-skilescudo").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-escudo");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-escudo");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-escudo");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-escudo");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-escudo");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-escudo");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-escudo");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-escudo");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-escudo");
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
var botaoCacl = document.querySelector("#btn-escudo");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-skilescudo").value;
   var res = tierImbuimenteEscudo(checkTier);
   document.querySelector("#totescudo").innerHTML = res;
})
function tierImbuimenteEscudo(tier){
    var nvOne = document.querySelector("#iscarab").value;
    var nvTwo = document.querySelector("#ibrimstone").value;
    var nvTri = document.querySelector("#ifrazzle").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*20)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*25)+(parseInt(nvOne)*20)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*25)+(parseInt(nvTwo)*25)+(parseInt(nvOne)*20)+150000; return retorno}

}

