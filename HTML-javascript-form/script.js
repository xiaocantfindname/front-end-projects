function check(inputID,reg,spanID,errorInfo){
    var result;
    var inputObj = document.getElementById(inputID).value;
    var spanObj = document.getElementById(spanID);
    if(reg.test(inputObj)){
        spanObj.innerHTML = " ";
        result = true;
    } else {
        spanObj.innerHTML = errorInfo.fontcolor("red");
        result = false;
    }
    return result;
}

function checkfName(){
    reg = /[a-zA-Z]{2,}/;
    return check("firstName",reg,"fNameSpan","invalid name")
}
function checklName(){
    reg = /[a-zA-Z]{2,}/;
    return check("lastName",reg,"lNameSpan","invalid name")
}
function checkEmail(){
    reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return check("emailId",reg,"emailSpan","invalid email")
}
function checkPhone(){
    reg = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    return check("phoneNumber",reg,"phoneSpan","invalid phone number")
}
function checkZip(){
    reg = /^\d{5}(?:[-\s]\d{4})?$/;
    return check("zipcode",reg,"zipSpan","invalid zipcode")
}

function showOther(){
    var otherCheck = document.getElementById("other");
    var otherInput = document.getElementById("userinput");
    var spanObj = document.getElementById("otherSpan");
    if(otherCheck.checked){
        otherInput.style.display = "inline";
        checkOther();
    } else {
        otherInput.style.display = "none";
        spanObj.innerHTML = " ";
    }
}

function checkOther(){
    var otherInput = document.getElementById("userinput");
    var spanObj = document.getElementById("otherSpan");
    if(otherInput.value.length == 0){
        spanObj.innerHTML = "Please Write Your Choice".fontcolor("red");
        return false;
    }
    spanObj.innerHTML = " ";
    return true; 
}

function checkTitle(){
    var flag = 0;
    var title = document.getElementsByName("title");
    var spanObj = document.getElementById("titleSpan");
    for(i=0; i<title.length;i++){
        if(title[i].checked){
            flag = 1;
        }
    }
    if(flag == 0){
        spanObj.innerHTML = "Please Pick One Title".fontcolor("red");
        return false;
    }
    spanObj.innerHTML = " ";
    return true;   
}

function checkSource(){
    var flag = 0;
    var title = document.getElementsByName("source");
    var spanObj = document.getElementById("sourceSpan");
    for(i=0; i<title.length;i++){
        if(title[i].checked){
            flag = 1;
        }
    }
    if(flag == 0){
        spanObj.innerHTML = "Please Pick at Least One Source".fontcolor("red");
        return false;
    }
    spanObj.innerHTML = " ";
    return true;   
}

function checkComment(){
    var comments = document.getElementById("comments");
    var spanObj = document.getElementById("commentsSpan");
    if(comments.value.length == 0){
        spanObj.innerHTML = "Please Write Something".fontcolor("red");
        return false;
    }
    spanObj.innerHTML = " ";
    return true; 
}

function getTable(){
    var drink = document.getElementById("drink").value;
    var BT = document.getElementsByClassName("checkforBT")[0];
    var LA = document.getElementsByClassName("checkforLA")[0];
    var ref = document.getElementsByClassName("checkforref")[0];
    var mocha = document.getElementsByClassName("checkformocha")[0];
    var CA = document.getElementsByClassName("checkforCa")[0];
    if(drink == "Black Tea"){
        BT.style.display = "inline";
        LA.style.display = "none";
        ref.style.display = "none";
        mocha.style.display = "none";
        CA.style.display = "none";
    }
    if(drink == "Latte"){
        BT.style.display = "none";
        LA.style.display = "inline";
        ref.style.display = "none";
        mocha.style.display = "none";
        CA.style.display = "none";
    }
    if(drink == "refresher"){
        BT.style.display = "none";
        LA.style.display = "none";
        ref.style.display = "inline";
        mocha.style.display = "none";
        CA.style.display = "none";
    }
    if(drink == "mocha"){
        BT.style.display = "none";
        LA.style.display = "none";
        ref.style.display = "none";
        mocha.style.display = "inline";
        CA.style.display = "none";
    }
    if(drink == "cappuccino"){
        BT.style.display = "none";
        LA.style.display = "none";
        ref.style.display = "none";
        mocha.style.display = "none";
        CA.style.display = "inline";
    }
}

