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
var closeitem = document.getElementById("closerefe")
var facimg = document.getElementById("facturimg")
var Notifplace = document.getElementById("NotifBox")
var myarray = [
    {
        fruit:"",
        ref:""
    }
]
loadArrayFromLocalStorage();    

darkmodebtn.addEventListener("click",() =>{
    document.body.classList.toggle("dark")
    darkmodebtn.classList.toggle("darktoggle")
    if (facimg.src.includes('file-invoice-solid.svg')) {
        facimg.src = 'file-invoice-dollar-solid.svg';
    } else{
        facimg.src = 'file-invoice-solid.svg';
    }
})

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
closeitem.addEventListener("click", ()=>{
    newitem.style.display = "none"
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
function loadArrayFromLocalStorage() {
    var savedArray = JSON.parse(localStorage.getItem('myArray'));
    if (savedArray) {
        myarray = savedArray; // Update myArray with the data from localStorage
    }
}

mytable.innerHTML = JSON.parse(localStorage.getItem('mytable'))
