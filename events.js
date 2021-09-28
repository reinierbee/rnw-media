var links = document.querySelectorAll("a");
const externalLabel = "external_interaction"
const internalLabel = "content_interaction"
const parentNodeNameArray = ["NAV", "ARTICLE", "FOOTER"]
const parentNodeNameObject = { 
    NAV: { name: "navigation" }, 
    ARTICLE: { name:"article" }, 
    FOOTER: { name:"footer" } 
}
const parentNodeNameNotDefined = "NaN"

links.forEach(link => {
    addDataAction(link)
    addDataLabel(link)
    addDataCategory(link)
})


function addDataAction(el) {
    if (!el.dataset.action){
        el.dataset.action = el.href
    }  
}

function addDataLabel(el) {
    if (isExternalLink(el.href)){
        el.dataset.label = externalLabel
        return
    }
    el.dataset.label = internalLabel
}

function addDataCategory(el) {
    parentNodeNameFinder(function(nodeNameParent) {el.dataset.category = nodeNameParent}, el)
}

function parentNodeNameFinder(callback, el) {

    // Some elements did not fit into either nav, article or footer so i gave it NaN :)
    if(!el.parentElement) {
        callback(parentNodeNameNotDefined)
        return
    }

    if(parentNodeNameArray.includes(el.parentElement.nodeName)) {
        callback(parentNodeNameObject[el.parentElement.nodeName].name)
        return
    } else {
        parentNodeNameFinder(callback,el.parentElement)
    }
}

function isExternalLink(url) {
    const tmp = document.createElement('a');
    tmp.href = url;
    return tmp.host !== window.location.host;
}
