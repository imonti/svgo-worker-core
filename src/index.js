var SVGO = require('svgo');
var FS = require('fs'),
    PATH = require('path');


console.log('s', SVGO)

var filepath = PATH.resolve(__dirname, './test.svg'),
    svgo;

FS.readFile(filepath, 'utf8', function(err, data) {
    if (err) {
        throw err;
    }
    //

    const j = {
        "action": "process",
        "settings": {
            "plugins": {
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
            "gzip": false,
            "pretty": true,
            "floatPrecision": "1",
            "fingerprint": "1,|1|,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1"
        },
        "id": 4
    }
    
    svgo = new SVGO({
        full: true,
        plugins: [],
        js2svg: { pretty: true, indent: 2 }
    });
    
    /*
    svgo = new SVGO({
        plugins: [{
          cleanupAttrs: true,
        }, {
          removeDoctype: true,
        },{
          removeXMLProcInst: true,
        },{
          removeComments: true,
        },{
          removeMetadata: true,
        },{
          removeTitle: true,
        },{
          removeDesc: true,
        },{
          removeUselessDefs: true,
        },{
          removeEditorsNSData: true,
        },{
          removeEmptyAttrs: true,
        },{
          removeHiddenElems: true,
        },{
          removeEmptyText: true,
        },{
          removeEmptyContainers: true,
        },{
          removeViewBox: false,
        },{
          cleanupEnableBackground: true,
        },{
          convertStyleToAttrs: true,
        },{
          convertColors: true,
        },{
          convertPathData: true,
        },{
          convertTransform: true,
        },{
          removeUnknownsAndDefaults: true,
        },{
          removeNonInheritableGroupAttrs: true,
        },{
          removeUselessStrokeAndFill: true,
        },{
          removeUnusedNS: true,
        },{
          cleanupIDs: true,
        },{
          cleanupNumericValues: true,
        },{
          moveElemsAttrsToGroup: true,
        },{
          moveGroupAttrsToElems: true,
        },{
          collapseGroups: true,
        },{
          removeRasterImages: false,
        },{
          mergePaths: true,
        },{
          convertShapeToPath: true,
        },{
          sortAttrs: true,
        },{
          removeDimensions: true,
        },
        //{removeStyleElement:true,},
        {
          removeAttrs: {attrs: '(stroke|fill)'},
        }]
      });
*/
    svgo.optimize(data, { path: filepath }).then(function(result) {
        console.log(result);

    }).catch(e => {
        console.log(e);
    });

});