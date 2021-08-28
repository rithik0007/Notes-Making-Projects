var container2 = document.getElementsByClassName('container2')[0];
var container3 = document.getElementsByClassName('container3')[0];

var check = document.getElementById('check');
var check1 = document.getElementById('check1');
var i = 0 ;

check1.addEventListener('click' , function(){
      typeNote();
});


check.addEventListener('click' , function(){

  createnote();

}) ;


function typeNote() {
      if(container3.style.display == "none"){

          container3.style.display = "block" ;
      }else {
          container3.style.display = "none" ;

      };


};



function createnote() {
  var notes = document.getElementById('notes').value;
     var node0 = document.createElement('div');
     var node1 = document.createElement('h1');


     node1.innerHTML = notes ;
    node1.setAttribute("style" , "width :250px ;height : 230px  ; font-size : 26px ; padding : 25px ;margin-top : 10px ; color : white ; overflow : hidden  ;  box-shadow : 0px 10px 24px 0px rgba(0,0,0,0.75) ; " )
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

     node0.appendChild(node1);

     container2.insertAdjacentElement("beforeend" , node0);

     node0.addEventListener("mouseenter" , function(){
                  node0.style.transform = "scale(1.1)";
     });
      node0.addEventListener("mouseleave" , function(){

          node0.style.transform = "scale(1)";

      });
        node0.addEventListener("dblclick" , function(){
            node0.remove() ;

        });

        document.getElementById("notes").value = '' ;


}



function margin(){
        var random_margin = ["-5px" , "1px" , "5px" , "10px" , "15px" , "20px"];
            return random_margin[Math.floor(Math.random() * random_margin.length)];

}

function rotate(){
  var random_rotate = ["rotate(3deg)" , "rotate(1deg)" , "rotate(-1deg)" , "rotate(1deg)" , "rotate(-3deg)" , "rotate(-5deg)" , "rotate(-10deg)"   ];
      return random_rotate[Math.floor(Math.random() * random_rotate.length)];

return  random_rotate[Math.floor(Math.random() * random_rotate.length)];

}

function color(){

    var random_color = [ "#8A2BE2" , "#A52A2A" , "#DC143C" , "#00008B" , "#006400" , "#4B0082"];
    if(i > random_color.length - 1){
          i = 0;}
    return random_color[i++];



}
