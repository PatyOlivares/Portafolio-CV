const paragraphs = document.querySelectorAll(".educacion") ;

document.addEventListener("scroll", function(){
    paragraphs.forEach((paragraphs)=> {
      if (isInView(paragraphs)){
        paragraphs.classList.add("educacion--visible");
      }
    });
});

function isInView(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}

// Para ambitos de desarrollo
const paragraph = document.querySelectorAll(".ambitos") ;

document.addEventListener("scroll", function(){
    paragraph.forEach((paragraph)=> {
      if (isInView(paragraph)){
        paragraph.classList.add("ambitos--visible");
      }
    });
});

function isInView(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}

// Para las cards
const paragraph_card = document.querySelectorAll(".section_cards") ;

document.addEventListener("scroll", function(){
    paragraph_card.forEach((paragraph_card)=> {
      if (isInView(paragraph_card)){
        paragraph_card.classList.add("section_cards--visible");
      }
    });
});

function isInView(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}
