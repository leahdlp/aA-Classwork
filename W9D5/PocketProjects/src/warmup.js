
const partyHeader = document.getElementById('party');


export const htmlGenerator = (string, htmlElement) => {
    const kids = Array.from(htmlElement.children);
    
    if (htmlElement.hasChildNodes()) {
        kids.forEach( (child) => htmlElement.removeChild(child));
    } 

    const tag = document.createElement('p');
    tag.innerHTML = string;
    htmlElement.appendChild(tag);
    
};

htmlGenerator('Party Time.', partyHeader);
