var links = document.querySelectorAll("a");

links.forEach(link => {
    addDataAction(link)
    addDataLabel(link)
    addDataCategory(link)
    console.log(link.dataset.action)
    console.log(link.dataset.label)
    console.log(link.dataset.category)
})


function addDataAction(el) {
    if (!el.dataset.action){
        el.dataset.action = el.href
    }  
}


function addDataLabel(el) {

    if (isExternalLink(el.href)){
        el.dataset.label = "external_interaction"
        return
    }
    el.dataset.label = "content_interaction"
}

function addDataCategory(el) {
    isParentOffIntrest(function(nodeNameParent) {el.dataset.category = nodeNameParent}, el)
    
}

function isParentOffIntrest(callback, el) {

    // Some elements did not fit into either nav, article or footer so i gave it NaN :)
    if(!el.parentElement) {
        callback("NaN")
        return
    }

    if(["NAV", "ARTICLE", "FOOTER"].includes(el.parentElement.nodeName)) {
        callback(el.parentElement.nodeName)
        return
    } else {
        isParentOffIntrest(callback,el.parentElement)
    }
}

function isExternalLink(url) {
    const tmp = document.createElement('a');
    tmp.href = url;
    return tmp.host !== window.location.host;
}
