define( [], function () {
    'use strict';
    return {
        qListObjectDef: {
                qShowAlternatives: true,
                //qFrequencyMode: "V",
                qInitialDataFetch: [{
                    qWidth: 2,
                    qHeight: 1000
                }],
                qSortByState: 0,
            },
        qHyperCubeDef: {
            qDimensions: [],
            qMeasures: [],

            qInitialDataFetch: [
                {
                    qWidth: 10,
                    qHeight: 50
                }
            ]
        }
    };
} );