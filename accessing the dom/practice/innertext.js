let myElement = document.getElementById("myPara");
      
          //Now retrieving innerText of the selected element
          let content = myElement.innerText;
      
          console.log(content);
      
          /* Output:
          This element has spacing
          */
      
      //Let's try to change the content of selected element
          let newPara = 'Hiii';
          myElement.innerText = newPara;