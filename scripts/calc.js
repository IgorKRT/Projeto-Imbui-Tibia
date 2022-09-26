var botaoCacl = document.querySelector("#btnclc");
botaoCacl.addEventListener('click', function(event){
   event.preventDefault();
   var nvOne = document.querySelector("#ivampire").value;
   var nvTwo = document.querySelector("#ibloody").value;
   var nvTri = document.querySelector("#ideadbrain").value;
   var res = (parseInt(nvOne)*25)+(parseInt(nvTwo)*15)+(parseInt(nvTri)*5)+150;
   document.querySelector("#totvalor").innerHTML = res;
})
function inputPreco(nvImbui){
   nvImbui.addEventListener('input', function(){
      var valor = nvImbui.value;
      return valor;
   })
}