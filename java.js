function calcadoChange(tipo){
    
   
    switch(tipo){
        case "Homem":
            var elements = document.getElementsByClassName("Homem");
          
            for(var i=0; i<elements.length; i++) {
                elements[i].style.display="block";
            }
            var elements2 = document.getElementsByClassName("Mulher");
          
            for(var i=0; i<elements2.length; i++) {
                elements2[i].style.display="none";
            }
            var elements3 = document.getElementsByClassName("Criança");
          
            for(var i=0; i<elements3.length; i++) {
                elements3[i].style.display="none";
            }
            break;

        case "Mulher":
            var elements4 = document.getElementsByClassName("Mulher");
            console.log(elements4)
            for(var i=0; i<elements4.length; i++) {
                elements4[i].style.display="block";
                console.log(elements4[i])
            }
            var elements5 = document.getElementsByClassName("Homem");
          
            for(var i=0; i<elements5.length; i++) {
                elements5[i].style.display="none";
            }
            var elements6 = document.getElementsByClassName("Criança");
          
            for(var i=0; i<elements6.length; i++) {
                elements6[i].style.display="none";
            }
            break;

        case "Criança":
            var elements7 = document.getElementsByClassName("Criança");
          
            for(var i=0; i<elements7.length; i++) {
                elements7[i].style.display="block";
            }
            var elements8 = document.getElementsByClassName("Homem");
          
            for(var i=0; i<elements8.length; i++) {
                elements8[i].style.display="none";
            }
            var elements9 = document.getElementsByClassName("Mulher");
          
            for(var i=0; i<elements9.length; i++) {
                elements9[i].style.display="none";
            }
        break;

        case "Novidades":
            var elements10 = document.getElementsByClassName("Homem");
          
            for(var i=0; i<elements10.length; i++) {
                elements10[i].style.display="block";
            }
            var elements11 = document.getElementsByClassName("Mulher");
          
            for(var i=0; i<elements11.length; i++) {
                elements11[i].style.display="block";
            }
            var elements12 = document.getElementsByClassName("Criança");
          
            for(var i=0; i<elements12.length; i++) {
                elements12[i].style.display="block";
            }
            
            break;
    }
   
}
