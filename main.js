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
var errortext = document.getElementById("textalert")
var succestext = document.getElementById("textalertSUC")
var newitem = document.getElementById("NewReference")
var closeitem = document.querySelectorAll(".closerefe")
var facimg = document.getElementById("facturimg")
var Notifplace = document.getElementById("NotifBox")
var printask = document.getElementById("PrintFunc")
var listdrefer = document.getElementById("listdrefer")
let refplace = document.getElementById("refplace")
let desplae = document.getElementById("desplae")
var mythememode = document.getElementById("mode")
var allmybtn = document.getElementsByTagName("button")
var allmyinp = document.getElementsByTagName("input")


var myarray = [
    {
        fruit:"",
        ref:""
    }
]
loadstorage();    

// darkmodebtn.addEventListener("click",() =>{
//     document.body.classList.toggle("dark")
//     darkmodebtn.classList.toggle("darktoggle")
//     if (facimg.src.includes('file-invoice-solid.svg')) {
//         facimg.src = 'file-invoice-dollar-solid.svg';
//     } else{
//         facimg.src = 'file-invoice-solid.svg';
//     }
// })

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
             let savetable = mytable.innerHTML +=`<tr>
            <td>${referen.value}</td>
            <td>${designa.value}</td>
            <td>${myprice.value}</td>
            <td>${myquantity.value}</td>
            <td>${mytva.value}</td>
            <td>${total.toFixed(2)}</td>
            </tr>`
            Succesmsg("Added Succefully to the table ");
            localStorage.setItem('mytable', JSON.stringify(savetable));
        }else{
            Errormsg("Designation Not Defined")
        }
        let allinput = document.getElementsByTagName("input")
        console.log(allinput)
        for(i=0;i<allinput.length;i++){
            allinput[i].value = ""
            mytva.value = "0"
            designa.style.border = "none"
        }
    }else{
        Errormsg("Inputs Are Empty !!")
    }
}

function AddNEWref(){
    event.preventDefault()
    newitem.style.display = "flex"
}
function addref(){
    event.preventDefault()
    let ref = document.getElementById("newref").value;
    let refvalue = document.getElementById("newdesi").value;
    if (ref !== "" && refvalue !== "") {
        let Exist = false;
        for (let i = 0; i < myarray.length; i++) {
            if (myarray[i].ref === ref || myarray[i].fruit === refvalue) {
                Exist = true;
                break;
            }
        }
            if(!Exist) {
                myarray.push({ fruit: refvalue, ref: ref });
                localStorage.setItem('myArray', JSON.stringify(myarray));
                Succesmsg("Reference Added Successfully");
            }else{
                Errormsg("Designation or Reference already Exist");
            }
        }else{
        Errormsg("Designation or Reference Empty");
    }
    console.log(myarray)
}

closeitem.forEach((item)=>{
    item.addEventListener("click",()=>{
        item.parentElement.parentElement.style.display = "none";
    })
})



function Errormsg(msg){
    let nf = document.createElement('div')
    nf.classList.add('NotifError')
    nf.innerHTML = msg
    Notifplace.appendChild(nf)
    setTimeout(()=>{
        nf.remove();
    },4000)
}
function Succesmsg(msg){
    let nf = document.createElement('div')
    nf.classList.add('NotifSuccess')
    nf.innerHTML = msg
    Notifplace.appendChild(nf)
    setTimeout(()=>{
        nf.remove();
    },4000)
}

function loadstorage() {
    var savedArray = JSON.parse(localStorage.getItem('myArray'));
    if (savedArray) {
        myarray = savedArray; 
    }
}
function showprintask(){
    event.preventDefault()

    printask.style.display = "flex"
}

function ClearAllT(){
    event.preventDefault()
    localStorage.removeItem('mytable')
    Succesmsg("Table Cleared")
    setTimeout(()=>{
        location.reload();
    },1000)
}

function liste(){
    event.preventDefault()
    listdrefer.style.display = "flex"
    for(let i = 1 ; i<=myarray.length ; i++){
        let h55 = document.createElement('h5')
        let h555 = document.createElement('h5')
        h55.innerHTML = myarray[i].ref
        h555.innerHTML = myarray[i].fruit
        refplace.appendChild(h55)
        desplae.appendChild(h555)
    }
}

function mytheme(){
    if(mythememode.value == "dark"){
        console.log("ayeh dark")
        document.body.classList.toggle("dark")
        document.body.classList.remove("t3")
        document.body.classList.remove("midnight")
        document.body.classList.remove("cloud")

        for (let i = 0; i < allmybtn.length; i++) {
            allmybtn[i].classList.remove("crismone")
        }
        facimg.src = 'file-invoice-dollar-solid.svg'
        for (let i = 0; i < allmyinp.length; i++) {
            allmyinp[i].classList.remove("inputcrismone")
        }

    }else if(mythememode.value == "t3"){
        document.body.classList.toggle("t3")
        document.body.classList.remove("dark")
        document.body.classList.remove("midnight")
        document.body.classList.remove("cloud")

        facimg.src = 'file-invoice-dollar-solid.svg'
        for (let i = 0; i < allmybtn.length; i++) {
            allmybtn[i].classList.add("crismone")
        }
        for (let i = 0; i < allmyinp.length; i++) {
            allmyinp[i].classList.add("inputcrismone")
        }
    }else if(mythememode.value == "midnight"){
        document.body.classList.toggle("midnight")
        document.body.classList.remove("dark")
        document.body.classList.remove("t3")
        document.body.classList.remove("cloud")

        facimg.src = 'file-invoice-dollar-solid.svg'
        for (let i = 0; i < allmybtn.length; i++) {
            allmybtn[i].classList.add("crismone")
        }
        for (let i = 0; i < allmyinp.length; i++) {
            allmyinp[i].classList.add("inputcrismone")
        }
    }else if(mythememode.value == "white"){
        document.body.classList.remove("dark")
        document.body.classList.remove("t3")
        document.body.classList.remove("midnight")
        document.body.classList.remove("cloud")

        for (let i = 0; i < allmybtn.length; i++) {
            allmybtn[i].classList.remove("crismone")
        }
        facimg.src = 'file-invoice-solid.svg'
        for (let i = 0; i < allmyinp.length; i++) {
            allmyinp[i].classList.remove("inputcrismone")
        }
    }else if(mythememode.value == "cloudy"){
        document.body.classList.toggle("cloud")
        document.body.classList.remove("dark")
        document.body.classList.remove("t3")
        document.body.classList.remove("midnight")

        facimg.src = 'file-invoice-dollar-solid.svg'
        for (let i = 0; i < allmybtn.length; i++) {
            allmybtn[i].classList.add("crismone")
        }
        for (let i = 0; i < allmyinp.length; i++) {
            allmyinp[i].classList.add("inputcrismone")
        }
    }else{
        Errormsg("Nothing")
    }
}
mytable.innerHTML = JSON.parse(localStorage.getItem('mytable'))

