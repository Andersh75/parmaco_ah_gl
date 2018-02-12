'use strict';






document.addEventListener('DOMContentLoaded', function() {






    var log = [];
    var remoteCouch = 'http://127.0.0.1:5984/kittens';

    new PouchDB('kittens')
    .info()
    .then(function () {
        return new PouchDB('kittens');
    })
    .then(function (db) {
        let dataTest = {};
        //create tabel of inputs
        for (let i = 0; i < 5; i++) {
            let tabellEl = helper.dom.getElement("id", "tabeller");
            let tabellDiv = helper.dom.createElement("div");
            
            for (let z = 0; z < 5; z++) {
                let letter = String.fromCharCode("A".charCodeAt(0) + z);
                let inputEl1 = helper.dom.createElement("input");
                helper.dom.setAttribute("id", letter + (i + 1), inputEl1);
                helper.dom.setAttribute("data-cell", letter + (i + 1), inputEl1);
                helper.dom.appendChildNodeIO(inputEl1, tabellDiv);

            }
            helper.dom.appendChildNodeIO(tabellDiv, tabellEl);
        }

        function nonsensFunction(x, y) {
           return x + y;
        };

        let serializedNonsensFunction = helper.functions.serialize(nonsensFunction);

        let deSerialNonsensFunction = helper.functions.deSerialize(serializedNonsensFunction);

        let dataCellArray = [];
        let myDocs = [];
        //slices the node list into an array
        dataCellArray = [].slice.call(document.querySelectorAll('[data-cell]'));

        myRecursive(dataCellArray);

        function myRecursive(myArray) {
           //myArray[0].value = "1";
            helper.dom.setAttribute("value", 1, myArray[0]);
            let doc = {
                dbName: db.name,
                _id: new Date().toISOString(),
                datacellid: myArray[0].id,
                datacellvalue: myArray[0].value,
                adderfunction: serializedNonsensFunction,
                written: new Date().toISOString(),
                kind: "data-cell"
            };

            helper.dom.setAttribute("dbId", doc._id, myArray[0]);


            myDocs.push(doc);
            setTimeout(function () {
                if (myArray.length > 1) {
                    myRecursive(myArray.slice(1));
                } else {
                    console.log(myDocs);
                    db.bulkDocs(myDocs);
                }
            }, 1);

        };




        setTimeout(function () {
           console.log("hej");
           //Array selected from data-cell attribute
            dataCellArray = [].slice.call(document.querySelectorAll('[data-cell]'));
            let dataCellId = helper.dom.getAttribute("dbId", dataCellArray[0]);
            console.log("datacellID: ", dataCellId);

            db.get(dataCellId)
            .then(function(doc) {
                console.log(doc);
                console.log(doc.adderfunction);
                let testSerial = helper.functions.deSerialize(doc.adderfunction);
                console.log(testSerial(3, 5));
                //dataCellArray[1].value = 3;
                //dataCellArray[2].value = 4;
                console.log(dataCellArray[1]);
                console.log(helper.dom.getAttribute("value", dataCellArray[1]));
                dataCellArray[0].value = testSerial(Number(helper.dom.getAttribute("value", dataCellArray[1])), Number(helper.dom.getAttribute("value", dataCellArray[2])));
            })
        }, 3000);


//(dataCellArray[1].value, dataCellArray[2].value)






        //deSerialNonsensFunction(3, 5);

// //serialize object
//     let serialized = JSON.stringify(nonsensFunction, function (key, value) {
//         if (typeof value === 'function') {
//             return value.toString();
//         }
//         return value;
//     })


    // //De serialise object
    // let deSerialized = JSON.parse(serialized, function (key, value) {

    //     if (value

    //         &&
    //         typeof value === "string"

    //         &&
    //         value.substr(0, 8) == "function") {

    //         var startBody = value.indexOf('{') + 1;

    //         var endBody = value.lastIndexOf('}');

    //         var startArgs = value.indexOf('(') + 1;

    //         var endArgs = value.indexOf(')');



    //         return new Function(value.substring(startArgs, endArgs)

    //             , value.substring(startBody, endBody));

    //     }

    //     return value;

    // });


    
       
        // let nonsensFunctionToString = nonsensFunction.toString();
        // console.log(nonsensFunctionToString);

        //console.log(myRecursive.toString());

        
        
        // let testArrr = dataCellArray.map(function(cell) {
        //     cell.value = "1";

        //     let doc = {
        //         dbName: db.name,
        //         _id: new Date().toISOString(),
        //         datacellid: cell.id,
        //         datacellvalue: cell.value,
        //         written: new Date().toISOString()
        //         };
        //     setTimeout("", 1000);

        //     return doc;
        // });
 



        //console.log(testArrr);

       // console.log(document.querySelectorAll('[data-cell]'));

        console.log(db);

       let testObject = {};
        testObject = {
            element: "button",
            attribute: [
                {
                    key: "id",
                    value: "1235456"
                },
                {
                    key: "type",
                    value: "button"
                },
                {
                    key: "value",
                    value: "minText"
                }
            ],
            style: [
                {
                    key: "backgroundColor",
                    value: "red"
                },
                {
                    key: "color",
                    value: "blue"
                },
                {
                    key: "border",
                    value: "thick solid black"
                }
                
            ],
            textNode: [
                {
                    key: "text",
                    value: " textNode text"
                },
                {
                    key: "text",
                    value: " textNode text2"
                }
            ],

            event: [
                {
                    key: "click",
                    value: console.log("hejEvent")
                }
            ]
        }



        let testObject2 = [];
        testObject2 = [
            {
                element: "button",
                attribute: [
                    {
                        key: "id",
                        value: "1235456"
                    },
                    {
                        key: "type",
                        value: "button"
                    },
                    {
                        key: "value",
                        value: "minText"
                    }
                ],
                style: [
                    {
                        key: "backgroundColor",
                        value: "red"
                    },
                    {
                        key: "color",
                        value: "blue"
                    },
                    {
                        key: "border",
                        value: "thick solid black"
                    }
                    
                ],
                textNode: [
                    {
                        key: "text",
                        value: " textNode text"
                    },
                    {
                        key: "text",
                        value: " textNode text2"
                    }
                ],
    
                event: [
                    {
                        key: "click",
                        value: console.log("hejEvent")
                    }
                ]
            },

            {
                element: "button",
                attribute: [
                    {
                        key: "id",
                        value: "31235"
                    },
                    {
                        key: "type",
                        value: "button"
                    },
                    {
                        key: "value",
                        value: "minText2"
                    }
                ],
                style: [
                    {
                        key: "backgroundColor",
                        value: "green"
                    },
                    {
                        key: "color",
                        value: "blue"
                    },
                    {
                        key: "border",
                        value: "thick solid black"
                    }
                    
                ],
                textNode: [
                    {
                        key: "text",
                        value: " textNode text"
                    },
                    {
                        key: "text",
                        value: " textNode text2"
                    }
                ],
    
                event: [
                    {
                        key: "click",
                        value: console.log("hejEvent")
                    }
                ]
            }

        ]
        

        let myId = helper.dom.getElement("id", "fredrik");
        let myChildTest = helper.dom.elementBuilder(testObject);

        console.log(myChildTest);

       
        

        let elementFirst = helper.dom.elementBuilder(testObject);
        let elementSecond = helper.dom.elementBuilder(testObject);

        helper.dom.appendChildNodeIO(elementFirst, myId);
        helper.dom.appendChildNodeIO(elementSecond, myId);




        testObject2.forEach(function(item) {
            let element = helper.dom.elementBuilder(item);
            helper.dom.appendChildNodeIO(element, myId);

        })


        //
        fetchAll(db)
            .then((docs) => {
                return docs.rows;
            })
            //array from db. Return array with element infos
            .then((rows) => {
                console.log(rows);
                return helper.dom.constructElementInfoFromDb(rows);
            })
            //make div elements from element infos
            .then((elementInfos) => {
                let builtElements = elementInfos.map((elementInfo) => {

                    return helper.dom.elementBuilder(elementInfo);
                });

                return builtElements;
            })
            //attach div elements to div parent
            .then((builtElements) => {
                helper.dom.appendBuiltElementsOnId(builtElements, "eight");
            });



            
    


            let selectElement = helper.dom.createElement("select");
            let opitionElement1 = helper.dom.createElement("option");
            let opitionElement2 = helper.dom.createElement("option");
            

            helper.dom.setAttribute("label", "myLable1", opitionElement1);
            helper.dom.setAttribute("label", "myLable2", opitionElement2);

            helper.dom.setAttribute("text", "mytext1", opitionElement1);
            helper.dom.setAttribute("text", "mytext2", opitionElement2);

            helper.dom.setAttribute("value", "myvalue1", opitionElement1);
            helper.dom.setAttribute("value", "myvalue2", opitionElement2);

            

            helper.dom.appendChildNodeIO(opitionElement1, selectElement);
            helper.dom.appendChildNodeIO(opitionElement2, selectElement);

            //get div id info
            let myIdSelect = helper.dom.getElement("id", "fredrik");
            //put DOM obj in div
            helper.dom.appendChildNodeIO(selectElement, myIdSelect);

            console.log(selectElement);



        let optionInfo1 = new helper.dom.ElementInfoConstructor();
        optionInfo1.element = "option";

        optionInfo1.attribute.push({
            key: "label",
            value: "nonsens1"
        });

        let optionInfo2 = new helper.dom.ElementInfoConstructor();
        optionInfo2.element = "option";

        optionInfo2.attribute.push({
            key: "label",
            value: "nonsens2"
        });

        let selectInfo1 = new helper.dom.ElementInfoConstructor();
        selectInfo1.element = "select";



         //create a DOM object
         let optionEl1 = helper.dom.elementBuilder(optionInfo1);
         console.log(optionEl1);

         let optionEl2 = helper.dom.elementBuilder(optionInfo2);
         console.log(optionEl2);

         //get div id info
         myId = helper.dom.getElement("id", "fredrik");

         //create select element
         let selectElement2 = helper.dom.elementBuilder(selectInfo1);
         //put option element in select element
         helper.dom.appendChildNodeIO(optionEl1, selectElement2.children[0]);
         helper.dom.appendChildNodeIO(optionEl2, selectElement2.children[0]);

         //put select element in div
         helper.dom.appendChildNodeIO(selectElement2, myId);
         helper.dom.appendChildNodeIO(selectElement2, myId);



        /**
         * Adds child with inner HTML string text to parent with idName
         * @param {*} stringText 
         * @param {*} idName the id of the parent
         */
        function addInnerElement(doc, idName) {
            let stringText = doc.country;

            var innerElement = helper.dom.createElement("div");
            helper.dom.appendInnerHTMLIO(stringText, innerElement);

            var divElement = helper.dom.getElement("id", idName);
            helper.dom.appendChildNodeIO(innerElement, divElement);
        }




        function addInputElement(doc, idName) {
            let stringText = doc.country;
            var inputEl = helper.dom.createElement("input");
            helper.dom.setAttribute("type", "text", inputEl);
            helper.dom.setAttribute("placeholder", "fyll i text", inputEl);
            // helper.dom.appendInnerHTMLIO(stringText, inputEl);

            var divElement = helper.dom.getElement("id", idName);
            helper.dom.appendChildNodeIO(inputEl, divElement);
        }

        /**
         * 
         * @param {*} doc 
         * @param {string} idName 
         */
        function addDivInputElement(doc, idName) {
            let stringText = doc.country;
            //creates an input element
            var inputEl = helper.dom.createElement("input");
            helper.dom.setAttribute("type", "text", inputEl);
            helper.dom.setAttribute("placeholder", stringText, inputEl);

            //creates a button
            var buttonEl = helper.dom.createElement("input");
            helper.dom.setAttribute("type", "submit", buttonEl);
            helper.dom.setAttribute("value", "Add", buttonEl);
            helper.dom.setAttribute("data-docid", doc._id, buttonEl);
            buttonEl.addEventListener("click", function(event) {
                console.log(helper.dom.getAttribute("data-docid", event.target));
            });

            //creates a parent element
            var divEl = helper.dom.createElement("div");

            //adds child to parent
            helper.dom.appendChildNodeIO(inputEl, divEl);
            helper.dom.appendChildNodeIO(buttonEl, divEl);

            var divHolderEl = helper.dom.getElement("id", idName);
            helper.dom.appendChildNodeIO(divEl, divHolderEl);
        }



        //data som vi hämtar ifrån
        let testArray = [];
        testArray = [
            {
                text: "sadfölsakfj",
                id: "fredrik"
            },
            {
                text: "jaha",
                id: "fredrik"
            }
        ];

        fetchAll(db)
        .then((result) => manipulateArray(result.rows, addDivInputElement));

        function manipulateArray(resultArray, theFunction) {
            console.log(resultArray);
            resultArray.forEach((item) => {
                theFunction(item.doc, "fredrik")
            });
        }
        // manipulateArray(testArray, addInnerElement);
        // manipulateArray(testArray, addInputElement);
        // manipulateArray(testArray, addDivInputElement);






        let divFirstFormsBox = helper.dom.getElement("id", "first-forms-box"); 
        let divSecondFormsBox = helper.dom.getElement("id", "second-forms-box");
        let divThirdFormsBox = helper.dom.getElement("id", "third-forms-box");
        let divFourthFormsBox = helper.dom.getElement("id", "fourth-forms-box");
        
       
        let divCode = '<div class="form-box">\
        <div class="text-box">\
          <div class="text-block">Hyreskostnad</div>\
        </div>\
        <div class="form-block w-form">\
          <form id="email-form-2" name="email-form-2" data-name="Email Form 2" class="input-form"><input type="text" class="w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Enter your name" id="name-3"></form>\
          <div class="w-form-done">\
            <div>Thank you! Your submission has been received!</div>\
          </div>\
          <div class="w-form-fail">\
            <div>Oops! Something went wrong while submitting the form.</div>\
          </div>\
        </div>\
      </div>\
      <div class="form-box">\
        <div class="text-box">\
          <div class="text-block">Hyreskostnad</div>\
        </div>\
        <div class="form-block w-form">\
          <form id="email-form-2" name="email-form-2" data-name="Email Form 2" class="input-form"><input type="text" class="w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="Enter your name" id="name-3"></form>\
          <div class="w-form-done">\
            <div>Thank you! Your submission has been received!</div>\
          </div>\
          <div class="w-form-fail">\
            <div>Oops! Something went wrong while submitting the form.</div>\
          </div>\
        </div>\
      </div>'

      helper.dom.appendInnerHTMLIO(divCode, divFirstFormsBox);
      helper.dom.appendInnerHTMLIO(divCode, divSecondFormsBox);
      helper.dom.appendInnerHTMLIO(divCode, divThirdFormsBox);
      helper.dom.appendInnerHTMLIO(divCode, divFourthFormsBox);




      let dataChartArray = [];
      let chartDocs = [];
      dataChartArray = [
          {
              serie: 5,
              label: 2016
          },
          {
            serie: 6,
            label: 2014
        },
        {
            serie: 1,
            label: 2015
        },
        {
            serie: 5,
            label: 2018
        },
        {
            serie: 3,
            label: 2017
        }
      ]

     

      chartRecursive(dataChartArray);

      function chartRecursive(chartArray) {
         
          //Create doc and sets attributes
          let doc = {
              dbName: db.name,
              _id: new Date().toISOString(),
              written: new Date().toISOString(),
              chartData: chartArray[0],
              kind: "chart-data"
          };

        


          //adds to mydocs
          chartDocs.push(doc);
          //wait function
          setTimeout(function () {
              if (chartArray.length > 1) {
                  chartRecursive(chartArray.slice(1));
              } else {
                  console.log(chartDocs);
                  db.bulkDocs(chartDocs);
              }
          }, 1);

      };


      chartRecursive2(dataChartArray);

      function chartRecursive2(chartArray) {
         
          //Create doc and sets attributes
          let doc = {
              dbName: db.name,
              _id: new Date().toISOString(),
              written: new Date().toISOString(),
              chartid: chartArray[0],
              kind: "chart-id"
          };

        


          //adds to mydocs
          chartDocs.push(doc);
          //wait function
          setTimeout(function () {
              if (chartArray.length > 1) {
                  chartRecursive2(chartArray.slice(1));
              } else {
                  console.log(chartDocs);
                  db.bulkDocs(chartDocs);
              }
          }, 1);

      };

      function compare(a,b) {
        if (a.chartData.label < b.chartData.label)
          return -1;
        if (a.chartData.label > b.chartData.label)
          return 1;
        return 0;
      }
      
      

      db.createIndex({
        index: {fields: ['kind']}
      })
      .then((result) => {
        db.find({
            selector: {
                kind: {$eq: 'chart-data'}
            }
          })
      .then((selected) => {
        console.log("selected");
          console.log(selected.docs);
          console.log(selected.docs.sort(compare));



          let sortedLabels = selected.docs.map((item) => {
            return item.chartData.label;
         });

         let sortedSeries = selected.docs.map((item) => {
            return item.chartData.serie;
         });

         console.log("sortedSeries");
         console.log(sortedSeries);
         console.log(sortedLabels);
         
          var chartData = {

            labels: sortedLabels,

            series: [
                sortedSeries
            ]
            
        };
        var options = {high: 10,
            low: -10,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 4 === 0 ? value : null;
              }
            }
        }

        // var options = {
        //     width: 300,
        //     hight: 200
        // };

        new Chartist.Bar('.ct-chart', chartData, options);



      });
    });
      

        


     
        var chartData = {

            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

            series: [
                [4, 5, 7, 2, -1, -4],
                [1, 3, 5, 2, -2, -3]
            ]
        };
        var options = {high: 10,
            low: -10,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 4 === 0 ? value : null;
              }
            }
        }

        // var options = {
        //     width: 300,
        //     hight: 200
        // };

        new Chartist.Bar('.ct-chart', chartData, options);





















        
        db.sync(remoteCouch, { live: true, retry: true, conflicts: true, include_docs: true})
        .on('change', function (info) {
            
            info.syncTime = new Date().toISOString();
            log.push(info);


            if ((info.direction == "pull") && (info.change.docs.length < 2)) {
                console.log("Normal pull");
                // console.log(info);
                // console.log(info.change.docs[0]);
                info.change.docs.forEach((doc) => ChoosePulledOrExistingRev(doc));
                
            }

             else if ((info.direction == "pull") && (info.change.docs.length > 1)) {
                console.log("Bulk pull");
                //console.log(info);
                // console.log(info.change.docs);
                // myFunction(info.change.docs);
                info.change.docs.forEach((doc) => ChoosePulledOrExistingRev(doc));

            }

            else if ((info.direction == "push") && (info.change.docs.length < 2)) {
                console.log("Normal push");
                console.log(info);
            }

            else if ((info.direction == "push") && (info.change.docs.length > 1)) {
                console.log("Bulk push");
                console.log(info);

            }   
            else {
                console.log('NOT ANY OF THE PUSH AND PULLS');
            console.log(log);
            }


            //Done
            function getPreviousRev(latestDocRev) {
                //console.log(latestDocRev);
                
                let previousRev = (latestDocRev._revisions.ids.length - 1) + '-' + latestDocRev._revisions.ids[1];
                let id = latestDocRev._id;
                // console.log(oldRev);
                // console.log(oldId);
                return db.get(id, {rev: previousRev, include_docs: true});
            }


            //Done
            function fetchAllAndUpdate() {
                fetchAll(db)
                .then((docs) => displayList(docs, 'countries', db));
            }


            //Done
            function useExistingRev(latestDocRev) {
                getPreviousRev(latestDocRev)
                .then((previousDocRev) => {
                    console.log(previousDocRev);
                    latestDocRev.country = previousDocRev.country;
                    return db.put(latestDocRev);
                })
                .then(() => {
                    db.get(latestDocRev._id).then((latestDocRev) => console.log(latestDocRev));
                })
                .then(() => {
                    fetchAllAndUpdate();
                });
            }



            function ChoosePulledOrExistingRev(latestDocRev) {
                
                if (confirm("Do you want these? " + latestDocRev.country) == true) {
                    fetchAllAndUpdate(); 
                } else {
                    useExistingRev(latestDocRev);
                }
            }


            function displayConflicts(conflictingObjs) {
                console.log(conflictingObjs[0][0].conflict.name);
                
                let el = helper.dom.getElement('id', 'conflicts');

                helper.dom.appendInnerHTMLIO('', el);


                


                conflictingObjs.forEach(function(conflictingObj) {
                    let newInput = helper.dom.createElement('input');
                        helper.dom.setAttribute('type', 'radio', newInput);

                        newInput.addEventListener('click', function() {
                            console.log(conflictingObj[0].winner.rev);
                            Promise.all(conflictingObj.map(function(arrayEl) {
                                //return new Promise(function (resolve, reject) {
                                    return db.remove(conflictingObj[0].docId, arrayEl.conflict.rev);
                                }))
                                .then(function() {
                                    console.log('DONE');
                                    helper.dom.appendInnerHTMLIO('', el);
                                });
                            
                        });
                        helper.dom.appendChildNodeIO(newInput, el);
                        
                        let newBold = helper.dom.createElement('b');
                        helper.dom.appendInnerHTMLIO('Keep: ' + conflictingObjs[0][0].winner.name, newBold);
                        helper.dom.appendChildNodeIO(newBold, el);



                    conflictingObj.forEach(function(item) {
                        let newInput = helper.dom.createElement('input');
                        helper.dom.setAttribute('type', 'radio', newInput);
                        
                        newInput.addEventListener('click', function() {
                            console.log(item.conflict.rev);
                            Promise.all(conflictingObj.filter(function(element) {
                                    return element.conflict.rev != item.conflict.rev;
                                }).map(function(arrayEl) {
                                    //return new Promise(function (resolve, reject) {
                                        return db.remove(conflictingObj[0].docId, arrayEl.conflict.rev);
                                    }))
                                    .then(function() {
                                        return db.remove(conflictingObj[0].docId, conflictingObj[0].winner.rev);
                                    })
                                    .then(function() {
                                        console.log('DONE');
                                        helper.dom.appendInnerHTMLIO('', el);
                                    });
                                });




                        

                        helper.dom.appendChildNodeIO(newInput, el);
                        
                        let newBold = helper.dom.createElement('b');
                        helper.dom.appendInnerHTMLIO('Keep: ' + item.conflict.name, newBold);
                        helper.dom.appendChildNodeIO(newBold, el);

                    });
                });

              

                
                
                
            }
            


            function getConflictRows(docs) {
                console.log(docs);
                return docs['rows'].filter(function(row) {
                    return row.doc._conflicts;
                });
            }


            function getConflictingObjs(conflictRows, db) {
                return new Promise(function (resolve, reject) {

                    Promise.all(conflictRows.map(function(conflictRow) {
                        return getRevisions(conflictRow.doc.country, conflictRow.doc.written, conflictRow.doc._rev, conflictRow.doc._conflicts, conflictRow.doc._id, db);
                    })).then((results) => {
                        resolve(results);
                    });
                });
                
            }


            function getRevisions(winnerName, winnerWritten, winnerRev, conflictingRevs, docId, db) {
                console.log(conflictingRevs);
                return new Promise(function(resolve, reject) {
                    Promise.all(conflictingRevs.map(function(conflictingRev) {
                        return db.get(docId, {rev: conflictingRev}).then(function(doc) {
                            console.log(doc);
                            return {
                                winner: {
                                    name: winnerName,
                                    written: winnerWritten,
                                    rev: winnerRev
                                },
                                conflict: {
                                    name: doc.country,
                                    written: doc.written,
                                    rev: doc._rev
                                },
                                docId: docId
                            };
                        });
                    })).then((results) => resolve(results));
                });
                
            }


            function deleteRevision(rev, docId, db) {
                db.remove(docId, rev);
            }



            //fetchAll(db).then((countries) => displayList(countries, 'countries', db));

            fetchAll(db)
            .then((countries) => displayList(countries, 'countries', db))
            .then(() => db.sync(remoteCouch, { conflicts: true, include_docs: true}))
            .then(function() {
                console.log('sy');
                fetchAll(db).then((countries) => displayList(countries, 'countries', db));
            });


          }).on('paused', function (info) {
        //     //console.log(new Date().toISOString());
                console.log('PAUSED');
          }).on('active', function () {
            console.log('ACTIVE');
            // replicate resumed (e.g. new changes replicating, user went back online)
          }).on('denied', function (err) {
            console.log('DENIED');
            // a document failed to replicate (e.g. due to permissions)
          }).on('complete', function (info) {
            console.log('COMPLETE');
            // handle complete
          }).on('error', function (err) {
            console.log('ERROR');
            // handle error
          });

        fetchAll(db)
        .then((countries) => displayList(countries, 'countries', db))
        .then(() => db.sync(remoteCouch, { conflicts: true, include_docs: true}))
        .then(function() {
            console.log('sy');
            fetchAll(db).then((countries) => displayList(countries, 'countries', db));
        });

        // console.log(db);
        // navigator.serviceWorker.ready.then(function(registration) {
        //     registration.sync.register('kittens').then(() => {
        //         console.log('Sync registered');
        //         //console.log('tags: ', registration.sync.getTags());
        //         console.log('SYNKED');
                
                
        //     });
        // });
        
        

        document.getElementById('add-button').addEventListener('click', function () {
            postAndReload('countries', db);
        });



           //DONE     
        function postAndReload(domId, db) {
            getValueFromField('', 'add-name')
            .then((value) => postDoc(value, db))
            .catch(function() {
                console.log('error');
            });
        }


            //DONE
            /**
             * Creates a document with id, country, written
             * @param {*} value 
             * @param {*} db 
             */
        function postDoc(value, db) {
            return new Promise(function(resolve, reject) {
                let doc = {
                    dbName: db.name,
                    _id: new Date().toISOString(),
                    country: value,
                    written: new Date().toISOString(),
                    kind: "country"
                    };
                resolve(db.put(doc));   
            });      
        }
        


        
        //Done
        function putAndReload(docId, id, db) {
            getValueFromField('editField-', docId)
            .then((value) => putDoc(value, docId, db))

            .catch(function() {
                console.log('error');
            });
        }

        //DONE
        function putDoc(newValue, docId, db) {
            return getDoc(docId, db)
                .then((doc) => editDoc(doc, newValue, db))
                .catch((err) => console.log(err));  
        }

        //DONE
        function getDoc(docId, db) {
            return db.get(docId, {
                conflicts: true,
                include_docs: true
            });      
        }

        function fetchAll(db) {
            return db.allDocs({
                include_docs: true,
                conflicts: true
            });  
      }

        //DONE
        function editDoc(doc, newValue, db) {
            return new Promise(function(resolve, reject) {
                doc.country = newValue;
                doc.written = new Date().toISOString();
                resolve(db.put(doc));   
            });      
        }

        function deleteDoc(docId, db) {
            return getDoc(docId, db)
                .then((doc) => removeDoc(doc, db));    
        }


        //DONE
        function removeDoc(doc, db) {
            return new Promise(function(resolve, reject) {
                doc._deleted = true;
                doc.written = new Date().toISOString();
                resolve(db.put(doc));  
            });      
        }


        //DONE
        function deleteAndReload(docId, id, db) {
            deleteDoc(docId, db)



            .catch(function() {
                console.log('error');
            });
        }



        

        
        //DONE
        function getValueFromField(domIdPrefix, domIdSuffix) {
            return new Promise(function(resolve, reject) {
                var el = document.getElementById(domIdPrefix + domIdSuffix);
                var value = el.value;
                if (value) {
                    el.value = '';
                    resolve(value);
                }
            });
        }








        function isEmpty(obj) {
            for(var prop in obj) {
                if(obj.hasOwnProperty(prop))
                    return false;
            }
        
            return true;
        }



        function chooseWinner(conflictObj) {
            return new Promise(function (resolve, reject) {

                if (!isEmpty(conflictObj)) {
                    var el = helper.dom.getElement('id', 'conflicts');
                    el.innerHTML = '';
        
                    let wrapperDiv = helper.dom.createElement('div');
                    let lableDiv = helper.dom.createElement('div');
                    let newButton = helper.dom.createElement('button');
        
        
                    helper.dom.setAttribute('data-rev', conflictObj.winner.rev, newButton);
                    helper.dom.setAttribute('data-id', conflictObj.winner.id, newButton);

                    newButton.addEventListener('click', function (event) {
                        console.log(event.target);
                        el.innerHTML = '';
                        db.remove(event.target.getAttribute('data-id'), event.target.getAttribute('data-rev')).then(function() {
                            fetchAll(db).then((countries) => displayList(countries, 'countries', db));
                        });
                    });

                    helper.dom.appendInnerHTMLIO('Remove: ' + conflictObj.winner.name, newButton);

                    helper.dom.appendInnerHTMLIO('WINNER', lableDiv);

                    helper.dom.appendChildNodeIO(lableDiv, wrapperDiv);
                    helper.dom.appendChildNodeIO(newButton, wrapperDiv);
                    helper.dom.appendChildNodeIO(wrapperDiv, el);

                    wrapperDiv = helper.dom.createElement('div');
                    lableDiv = helper.dom.createElement('div');
                    helper.dom.appendInnerHTMLIO('LOOSERS', lableDiv);
                    helper.dom.appendChildNodeIO(lableDiv, wrapperDiv);

                    console.log(conflictObj.loosers);

                    console.log(conflictObj.loosers[0].rev);


                    Promise.all(conflictObj.loosers.map(function(item) {
                        return new Promise(function(resolve, reject) {
                            console.log('in loosers');
                            console.log(item);
                            let newButton = helper.dom.createElement('button');
                
                            helper.dom.setAttribute('data-rev', item.rev, newButton);
    
                            helper.dom.setAttribute('data-id', conflictObj.winner.id, newButton);
    
                            newButton.addEventListener('click', function (event) {
                                console.log(event.target);
                                el.innerHTML = '';
                                db.remove(event.target.getAttribute('data-id'), event.target.getAttribute('data-rev')).then(function() {
                                    fetchAll(db).then((countries) => displayList(countries, 'countries', db));
                                });
                            });
    
                            helper.dom.appendInnerHTMLIO('Remove: ' + item.name, newButton);
    
                            helper.dom.appendChildNodeIO(newButton, wrapperDiv);


                            resolve();

                            
                        });
                        


                        
                        

                    })).then(function() {
                        helper.dom.appendChildNodeIO(wrapperDiv, el);
                        console.log('object NOT empty');
                        resolve();
                    });

                    



                }


                if (isEmpty(conflictObj)) {
                    console.log('object empty');
                    resolve();
                }
                





                
            });
            
        }
        




        function conflictSolver(doc) {
            return new Promise(function (resolve, reject) {
                
                let conflictObj = {};
                if (doc._conflicts) {
                    console.log(doc._conflicts);

                    

                    conflictObj.id = doc._id;
                    conflictObj.winner = {
                        dbName: doc.dbName,
                        id: doc._id,
                        name: doc.country,
                        rev: doc._rev
                    };
                    conflictObj.loosers = [];

                    console.log(conflictObj);


                    //FIX SIMILAR IDS
                    
                        // 
                        //     newDiv.innerHTML = '<div>' + doc.country + '</div><button data-rev="' + doc._rev + '" id="' + "rev-" + doc._id + '">Remove Conflict</button>';
                        //     newDiv.children[1].addEventListener('click', function (event) {
                        //         console.log(event.target);
                        //         db.remove(event.target.getAttribute('id').slice(4), event.target.getAttribute('data-rev'));
                        //     });

                        //     el.appendChild(newDiv);

                        Promise.all(doc['_conflicts'].map(function(element) {
                            return new Promise(function (resolve, reject) {
                                db.get(doc._id, {rev: element}).then(function (docItem) {
                                    let tempObj = {};
                                    tempObj.dbName = docItem.dbName;
                                    tempObj.id = docItem._id;
                                    tempObj.name = docItem.country;
                                    tempObj.rev = docItem._rev;

                                    console.log('tempObj');
                                    console.log(tempObj);


                                    resolve(tempObj);
        
                                    //conflictObj.loosers.push(tempObj);
        
                                    //console.log(conflictObj.loosers);
                                    
                        
                                    // let newDiv = helper.dom.createElement('div');
        
                                    // newDiv.innerHTML = docItem._rev;
                                    // //newDiv.innerHTML = '<div>' + doc.country + '</div><button data-rev="' + docItem._rev + '" data-id="' + "rev-" + docItem._id + '">Remove Conflict</button>';
                                    // // newDiv.children[1].addEventListener('click', function (event) {
                                    // //     console.log(event.target);
                                    // //     db.remove(event.target.getAttribute('data-id').slice(4), event.target.getAttribute('data-rev'));
                                    // // });
        
                                    // el.appendChild(newDiv);
                                    // console.log(docItem);
                                    
                                }).catch(function (err) {
                                    console.log('in the catch');
                                });

                            });
                        })).then(function(loosersAr) {
                            console.log('loosersAr');
                            console.log(loosersAr);
                            conflictObj.loosers = loosersAr;
                            resolve(conflictObj);
                        });
  
                } else {
                    resolve(conflictObj);
                }


                
            });
        }



        




        // let el = helper.dom.getElement('id', 'conflicts');

        // helper.dom.appendInnerHTMLIO('', el);

        // fetchAll(db)
        // .then((docs) => getConflictRows(docs))
        // // .then((conflictingObjs) => {
        // //     console.log(conflictingObjs);
        // // });
        // .then((conflictRows) => getConflictingObjs(conflictRows, db))
        // .then((conflictingObjs) => {
        //     console.log(conflictingObjs);
        //     if (!isEmpty(conflictingObjs)) {
        //         displayConflicts(conflictingObjs);
        //     }
            
        // });












        
        

        
        /// SKA BARA GÖRA EN RAD I TAGET - ÄDRA ÄVEN FRÅN TABLE TILL DIV
        function displayList(countries, id, db) {
            // console.log('db');
            // console.log(db);
            //var el = document.getElementById(id);
            var el = helper.dom.getElement('id', id);
        
            let data = '';
            el.innerHTML = data;
            if (countries.rows.length > 0) {
                for (var i = 0; i < countries.rows.length; i++) {
                    let data = '';
        
                    data += '<td>' + countries.rows[i].doc.country + '</td>';
                    data += '<td><input type="text" id="' + "editField-" + countries.rows[i].doc._id + '"><button id="' + "editButton-" + countries.rows[i].doc._id + '">Edit</button></td>';
                    data += '<td><input type="text" id="' + "deleteField-" + countries.rows[i].doc._id + '"><button id="' + "deleteButton-" + countries.rows[i].doc._id + '">Delete</button></td>';
                
                    let tblrow = helper.dom.createElement('tr');
                    tblrow.innerHTML = data;
                    //el.innerHTML += data;
        
                    let editField = tblrow.children[1].children[0];
                    let editButton = tblrow.children[1].children[1];
                
                    editButton.addEventListener('click', function () {
                        //console.log('db in event listener');
                        //console.log(db);
                        putAndReload(editField.getAttribute('id').slice(10), 'countries', db);
                    });
                
                
                    let deleteField = tblrow.children[2].children[0];
                    let deleteButton = tblrow.children[2].children[1];
                
                    deleteButton.addEventListener('click', function () {
                        deleteAndReload(deleteField.getAttribute('id').slice(12), 'countries', db);
                    });
                
                    //console.log(tblrow.children[0].children[1].children[0].getAttribute('id'));
                
                    el.appendChild(tblrow);
                }
            }
        
            
            return el;
        }






    });


    


    

    
    

    
    
    
    
    
    
    























    document.getElementById("first").innerHTML = '<h1>Paragraph changed!</h1>';
    console.log("YO!!!!");

    // fetch('/images/testimage.jpg')
	// .then(function(response) {
    //     console.log("hej!!!!");
	//   return response.blob();
	// })
	// .then(function(imageBlob) {
    //     document.getElementById("second").src = URL.createObjectURL(imageBlob);
    // });

    var bearEntry = document.createElement("input");
    bearEntry.setAttribute('type', 'text');
    bearEntry.setAttribute('value', 'default');
    bearEntry.setAttribute('id', 'bearinput');


    document.getElementById('first').appendChild(bearEntry);

    var bearButton = document.createElement("button");
    bearButton.setAttribute("type", "submit");

    bearButton.addEventListener('click', function() {
        
        
        console.log(document.getElementById('bearinput').value);

        var payload = {
            author: document.getElementById('bearinput').value
        };

          fetch("/api/blog", {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }).then((res) => {
            console.log('resp in main');
             return res.json()})
            //  .then((data) => {
            //      return new Promise(function(resolve, reject) {
            //         console.log('data: ',data);
            //         navigator.serviceWorker.ready.then(function(registration) {
            //             registration.sync.register("message-queue-sync");
            //           });
            //     resolve(data);
            //      });
                 
            //     })
        .then((data) => {
            document.getElementById('sixth').innerHTML = JSON.stringify(data);
            })
            .catch(function (e) {
                document.getElementById('sixth').innerHTML = e;
            });


            navigator.serviceWorker.ready.then(function(registration) {
                registration.sync.register('/blog/post/waiting').then(() => {
                    console.log('Sync registered');
                    console.log('tags: ', registration.sync.getTags());
                });
            });
    });

    document.getElementById('first').appendChild(bearButton);




    var deleteEntry = document.createElement("input");
    deleteEntry.setAttribute('type', 'text');
    deleteEntry.setAttribute('value', 'default');
    deleteEntry.setAttribute('id', 'deleteinput');


    document.getElementById('delete').appendChild(deleteEntry);

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "submit");

    deleteButton.addEventListener('click', function() {
        console.log(document.getElementById('deleteinput').value);

        var payload = {
            id: document.getElementById('deleteinput').value
        };

          fetch("/api/blog/" + payload.id, {
            method: 'DELETE',
            //body: JSON.stringify(payload),
            // headers: {
            //   'Content-Type': 'application/json',
            //   'Accept': 'application/json'
            // }
          }).then((res) => {
            console.log('res');
             return res.json()})
        .then((data) => {
            document.getElementById('seventh').innerHTML = JSON.stringify(data);
            }).catch(function (e) {
                document.getElementById('seventh').innerHTML = e;
            });
    });

    document.getElementById('delete').appendChild(deleteButton);








    
    var elem = document.createElement("img");

    elem.src = '/images/testimage.jpg';

    document.getElementById("second").appendChild(elem);

    // fetch('http://localhost:4000/api/bea/5a3c4134b5f523b1617c60ed')
    // .then((res) => { return res.json()})
    // .then((data) => { 
    //     document.getElementById('third').innerHTML = JSON.stringify(data);
    //     }).catch(function (e) {
    //         document.getElementById('third').innerHTML = e;
    //     });


        fetch('http://localhost:4000/api/interest/1')
    .then((res) => {
        console.log('res');
         return res.json()})
    .then((data) => {
        document.getElementById('fourth').innerHTML = JSON.stringify(data);
        }).catch(function (e) {
            document.getElementById('fourth').innerHTML = e;
        });

        fetch('http://localhost:4000/api/blog')
        .then((res) => { return res.json()})
        .then((data) => { 
            document.getElementById('fifth').innerHTML = JSON.stringify(data);
            }).catch(function (e) {
                document.getElementById('fifth').innerHTML = e;
            });



}, false);






            //     navigator.serviceWorker.ready.then(function(registration) {
            //         registration.sync.register(syncName).then(() => {
            //             console.log('Sync registered');
            //             //console.log('tags: ', registration.sync.getTags());
            //             console.log('SYNKED');
            //             fetchAll(db).then((countries) => displayList(countries, 'countries', db));
            //         });
            //     });


                    //     .then((result) => {
        //         console.log('RESULT');
        //         console.log(result);
        //         fetchAll(db)
        //         .then((countries) => displayList(countries, id, db))
        //         .then(() => db.sync(remoteCouch, {conflicts: true, include_docs: true}))
        //         .then(function(item) {
        //           console.log('ITEM');
        //           console.log(item);
        //         })
        //         .then(function() {
        //           db.get(itemId, {rev: result.rev, conflicts: true}).then(function(doc) {
        //               console.log('HERE!!');
        //               console.log(doc);
        //               return conflictSolver(doc)
        //               .then((conflictObj) => chooseWinner(conflictObj))
        //               .then(() => fetchAll(db))
        //               .then((countries) => displayList(countries, 'countries', db));
        //           });
        //         });
        //   });


         // //appends only if myChildTest != null
        // if (helper.boolean.isDefined(myChildTest)) {

        //   helper.dom.appendChildNodeIO(myChildTest, myId);

        // }