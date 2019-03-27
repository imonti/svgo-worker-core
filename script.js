let myWorker = null;
const createElement = text=>{
     const div = document.createElement('div');
    div.innerHTML= text;
    document.body.appendChild(div);
}
const workerMessage = (a)=>{
    console.log('response',init,a.data)
    if(!init){
        init = true;
        myWorker.postMessage({action: "process",id: 2,settings})
    }else{
        createElement(a.data.result.data);
    }
}
fetch('palm.svg').then(t=>t.text()).then(textContent=>{
     console.time('worker');
    myWorker =  new Worker('svgo-worker.js');
     console.timeEnd('worker');
    createElement(textContent);
     myWorker.onmessage = workerMessage;
    const start = {action: 'load',data:textContent,id: 1};
    myWorker.postMessage(start);
})
let init = false;


const settings = {
    "plugins":
    {
        "removeDoctype": true,
        "removeXMLProcInst": true,
        "removeComments": true,
        "removeMetadata": true,
        "removeXMLNS": false,
        "removeEditorsNSData": true,
        "cleanupAttrs": true,
        "inlineStyles": true,
        "minifyStyles": true,
        "convertStyleToAttrs": true,
        "cleanupIDs": true,
        "removeRasterImages": true,
        "removeUselessDefs": true,
        "cleanupNumericValues": true,
        "cleanupListOfValues": true,
        "convertColors": true,
        "removeUnknownsAndDefaults": true,
        "removeNonInheritableGroupAttrs": true,
        "removeUselessStrokeAndFill": true,
        "removeViewBox": true,
        "cleanupEnableBackground": true,
        "removeHiddenElems": true,
        "removeEmptyText": true,
        "convertShapeToPath": true,
        "moveElemsAttrsToGroup": true,
        "moveGroupAttrsToElems": true,
        "collapseGroups": true,
        "convertPathData": true,
        "convertTransform": true,
        "removeEmptyAttrs": true,
        "removeEmptyContainers": true,
        "mergePaths": true,
        "removeUnusedNS": true,
        "sortAttrs": true,
        "removeTitle": false,
        "removeDesc": true,
        "removeDimensions": true,
        "removeStyleElement": false,
        "removeScriptElement": true
    },
    "original": false,
    "gzip": true,
    "pretty": true,
    "floatPrecision": "1",
    "fingerprint": "1,|1|,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1"
}
