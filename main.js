var darkmodebtn = document.getElementById("darkmode")
var mytable = document.getElementById("mytablele")
var mybody = document.getElementById("body")
var referen = document.getElementById("refer")
var designa = document.getElementById("des")
var myprice = document.getElementById("prix")
var myquantity = document.getElementById("quantite")
var mytva = document.getElementById("tva")
var myerrornotif = document.getElementById("errnotiff")
var mysuccnotif = document.getElementById("succnotiff")
var errorsuccestext = document.getElementById("textalert")



darkmodebtn.addEventListener("click",() =>{
    document.body.classList.toggle("dark")
    darkmodebtn.classList.toggle("darktoggle")
})


var myarray = [{fruit:"Pomme",ref:"R1",},{fruit :"Banane",ref :"R2"},{fruit :"Kiwi",ref :"R3"},{fruit :"Orange",ref :"R4"}]    

function searchrefer(){
    for(let i = 0 ;i < myarray.length;i++){
        if(referen.value == myarray[i].ref){
            designa.value = myarray[i].fruit;
            designa.style.color = "green";
            designa.style.border = "1px solid green"

            break;
        }else if(referen.value == ""){
            designa.value = "";
            designa.style.border = "1px solid black"
        }else{
            designa.value = "Not Defined";
            designa.style.color = "red";
            designa.style.border = "1px solid red"

        }
    }
}


function Addtotable(){
    event.preventDefault()
    if(referen.value != "" && designa.value != "" && myprice.value != "" && myquantity.value != "" && mytva.value != "" ){
        if(designa.value != "Not Defined"){
            let total = ((myprice.value * myquantity.value) - (mytva.value / 100))
            mytable.innerHTML +=`<tr>
            <td>${referen.value}</td>
            <td>${designa.value}</td>
            <td>${myprice.value}</td>
            <td>${myquantity.value}</td>
            <td>${mytva.value}</td>
            <td>${total.toFixed(2)}</td>
            </tr>`
            
            mysuccnotif.style.display = "block"
            setTimeout(function(){
                mysuccnotif.style.display = "none"
            },2000)
        }else{
            myerrornotif.style.display = "block"
            errorsuccestext.innerHTML = "Designation Not defined"
            setTimeout(function(){
                myerrornotif.style.display = "none"
            },2000)
        }
        let allinput = document.getElementsByTagName("input")
        console.log(allinput)
        for(i=0;i<allinput.length;i++){
            allinput[i].value = ""
            mytva.value = "0"
            designa.style.border = "none"
        }
}else{
    myerrornotif.style.display = "block"
    setTimeout(function(){
        myerrornotif.style.display = "none"
    },2000)
}}

