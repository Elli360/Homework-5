
//repeat this function for all the save buttons & inputid
$("#saveBtn9AM").on("click",function(){
  let select= JSON.stringify($("#9AMinput").val());
  localStorage.setItem("9AM Notes", select); //saved in storage f12 to check
});
$("#saveBtn10AM").on("click",function(){
  let select= JSON.stringify($("#10AMinput").val());
  localStorage.setItem("10AM Notes", select); 
});
$("#saveBtn11AM").on("click",function(){
  let select= JSON.stringify($("#11AMinput").val());
  localStorage.setItem("11AM Notes", select); 
});
$("#saveBtn12PM").on("click",function(){
  let select= JSON.stringify($("#12PMinput").val());
  localStorage.setItem("12PM Notes", select); 
});
$("#saveBtn1PM").on("click",function(){
  let select= JSON.stringify($("#1PMinput").val());
  localStorage.setItem("1PM Notes", select); 
});
$("#saveBtn2PM").on("click",function(){
  let select= JSON.stringify($("#2PMinput").val());
  localStorage.setItem("2PM Notes", select); 
});
$("#saveBtn3PM").on("click",function(){
  let select= JSON.stringify($("#3PMinput").val());
  localStorage.setItem("3PM Notes", select); 
});
$("#saveBtn4PM").on("click",function(){
  let select= JSON.stringify($("#4PMinput").val());
  localStorage.setItem("4PM Notes", select); 
});
$("#saveBtn5PM").on("click",function(){
  let select= JSON.stringify($("#5PMinput").val());
  localStorage.setItem("5PM Notes", select); 
});

$(document).ready(function() {
 let allTimes= $(".rowColor");

 //write a function that loads the input values with their data from local storage apply to all times
if (localStorage.getItem("9AM Notes")){
 let nine= JSON.parse(localStorage.getItem("9AM Notes")); 
$("#9AMinput").val(nine);
}
if (localStorage.getItem("10AM Notes")){
  let ten= JSON.parse(localStorage.getItem("10AM Notes")); 
 $("#10AMinput").val(ten);
 }
 if (localStorage.getItem("11AM Notes")){
  let eleven= JSON.parse(localStorage.getItem("11AM Notes")); 
 $("#11AMinput").val(eleven);
 }
 if (localStorage.getItem("12PM Notes")){
  let twelve= JSON.parse(localStorage.getItem("12PM Notes")); 
 $("#12PMinput").val(twelve);
 }
 if (localStorage.getItem("1PM Notes")){
  let one= JSON.parse(localStorage.getItem("1PM Notes")); 
 $("#1PMinput").val(one);
 }
 if (localStorage.getItem("2PM Notes")){
  let two= JSON.parse(localStorage.getItem("2PM Notes")); 
 $("#2PMinput").val(two);
 }
 if (localStorage.getItem("3PM Notes")){
  let three= JSON.parse(localStorage.getItem("3PM Notes")); 
 $("#3PMinput").val(three);
 }
 if (localStorage.getItem("4PM Notes")){
  let four= JSON.parse(localStorage.getItem("4PM Notes")); 
 $("#4PMinput").val(four);
 }
 if (localStorage.getItem("5PM Notes")){
  let five= JSON.parse(localStorage.getItem("5PM Notes")); 
 $("#5PMinput").val(five);
 }

// this function doesn't need to repeat 
 for (let i=0; i < allTimes.length; i++){
   let now= moment().hours();
   let hour= $(allTimes[i]).attr("value")
   if (hour > now){
     $(allTimes[i]).attr("class", "future");
   } else if (hour < now){
    $(allTimes[i]).attr("class", "past");
   } else {
    $(allTimes[i]).attr("class", "present");
   }
 }
})
