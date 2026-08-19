

// 1. Age Check
// একজন ব্যক্তির বয়স 18 বা তার বেশি হলে "Adult" দেখাবে, নাহলে "Minor" দেখাবে।


const age = 20
if(age>=18){
    console.log("Adult")
}else{
    console.log("Minor");
    
}




// 2. Number Check
// একটি সংখ্যা 10 এর চেয়ে বড় হলে "Greater" দেখাবে, নাহলে "Smaller" দেখাবে।


const Number=70
if (Number>10) {
console.log("Greater");

}else{
    console.log("Smaller");
    
}

// 3. Password Check
// Password "admin123" হলে "Login Successful" দেখাবে, নাহলে "Wrong Password" দেখাবে।


const password ="admin123"

if(password==='admin123'){
    console.log("Login Successful");
    
}else{
    console.log("Wrong Password");
    
}


// 4. Exam Result
// Marks 40 বা তার বেশি হলে "Pass" দেখাবে, নাহলে "Fail" দেখাবে।



const Marks=50


if (Marks>=40) {
    console.log("Pass");
    
}else{
    console.log("Fail");
    
}




// 5. Even or Odd
// একটি সংখ্যা Even নাকি Odd সেটা if/else দিয়ে বের করো।

let EvenOrodd=7

if (EvenOrodd%2==0) {
    console.log("Even")
}if (EvenOrodd%2==1) {
    console.log("Odd");
    
}





// 6. Voting Eligibility
// Age 18 বা তার বেশি হলে "Eligible for Voting" দেখাবে, নাহলে "Not Eligible" দেখাবে।


const VotingEligibility=18



if (VotingEligibility>=18) {
    console.log("Eligible for Voting");
    
}else{
    console.log("Not Eligible");
    
}


// 7. Temperature Check
// Temperature 30 এর বেশি হলে "Hot" দেখাবে, নাহলে "Normal" দেখাবে।



const Temperature=31


if (Temperature>30) {
    console.log("Hot");
    
}else{
    console.log("Normal");
    
}

// 8. Balance Check
// Balance 1000 বা তার বেশি হলে "You can buy" দেখাবে, নাহলে "Insufficient Balance" দেখাবে।





const Balance=1000



if (Balance>=1000) {
    console.log("You can buy");
    
}else{
    console.log("Insufficient Balance");
    
}


// 9. Username & Password
// Username "admin" এবং password "12345" — দুটোই সঠিক হলে "Login Successful" দেখাবে, নাহলে "Invalid Credentials" দেখাবে।


let Username='admin'
let Password='123456'
if (Username==='admin'&&Password==="12345") {
    console.log("Login Successful");
    
}else{
    console.log("Invalid Credentials");
    
}






// 10. Qualification Check 🔥
// একটি number 20 বা তার বেশি হলে "Qualified" দেখাবে, নাহলে "Not Qualified" দেখাবে।

const Qualification=30

if (Qualification>=20) {
    console.log("Qualified");
    
}else{
    console.log("Not Qualified");
    
}