define( [], function () {
    'use strict';
    return {
    /*    initialProperties: {
            qListObjectDef: {
                qShowAlternatives: true,
                //qFrequencyMode: "V",
                qInitialDataFetch: [{
                    qWidth: 1,
                    qHeight: 1000
                }],
                qSortByState: 0,
            },
            variableValue: {},
            maxLimitvariableValue: {},
            props: {
                dimensionIsVariable: false
            }
        }*/
/*        qListObjectDef : {
            qShowAlternatives : true,
            qFrequencyMode : "V",
            qInitialDataFetch : [{
                qWidth : 2,
                qHeight : 50
            }]
        },*/
        qHyperCubeDef: {
            qDimensions: [],
            qMeasures: [],
            "qStateName": "1",
            qInitialDataFetch: [
                {
                    qWidth: 1,
                    qHeight: 1000
                }
            ]
        }
    };
} );