define( [], function () {
    'use strict';

    var dimensions = {
                    uses: "dimensions",
                    label: "Dimensions",
                    ref: "qListObjectDef",
                    min: 0,
                    max: 1
                
            
        };
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
                            defaultValue: "",
                            expression:"optional"
                        },
                imageProperties: {
                    type: "items",
                    label: "Image Properties",
/*                    component: "expandable-items",*/
                    items: {
                        imageOn:{
                            ref: "imageOn",
                            label: "Add Image",
                            type: "boolean",
                            defaultValue: "false"
                        },
                        imagePos:{
                            ref: "imagePos",
                            label: "Position",
                            type: "string",
                            defaultValue: "left",
                          /*component: customCmp.buttongroup,
                            options: [
                                {
                                    value: "left",
                                    label: "left"
                                }, {
                                    value: "center",
                                    label: "center"
                                }, {
                                    value: "right",
                                    label: "right"
                                }
                            ],*/
                            show: function (item) {
                                    return item.imageOn;
                                }
                        }



                    }
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