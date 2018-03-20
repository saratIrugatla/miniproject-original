function ideal(form) {
//man,kg,cm
if ((form.sex[0].checked)&&(form.wt2.options[0].selected ==true)&&
    (form.ht2.options[0].selected ==true)) {   
var sex = 50;
var wt = form.wt.value;
var x = (form.ht.value - 152.4) * 0.3937;
var IBW = x * 2.3 + sex;
var ABW = 0.4*(wt - IBW) + IBW;
var per = IBW * 0.30 + IBW;
form.IBW.value = Math.round(10*IBW)/10 + " kg";
form.ABW.value = Math.round(10*ABW)/10 + " kg";
form.per.value = Math.round(10*per)/10 + " kg";

}
//man,lb,in
else if
    ((form.sex[0].checked)&&(form.wt2.options[1].selected ==true)&&
    (form.ht2.options[1].selected ==true)) {   
var sex = 50;
var wt = form.wt.value / 2.2;
var x = form.ht.value -60;
var IBW = x * 2.3 + sex;
var ABW = 0.4*(wt - IBW) + IBW;
var per = IBW * 0.3 + IBW;
form.IBW.value = Math.round(10*(IBW*2.2))/10 + " lb";
form.ABW.value = Math.round(10*(ABW*2.2))/10 + " lb";
form.per.value = Math.round(10*(per*2.2))/10 + " lb";
}
//man,kg,in
else if
    ((form.sex[0].checked)&&(form.wt2.options[0].selected ==true)&&
    (form.ht2.options[1].selected ==true)) {   
var sex = 50;
var wt = form.wt.value;
var x = form.ht.value -60;
var IBW = x * 2.3 + sex;
var ABW = 0.4*(wt - IBW) + IBW;
var per = IBW * 0.3 + IBW;
form.IBW.value = Math.round(10*IBW)/10 + " kg";
form.ABW.value = Math.round(10*ABW)/10 + " kg";
form.per.value = Math.round(10*per)/10 + " kg";
}
//man,lb,cm
else if
    ((form.sex[0].checked)&&(form.wt2.options[1].selected ==true)&&
    (form.ht2.options[0].selected ==true)) {   
var sex = 50;
var wt = form.wt.value /2.2;
var x = (form.ht.value - 152.4) * 0.3937;
var IBW = x * 2.3 + sex;
var ABW = 0.4*(wt - IBW) + IBW;
var per = IBW * 0.3 + IBW;
form.IBW.value = Math.round(10*IBW)/10 +" kg";
form.ABW.value = Math.round(10*ABW)/10 +" kg";
form.per.value = Math.round(10*per)/10 +" kg";
}

//woman,kg,cm
else if 
    ((form.sex[1].checked)&&(form.wt2.options[0].selected ==true)&&
    (form.ht2.options[0].selected ==true)) {   
var sex = 45.5;
var wt = form.wt.value;
var x = (form.ht.value - 152.4) * 0.3937;
var IBW = x * 2.3 + sex;
var ABW = 0.4*(wt - IBW) + IBW;
var per = IBW * 0.3 + IBW;
form.IBW.value = Math.round(10*IBW)/10 + " kg";
form.ABW.value = Math.round(10*ABW)/10 + " kg";
form.per.value = Math.round(10*per)/10 + " kg";
}
//woman,lb,in
else if
    ((form.sex[1].checked)&&(form.wt2.options[1].selected ==true)&&
    (form.ht2.options[1].selected ==true)) {   
var sex = 45.5;
var wt = form.wt.value / 2.2;
var x = form.ht.value -60;
var IBW = x * 2.3 + sex;
var ABW = 0.4*(wt - IBW) + IBW;
var per = IBW * 0.3 + IBW;
form.IBW.value = Math.round(10*(IBW*2.2))/10 + " lb";
form.ABW.value = Math.round(10*(ABW*2.2))/10 + " lb";
form.per.value = Math.round(10*(per*2.2))/10 + " lb";
}
//woman,kg,in
else if
    ((form.sex[1].checked)&&(form.wt2.options[0].selected ==true)&&
    (form.ht2.options[1].selected ==true)) {   
var sex = 45.5;
var wt = form.wt.value;
var x = form.ht.value -60;
var IBW = x * 2.3 + sex;
var ABW = 0.4*(wt - IBW) + IBW;
var per = IBW * 0.3 + IBW;
form.IBW.value = Math.round(10*IBW)/10 + " kg";
form.ABW.value = Math.round(10*ABW)/10 + " kg";
form.per.value = Math.round(10*per)/10 + " kg";
}
//woman,lb,cm
else if
    ((form.sex[1].checked)&&(form.wt2.options[1].selected ==true)&&
    (form.ht2.options[0].selected ==true)) {   
var sex = 45.5;
var wt = form.wt.value /2.2;
var x = (form.ht.value - 152.4) * 0.3937;
var IBW = x * 2.3 + sex;
var ABW = 0.4*(wt - IBW) + IBW;
var per = IBW * 0.3 + IBW;
form.IBW.value = Math.round(10*IBW)/10 +" kg";
form.ABW.value = Math.round(10*ABW)/10 +" kg";
form.per.value = Math.round(10*per)/10 +" kg";
}

//alerts
if((form.wt.value==null)||(form.wt.value=="")||(isNaN(form.wt.value))){
alert('Please enter a weight with numbers only. Use a period for decimal place.');
form.wt.focus();
form.wt.select();
return false
}
//alert
if((form.ht.value==null)||(form.ht.value=="")||(isNaN(form.ht.value))){
alert('Please enter a height with numbers only. Use a period for decimal place.');
form.ht.focus();
form.ht.select();
return false
}
if(form.ht.value <60){
alert('Height must be more than 60 inches');
form.ht.focus();
form.ht.select();
return false
}
if((wt > per) && (!(parseInt(form.IBW.value) < 1))){
alert('Use ABW of ' + form.ABW.value + ' for dosing' +'\n' +
    'medications instead of IBW.');
}
if(parseInt(form.IBW.value) < 1){
alert('Are you sure height'
    +'\n' + '& wieght are correct?');
}
}
