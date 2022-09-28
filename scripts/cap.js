var capaciInput = document.querySelector("#i-backpack");
capaciInput.addEventListener('input',function(event){
    event.preventDefault;
    var capaci = cadastraItem(capaciInput);
    if (capaci=="Aumento de Capacidade"){
        var disableLi = document.querySelector("#imbui-cap");
        disableLi.classList.remove("invisivel")
    }
})

var tierImbui = document.querySelector("#imbui-cap");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totcap").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-cap").value;
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-cap");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-cap");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-cap");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-cap");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-cap");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-cap");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-cap");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-cap");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-cap");
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
var botaoCacl = document.querySelector("#btn-cap");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-cap").value;
   var res = tierImbuimentecap(checkTier);
   document.querySelector("#totcap").innerHTML = res;
})
function tierImbuimentecap(tier){
    var nvOne = document.querySelector("#ifairywing").value;
    var nvTwo = document.querySelector("#ibowl").value;
    var nvTri = document.querySelector("#igoosebump").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*20)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*10)+(parseInt(nvOne)*20)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*5)+(parseInt(nvTwo)*10)+(parseInt(nvOne)*20)+150000; return retorno}
}
