arcoInput.addEventListener('input', function(event){
    event.preventDefault;
    var arco = cadastraItem(arcoInput);
    if (arco=="Dano Earth"){
        var disableLi = document.querySelector("#imbui-earth");
        disableLi.classList.remove("invisivel");
        var tatakae = document.querySelector("#principal");
        tatakae.classList.add("earth");   
    }
})
var meleeInput = document.querySelector("#i-melee");
meleeInput.addEventListener('input',function(event){
    event.preventDefault;
    var melee = cadastraItem(meleeInput);
    if (melee=="Dano Earth"){
        var disableLi = document.querySelector("#imbui-earth");
        disableLi.classList.remove("invisivel");
        var tatakae = document.querySelector("#principal");
        tatakae.classList.add("earth");
    }
})
var tierImbui = document.querySelector("#imbui-earth");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totearth").innerHTML ="";
    var checkTier = document.querySelector("#i-tier-earth").value; 
    var btn = document.querySelector("#botoes");
    btn.classList.remove("invisivel");
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1-earth");
        disableVn1.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-dois");
        disablegt.classList.remove("invisivel");
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1-earth");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-earth");
        disableVn2.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-quatro");
        disablegt.classList.remove("invisivel");
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1-earth");
        disableVn1.classList.remove("invisivel");
        var disableVn2 = document.querySelector("#vn2-earth");
        disableVn2.classList.remove("invisivel");
        var disableVn3 = document.querySelector("#vn3-earth");
        disableVn3.classList.remove("invisivel");
        var disablegt = document.querySelector("#gt-seis");
        disablegt.classList.remove("invisivel");
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1-earth");
        disableVn1.classList.add("invisivel");
        var disableVn2 = document.querySelector("#vn2-earth");
        disableVn2.classList.add("invisivel");
        var disableVn3 = document.querySelector("#vn3-earth");
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
var botaoCacl = document.querySelector("#btn-earth");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier-earth").value;
   var res = tierImbuimenteearth(checkTier);
   document.querySelector("#totearth").innerHTML = res;
})
function tierImbuimenteearth(tier){
    var nvOne = document.querySelector("#iswampgrass").value;
    var nvTwo = document.querySelector("#ipoisonousslime").value;
    var nvTri = document.querySelector("#islimeheart").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*25)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*20)+(parseInt(nvOne)*25)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*2)+(parseInt(nvTwo)*20)+(parseInt(nvOne)*25)+150000; return retorno}

}
