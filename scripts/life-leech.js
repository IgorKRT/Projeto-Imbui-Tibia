var meleeInput = document.querySelector("#i-melee");
meleeInput.addEventListener('input',function(event){
    event.preventDefault;
    var melee = cadastraItem(meleeInput);
    if (melee=="Life Leech"){
        var disableLi = document.querySelector("#imbui-life-leech");
        disableLi.classList.remove("invisivel")
    }
})
var tierImbui = document.querySelector("#imbui-life-leech");
tierImbui.addEventListener('input', function(event){
    event.preventDefault;
    document.querySelector("#totvalor").innerHTML ="";
    var checkTier = document.querySelector("#i-tier").value;
    if (checkTier=="Basic"){
        var disableVn1 = document.querySelector("#vn1");
        disableVn1.classList.remove("invisivel")
    }
    if (checkTier=="Intricate"){
        var disableVn1 = document.querySelector("#vn1");
        disableVn1.classList.remove("invisivel")
        var disableVn2 = document.querySelector("#vn2")
        disableVn2.classList.remove("invisivel")
    }
   if (checkTier=="Powerful"){        
        var disableVn1 = document.querySelector("#vn1");
        disableVn1.classList.remove("invisivel")
        var disableVn2 = document.querySelector("#vn2")
        disableVn2.classList.remove("invisivel")
        var disableVn3 = document.querySelector("#vn3")
        disableVn3.classList.remove("invisivel")
   }
   if (checkTier==""){
        var disableVn1 = document.querySelector("#vn1");
        disableVn1.classList.add("invisivel")
        var disableVn2 = document.querySelector("#vn2")
        disableVn2.classList.add("invisivel")
        var disableVn3 = document.querySelector("#vn3")
        disableVn3.classList.add("invisivel")
   }
})

var botaoCacl = document.querySelector("#btn-life");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var checkTier = document.querySelector("#i-tier").value;
   var res = tierImbuimente(checkTier);
   document.querySelector("#totvalor").innerHTML = res;
})
function inputPreco(nvImbui){
   nvImbui.addEventListener('input', function(){
      var valor = nvImbui.value;
      return valor;
   })
}
function tierImbuimente(tier){
    var nvOne = document.querySelector("#ivampire").value;
    var nvTwo = document.querySelector("#ibloody").value;
    var nvTri = document.querySelector("#ideadbrain").value;
 
    if(tier=="Basic"){var retorno = (parseInt(nvOne)*25)+15000; return retorno}
    if(tier=="Intricate"){var retorno = (parseInt(nvTwo)*15)+(parseInt(nvOne)*25)+55000; return retorno}
    if(tier=="Powerful"){var retorno = (parseInt(nvTri)*5)+(parseInt(nvTwo)*15)+(parseInt(nvOne)*25)+150000; return retorno}

}