const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0987654321";
const symbols="!@#$%^&*()_+/";

 
//selectors
const passbox = document.getElementById('password');
const totalchar = document.getElementById('pass-length');
const upperinput = document.getElementById('upper');
const lowerinput = document.getElementById('lower');
const numberinput = document.getElementById('num');
const symbolinput = document.getElementById('symb');

const getRandomData = (dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatepassword = (password = "") =>{
    if(upperinput.checked){
        password += getRandomData(upperCase)
    }
    if(lowerinput.checked){
        password += getRandomData(lowerCase)
    }
    if(numberinput.checked){
        password += getRandomData(number)
    }
    if(symbolinput.checked){
        password += getRandomData(symbols)
    }
    if(password.length<totalchar.value){
        return generatepassword(password) 
    }
    passbox.value = truncateString(password,totalchar.value);
}


document.getElementById('btn').addEventListener(
    "click",
    function(){
        generatepassword();
    }
)


function truncateString(str,num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }else{
        return str;
    }
}

function copypassword(){
    passbox.select();
    document.execCommand('copy');
}