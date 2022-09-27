var cajadoInput = document.querySelector("#i-cajado");
cajadoInput.addEventListener('input', function(event){
    event.preventDefault;
    var cajados = cadastraItem(cajadoInput);
    if (cajados=="Skil Ml"){
        var disableLi = document.querySelector("#imbui-skil-magic");
        disableLi.classList.remove("invisivel");
    }
})

var tierImbui = document.querySelector("#imbui-skil-magic");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totvalor").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-skilmagic").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-magic");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-magic");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-magic");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-magic");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-magic");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-magic");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-magic");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-magic");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-magic");
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
   var checkTier = document.querySelector("#i-tier-skilmagic").value;
   var res = tierImbuimenteMagic(checkTier);
   document.querySelector("#totvalor").innerHTML = res;
})
function tierImbuimenteMagic(tier){
    var nvOne = document.querySelector("#ielvis").value;
    var nvTwo = document.querySelector("#ishamanic").value;
    var nvTri = document.querySelector("#imedusa").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*25)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*15)+(parseInt(nvOne)*25)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*15)+(parseInt(nvTwo)*15)+(parseInt(nvOne)*25)+150000; return retorno}

}

