arcoInput.addEventListener('input', function(event){
    event.preventDefault;
    var arco = cadastraItem(arcoInput);
    if (arco=="Dano Energy"){
        var disableLi = document.querySelector("#imbui-energy");
        disableLi.classList.remove("invisivel");
    }
})
var meleeInput = document.querySelector("#i-melee");
meleeInput.addEventListener('input',function(event){
    event.preventDefault;
    var melee = cadastraItem(meleeInput);
    if (melee=="Dano Energy"){
        var disableLi = document.querySelector("#imbui-energy");
        disableLi.classList.remove("invisivel")
    }
})
var tierImbui = document.querySelector("#imbui-energy");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totenergy").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-energy").value; 
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-energy");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-energy");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-energy");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-energy");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-energy");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-energy");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-energy");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-energy");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-energy");
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
var botaoCacl = document.querySelector("#btn-energy");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-energy").value;
   var res = tierImbuimenteenergy(checkTier);
   document.querySelector("#totenergy").innerHTML = res;
})
function tierImbuimenteenergy(tier){
    var nvOne = document.querySelector("#irorcfeather").value;
    var nvTwo = document.querySelector("#ipeacock").value;
    var nvTri = document.querySelector("#ienergyvein").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*25)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*5)+(parseInt(nvOne)*25)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*1)+(parseInt(nvTwo)*5)+(parseInt(nvOne)*25)+150000; return retorno}

}
