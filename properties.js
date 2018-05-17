define( [], function () {
    'use strict';

    var dimensions = {uses: "dimensions"};
    /*var measures = { uses: "measures" };*/
    var sorting = { uses: "sorting" };
    /*var addons = { uses: "addons" };*/
    var appearancePanel = 
        {   uses: "settings",
            items: {
                boxHeight: {
                            ref: "boxHeight",
                            label: "Box Height",
                            type: "string",
                            defaultValue: "100%"
                        },
                boxWidth: {
                            ref: "boxWidth",
                            label: "Box Width",
                            type: "string",
                            defaultValue: "100%"
                        },
                 boderProp: {
                            ref: "boderProp",
                            label: "Border css",
                            type: "string",
                            defaultValue: "1px solid black"
                        },
                boderRadiusProp: {
                            ref: "boderRadiusProp",
                            label: "Border Radius",
                            type: "string",
                            defaultValue: "0px"
                        },
                cssInjector: {
                            label:"custom CSS as json dictionary",
                            component: "string",
                            rows: 7,//the amount of rows in the textarea component (default is 3)
                            maxlength: 300,//will not allow more than 100 characters
                            ref: "customCSS",
                            defaultValue: ""
                        }
                
                }
        };
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            /*measures: measures,*/
            sorting: sorting,
            appearance: appearancePanel
        }
    };
} );