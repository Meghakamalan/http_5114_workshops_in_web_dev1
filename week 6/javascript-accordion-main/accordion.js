var num;
function accordionClick(num) {
    console.log("open section" + num);
    //fetch a reference to all sections
    let sections = document.getElementsByClassName("accordion-section");
    //console.log(sections);
    //loop through sections and hide all
    for (let i=0;i<sections.length;i++)
    {
        sections[i].style.display="none";
    }

    //make selected section visible
   if (sections[num-1].style.display === "block")
     {
        sections[num-1].style.display = "none";
        
    }
    else 
        {
         sections[num-1].style.display = "block";
       
         }
         
}