function beforeSubmit(){
    var result;
    result = checkEmail();
    result = checkPhone()&&result;
    result = checkZip() &&result;
    result = checkfName()&&result;
    result = checklName()&&result;
    result = checkTitle()&&result;
    result = checkSource()&&result;
    result = checkComment()&&result;
    var other = document.getElementById("other");
    if(other.checked){
        result = checkOther()&&result;
        other.value = document.getElementById("userinput").value;
    }
    return result;
}
function submitForm(){
    if(beforeSubmit()){
        conformation();
    } else {
        alert("Please Complete This Form");
        return false;
    }
}
function conformation(){
    console.log(true+false);
    var table = document.getElementById("showTable");
    var winWidth = document.documentElement.clientWidth;
    var winHeight = document.documentElement.clientHeight;
    var offsetTop = document.documentElement.offsetTop;
    var left = (winWidth-400)/2;
    var top = (winHeight-300)/2 + offsetTop;
    var title = document.getElementsByName("title");
    var tableName = document.getElementById("tableName");
    var name = document.getElementById("firstName").value+" "+document.getElementById("lastName").value;
    for(i=0;i<title.length;i++){
        if(title[i].checked){
            tableName.innerText = title[i].value + ',' + name;
        }
    }
    var tableEmail = document.getElementById("tableEmail");
    tableEmail.innerText = document.getElementById("emailId").value;
    var tablePhone = document.getElementById("tablePhone");
    tablePhone.innerText = document.getElementById("phoneNumber").value;
    var tableZip = document.getElementById("tableZip");
    tableZip.innerText = document.getElementById("zipcode").value;
    var tableDrinks = document.getElementById("tableDrinks");
    var drink = document.getElementById("drink").value;
    var drinkInfo = drink;
    var BT = document.getElementsByClassName("checkforBT")[0];
    var LA = document.getElementsByClassName("checkforLA")[0];
    var ref = document.getElementsByClassName("checkforref")[0];
    var mocha = document.getElementsByClassName("checkformocha")[0];
    var CA = document.getElementsByClassName("checkforCa")[0];
    if(drink == "Black Tea"){
        var detail = BT.getElementsByTagName('input');
    }
    if(drink == "Latte"){
        var detail = LA.getElementsByTagName('input');
    }
    if(drink == "refresher"){
        var detail = ref.getElementsByTagName('input');
    }
    if(drink == "mocha"){
        var detail = mocha.getElementsByTagName('input');
    }
    if(drink == "cappuccino"){
        var detail = document.getElementsByName('CAOption');
    }
    for(i=0;i<detail.length;i++){
        if(detail[i].checked){
            drinkInfo = drinkInfo + ' ' + detail[i].value;
        }
    }
    tableDrinks.innerText = drinkInfo;
    var tableSource = document.getElementById("tableSource");
    var source = document.getElementsByName("source");
    var sourceText;
    var flag = 0;
    for(var i=0;i<source.length;i++){
        if(source[i].checked && flag==1){
            sourceText = sourceText + ',' + source[i].value;
        }
        if(source[i].checked && flag==0){
            sourceText = source[i].value;
            flag = 1;
        }
    }
    tableSource.innerText = sourceText;
    var tableComment = document.getElementById("tableComment");
    tableComment.innerText = document.getElementById("comments").value;
    table.style.position = "fixed";
    table.style.top = top + "px";
    table.style.left = left + "px";
    table.style.display = "block";
}