// Question # 1
document.write("<h1>Question # 1</h1>")

var now = new Date()
document.write(now)


// Question # 2 1st code
document.write("<h1>Question # 2 1st code</h1>")

var monthName =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var now = new Date()
var month = now.getMonth()
var nameOfMonth = monthName[month];
document.write(nameOfMonth)


// Question # 2 2nd Code
document.write("<h1>Question # 2 2nd Code</h1>")
var monthName =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = now.toLocaleString('en-US',{month:'long'})
document.write(month)




// // Question # 3 
document.write("<h1>Question # 3 </h1>")

var dayNamesArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var now = new Date()
var day = now.getDay()
var nameOfToday = dayNamesArr[day];
alert(nameOfToday )
document.write( nameOfToday.slice(0,3) )



// Question # 4
document.write("<h1>Question # 4</h1>")


var now = new Date()
var day = now.getDay
if(  day == 0 || day == 6){
    alert("It’s Fun day")
    document.write("It’s Fun day")
}else{
    alert("It’s Working day")
    document.write("It’s Working day")
}

// Question # 5
document.write("<h1>Question # 5</h1>")

var  now = new Date()
var date = now.getDate()
if (date <=15){
alert("First fifteen days of the month")
document.write("First fifteen days of the month")
}else{
    alert("Last days of the month")
document.write("Last days of the month")
}

// Question # 6
document.write("<h1>Question # 6</h1>")

var now = new Date ()
var milliseconds = Math.floor(now/1000) 
var minutes = Math.floor(now/1000*60 )

document.write("Current Date:" + now + "<br>") 
document.write("Elapsed milliseconds:"+" " + milliseconds + "<br>");
document.write("Elapsed minutes:"+" "+  + minutes);


// Question # 7
document.write("<h1>Question # 7</h1>")

var now = new Date()
var time = now.toLocaleTimeString()
document.write(time);
if (time <= "00:00"   ){
    alert ("its AM")
  }else{
    alert("its PM")
  }

  
// Question # 8
document.write("<h1>Question # 8</h1>")

var now = new Date("dec. 1,2020")

document.write("Later Date:" + now)

// Question # 9
document.write("<h1>Question # 9</h1>")




// Question # 10
document.write("<h1>Question # 10</h1>")

var now = new Date("dec, 05, 2015 22:20:16")

var seconds = now.getSeconds("dec, 05, 2015")
document.write( "On reference date :" + now + "<br>") 
document.write(seconds)

// Question # 11
document.write("<h1>Question # 11</h1>")

var now = new Date()
var hours = new Date ("Mon Dec 11 1923 12:04:33 GMT+0500 (Pakistan Standard Time")

document.write("Current Date:" + now +"<br> " + "1 hours ago :" + hours)


// Question # 12
document.write("<h1>Question # 12</h1>")

var now = new Date()
var date100YearBack = new Date ("Mon Dec 11 2023 12:53:33 GMT+0500 (Pakistan Standard Time")

document.write("Current Date:" + now +"<br> " + "100 Year Back Date, its was:" + date100YearBack)


// Question # 13
document.write("<h1>Question # 13</h1>")


var ageYear = prompt("Enter Your Age year")
var CurrentYear = new Date().getFullYear()
var youAge = ( CurrentYear - ageYear)
var birthYear = (ageYear)

document.write("You Age Is:" + youAge + "Years" + "<br>")
document.write("You Birth Year Is:" + birthYear)


// Question # 14
document.write("<h1>Question # 14</h1>")

document.write("K-Electric Bill" + "<br><br>")

var names = "Abullah"
document.write("Customer Name:" + " " + names + "<br> <br>" )

 var  now =  new Date()
 var  month = now.getMonth()
 var nameOfMonth = monthName[month];
 document.write("Current Month:" + " " + nameOfMonth)
 

var  numberOfUnits = 410
var  chargesPerunit = 16
var netAmountPayable =   numberOfUnits * chargesPerunit
var latePaymentSurcharge = 350
var  grossAmountPayable = netAmountPayable + 350

document.write( " Number Of Units:" + " " +  + numberOfUnits + "<br>" )
document.write("Charges per unit:"  + " " + chargesPerunit + "<br><br>" )
document.write( "Net Amount Payable (within Due Date):"  + " " + netAmountPayable + "<br>") 
document.write( "Late Payment Surcharge:"  + " " + latePaymentSurcharge + "<br>") 
document.write(  "Gross Amount Payable (after Due Date):"  + " " + grossAmountPayable + "<br>" )





