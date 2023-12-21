var darkmodebtn = document.getElementById("darkmode")
var mytable = document.getElementById("mytablele")
var mybody = document.getElementById("body")
var referen = document.getElementById("refer")
var designa = document.getElementById("des")
var myprice = document.getElementById("prix")
var myquantity = document.getElementById("quantite")
var mytva = document.getElementById("tva")


darkmodebtn.addEventListener("click",(mode) =>{
    document.body.classList.toggle("dark")
    darkmodebtn.classList.toggle("darktoggle")
})




var myarray = [{fruit:"pomme",ref:"R1",},{fruit :"Banane",ref :"R2"},{fruit :"Kiwi",ref :"R3"},{fruit :"Orange",ref :"R4"}]    

function searchrefer(){
    for(let i = 0 ;i < myarray.length;i++){
        if(referen.value == myarray[i].ref){
            designa.value = myarray[i].fruit;
            designa.style.color = "black";
            break;
        }else{
            designa.value = "Not Defined";
            designa.style.color = "red";
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
            <td>${total.toFixed(2)} DH</td>
            </tr>`
        }else{
            alert("designation not defined")
        }
}else{
    alert("3emer")
}}