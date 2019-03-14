const myWorker = new Worker('svgo-worker.js');
const data =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:spine="http://powtoon.com/" viewBox="0 0 23 98"></svg>`;
const start = {action: 'load',data,id: 1};
myWorker.postMessage(start);
let init = false;
myWorker.onmessage = (a)=>{
    console.log('response',init,a.data)
    if(!init){
        init = true;
        myWorker.postMessage({action: "process",id: 2,settings})
    }else{
        
    }
}

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
