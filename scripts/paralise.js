var botaInput = document.querySelector("#i-botas");
botaInput.addEventListener('input',function(event){
    event.preventDefault;
    var botas = cadastraItem(botaInput);
    if (botas=="Remoção de Paralise"){
        var disableLi = document.querySelector("#imbui-bota");
        disableLi.classList.remove("invisivel")
    }
})

var tierImbui = document.querySelector("#imbui-bota");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totbota").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-bota").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-bota");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-bota");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-bota");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-bota");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-bota");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-bota");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-bota");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-bota");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-bota");
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
var botaoCacl = document.querySelector("#btn-bota");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-bota").value;
   var res = tierImbuimentebota(checkTier);
   document.querySelector("#totbota").innerHTML = res;
})
function tierImbuimentebota(tier){
    var nvOne = document.querySelector("#iwereboar").value;
    var nvTwo = document.querySelector("#ianger").value;
    var nvTri = document.querySelector("#iquill").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*20)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*15)+(parseInt(nvOne)*20)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*5)+(parseInt(nvTwo)*15)+(parseInt(nvOne)*20)+150000; return retorno}
}
