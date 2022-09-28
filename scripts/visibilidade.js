var equipImbui = document.querySelector("#i-item");

equipImbui.addEventListener('input',function(event){
    event.preventDefault();
    var item = cadastraItem(equipImbui);
    if (item=="Espada" || item=="Clava" || item=="Axe"){
        var disableMe = document.querySelector("#imbui-melee");
        disableMe.classList.remove("invisivel");
    };
    if (item=="Cajado"){
        var disableCa = document.querySelector("#imbui-cajado");
        disableCa.classList.remove("invisivel");
    };
    if (item=="Arco/Besta"){
        var disableDis = document.querySelector("#imbui-distancia");
        disableDis.classList.remove("invisivel");
    };
    if (item=="Capacete"){
        var disableCapa = document.querySelector("#imbui-capacete");
        disableCapa.classList.remove("invisivel");
    };
    if (item=="Bota"){
        var disableBo = document.querySelector("#imbui-bota");
        disableBo.classList.remove("invisivel");
    };
    if (item=="Armadura"){
        var disableAr = document.querySelector("#imbui-armadura");
        disableAr.classList.remove("invisivel");
    };
    if (item=="Escudo"){
        var disableEs = document.querySelector("#imbui-escudo");
        disableEs.classList.remove("invisivel");
    };
    if (item=="Backpack"){
        var disableBa = document.querySelector("#imbui-backpack");
        disableBa.classList.remove("invisivel");
    };
    if (item==""){
        var disableAll = document.querySelector("#imbui-cajado");
        disableAll.classList.add("invisivel");
        var disableAll = document.querySelector("#imbui-melee");
        disableAll.classList.add("invisivel");
        var disableAll = document.querySelector("#imbui-distancia");
        disableAll.classList.add("invisivel");
        var disableAll = document.querySelector("#imbui-capacete");
        disableAll.classList.add("invisivel");
        var disableAll = document.querySelector("#imbui-bota");
        disableAll.classList.add("invisivel");
        var disableAll = document.querySelector("#imbui-armadura");
        disableAll.classList.add("invisivel");
        var disableAll = document.querySelector("#imbui-escudo");
        disableAll.classList.add("invisivel");
        var disableAll = document.querySelector("#imbui-backpack");
        disableAll.classList.add("invisivel");
    }
})

var slots = document.querySelector("#i-slot");
slots.addEventListener('input',function(event){
    event.preventDefault();
    var slot = cadastraItem(slots);
    console.log(slot)
    if (slot=="1 Slot"){console.log("slot um")}
    if (slot=="2 Slots"){console.log("slot dois")}
    if (slot=="3 Slots"){console.log("slot tres")}
})

function cadastraItem(valor){
    var selecionado = valor.value;
    return selecionado;
}
var btnReload = document.querySelector("#refresh");
btnReload.addEventListener('click', function(event){
    event.preventDefault();
})
    

