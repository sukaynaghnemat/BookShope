var age = prompt('how old are you?');

var message= '';

if(age >= 8  && age <= 16){ 
    message = 'hello baby';
}else if(age >= 17 && age < 40){
    message = 'hello guys';
}else{
    message=('Welcome');
}

document.write('<h2>' + message + '</h2>');


var Order = prompt('what would you like to order books or stories?');
while(Order !=='books' && Order !=='stories'){
    
    Order = prompt('please enter the correct item')

}

var account = prompt('how many books or stories do you want?')

var image=''; 

var g= Order;

for (var i = 0; i < account; i++){
    if (g =='books'){
        
        
        
        image = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpe-1jcYPiAGDhvZdGZstrkadY-SB0yFko8g&usqp=CAU">'
      
        
    }else if(g=='stories'){
        image = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwS3REZncuRdFIF_0RXkCHb0WhahAC3R9qow&usqp=CAU">'

        
    }
document.write(image);
}