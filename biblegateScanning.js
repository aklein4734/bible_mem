function getVerseText(chapter, verse) {
    let versesContainer = document.querySelector(".result-text-style-normal");
    let bookAcronym = versesContainer.childNodes[1].childNodes[0].classList[1].split("-")[0];
    let elements = Array.from(document.querySelectorAll("p ." + bookAcronym + "-" + chapter + "-" + verse));
    let retVal = "";
    if(elements.length === 0) {
        return "";
    }
    for(let i = 0; i < elements.length; i++) {
        retVal += getVerseElementText(elements[i]) + " ";
    }
    return retVal.substring(0, retVal.length - 1);
}

function getVerseElementText(node) {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: function(node) {
        if (node.nodeName === 'SUP' || (node.classList && node.classList.contains("chapternum"))) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
  
    let text = '';
    while (walker.nextNode()) {
      if (walker.currentNode.nodeType === Node.TEXT_NODE) {
        text += walker.currentNode.textContent;
      }
    }
  
    return text;
  }