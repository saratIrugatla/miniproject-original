function meas(form) {
var fc=form.mea.value;
if (form.cfc[0].checked) {
var answer= fc * .39
}
else {
var answer=fc * 2.54
}
form.answer.value=Math.round(10*answer)/10;
//form validation--
var mea=form.mea.value;
//alert
if((mea==null)||(mea=="")||(isNaN(mea))){
alert('Please enter a legnth with numbers only. Use a period for decimal place.');
form.mea.focus();
form.mea.select();
return false
}
}