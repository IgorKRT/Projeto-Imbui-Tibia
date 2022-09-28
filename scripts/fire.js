arcoInput.addEventListener('input', function(event){
    event.preventDefault;
    var arco = cadastraItem(arcoInput);
    if (arco=="Dano Fire"){
        var disableLi = document.querySelector("#imbui-fire");
        disableLi.classList.remove("invisivel");
    }
})
var meleeInput = document.querySelector("#i-melee");
meleeInput.addEventListener('input',function(event){
    event.preventDefault;
    var melee = cadastraItem(meleeInput);
    if (melee=="Dano Fire"){
        var disableLi = document.querySelector("#imbui-fire");
        disableLi.classList.remove("invisivel")
    }
})
var tierImbui = document.querySelector("#imbui-fire");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totfire").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-fire").value; 
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-fire");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-fire");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-fire");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-fire");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-fire");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-fire");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-fire");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-fire");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-fire");
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
var botaoCacl = document.querySelector("#btn-fire");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-fire").value;
   var res = tierImbuimentefire(checkTier);
   document.querySelector("#totfire").innerHTML = res;
})
function tierImbuimentefire(tier){
    var nvOne = document.querySelector("#ifiery").value;
    var nvTwo = document.querySelector("#igreendragonscale").value;
    var nvTri = document.querySelector("#idemonhorn").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*25)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*5)+(parseInt(nvOne)*25)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*2)+(parseInt(nvTwo)*5)+(parseInt(nvOne)*25)+150000; return retorno}

}
