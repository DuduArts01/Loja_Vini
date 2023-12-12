let name_store = document.getElementById("name__input")
let account = document.getElementById("account")
let zip_code = document.getElementById("zip-code")
let address = document.getElementById("address")
let establishment_number = document.getElementById("establishment_number")
let state = document.getElementById("state")
let city = document.getElementById("city")
let neighborhood = document.querySelector("#neighborhood")


zip_code.value = "01001000"
zip_code.addEventListener("blur", function(e){
    let zip_code = e.target.value
    let script = document.createElement("script")
    script.src = "https://viacep.com.br/ws/"+zip_code+"/json/?callback=popularForm"
    document.body.appendChild(script)
})

function popularForm(res){
    if("erro" in res){
        alert("CEP não encontrado!")
        return
    }

    address.value = res.logradouro
    neighborhood.value = res.bairro
    city.value = res.localidade
    state.value = res.uf
}

function clickContinueBuy(){
    if((name_store.value.length != "") && (account.value.length != "") && (zip_code.value.length != "") && (address.value.length != "") && (establishment_number.value.length != "") && (state.value.length != "") && (state.value.length != "") && (city.value.length != "")){
        if(sign_up_person.style.display == "block"){
            sign_up_person.style.display = "none";
            sign_up_store.style.display = "block";
        } else{
            sign_up_person.style.display = "block";
            sign_up_store.style.display = "none";
        }
    } else {
        alert("Complete as Inforções abaixo para continuar!")
    }
    
}

