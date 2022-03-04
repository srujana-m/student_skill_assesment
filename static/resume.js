function addNewprfield(){
    // console.log("adding new field");

    let newNode=document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("prfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');
    let prOb = document.getElementById("pr");
    let prAddButtonOb=document.getElementById("prAddButton");

    prOb.insertBefore(newNode,prAddButtonOb);
}
 
function addNewacfield(){
    // console.log("adding new field");

    let newNode=document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("acfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');
    let acOb = document.getElementById("ac");
    let acAddButtonOb=document.getElementById("acAddButton");

    acOb.insertBefore(newNode,acAddButtonOb);
}
 
function addNewcrfield(){
    // console.log("adding new field");

    let newNode=document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("crfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');
    let crOb = document.getElementById("cr");
    let crAddButtonOb=document.getElementById("crAddButton");

    crOb.insertBefore(newNode,crAddButtonOb);
}

function addNewskfield(){

    let newNode=document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("skfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');
    
    let skOb = document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");

    skOb.insertBefore(newNode,skAddButtonOb);



}
function addNewshbfield(){

    let newNode=document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("hbfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder','Enter here');
    
    let hbOb = document.getElementById("hb");
    let hbAddButtonOb=document.getElementById("hbAddButton");

    hbOb.insertBefore(newNode,hbAddButtonOb);

}

function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");

    nameT.innerHTML=nameField;

 document.getElementById("mailT").innerHTML=document.getElementById("mailField").value;
 document.getElementById("numberT").innerHTML=document.getElementById("numberField").value;
    document.getElementById("dobT").innerHTML=document.getElementById("birthField").value;
    document.getElementById("place").innerHTML=document.getElementById("placeField").value;
    document.getElementById("collegeT").innerHTML=document.getElementById("collegeField").value;

    document.getElementById("degreeT").innerHTML=document.getElementById("degreeField").value;

    document.getElementById("yearT").innerHTML=document.getElementById("graduationField").value;
    document.getElementById("nameT2").innerHTML=document.getElementById("nameField").value;
    document.getElementById("git").innerHTML=document.getElementById("githubField").value;
    document.getElementById("linked").innerHTML=document.getElementById("linkedinField").value;
 document.getElementById("aboutT").innerHTML=document.getElementById("aboutfield").value;


    let prs=document.getElementsByClassName("prfield");

    let str="";

    for (let e of prs){
        str=str+`<li> ${e.value} </li>`;

    }

    document.getElementById("projectT").innerHTML=str;

    let sks=document.getElementsByClassName("skfield");

    let str1="";

    for (let e of sks){
        str1=str1+`<li> ${e.value} </li>`;

    }

    document.getElementById("skillsT").innerHTML=str1;

    let c=document.getElementsByClassName("crfield");
    let str2="";
    for(let p of c){
        str2=str2+`<li>${p.value}</li>`;
    }
    document.getElementById("cert").innerHTML=str2;


    let d=document.getElementsByClassName("acfield");
    let str3="";
    for(let v of d){
        str3=str3+`<li>${v.value}</li>`;
    }
    document.getElementById("add").innerHTML=str3;

    let b=document.getElementsByClassName("hbfield");
    let str4="";
    for(let k of b){
        str4=str4+`<li>${k.value}</li>`;
    }
    document.getElementById("hob").innerHTML=str4;


    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block'
    
}

// // document.getElementById('generateCV').addEventListener('click',function(){
// //     document.getElementById('cv-form').style.display='none';
// //     document.getElementById('cv-template').style.display='flex';
// // });

function printCV(){

    window.print();
}

