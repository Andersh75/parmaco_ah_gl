



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


        // let testObject = {};
        // testObject = {
        //     element: "button",
        //     attribute: [
        //         {
        //             key: "id",
        //             value: "1235456"
        //         },
        //         {
        //             key: "type",
        //             value: "button"
        //         },
        //         {
        //             key: "value",
        //             value: "minText"
        //         }
        //     ],
        //     style: [
        //         {
        //             key: "backgroundColor",
        //             value: "red"
        //         },
        //         {
        //             key: "color",
        //             value: "blue"
        //         },
        //         {
        //             key: "border",
        //             value: "thick solid black"
        //         }
                
        //     ],
        //     textNode: [
        //         {
        //             key: "text",
        //             value: " textNode text"
        //         },
        //         {
        //             key: "text",
        //             value: " textNode text2"
        //         }
        //     ],

        //     event: [
        //         {
        //             key: "click",
        //             value: console.log("hejEvent")
        //         }
        //     ]
        // }



        // let testObject2 = [];
        // testObject2 = [
        //     {
        //         element: "button",
        //         attribute: [
        //             {
        //                 key: "id",
        //                 value: "1235456"
        //             },
        //             {
        //                 key: "type",
        //                 value: "button"
        //             },
        //             {
        //                 key: "value",
        //                 value: "minText"
        //             }
        //         ],
        //         style: [
        //             {
        //                 key: "backgroundColor",
        //                 value: "red"
        //             },
        //             {
        //                 key: "color",
        //                 value: "blue"
        //             },
        //             {
        //                 key: "border",
        //                 value: "thick solid black"
        //             }
                    
        //         ],
        //         textNode: [
        //             {
        //                 key: "text",
        //                 value: " textNode text"
        //             },
        //             {
        //                 key: "text",
        //                 value: " textNode text2"
        //             }
        //         ],
    
        //         event: [
        //             {
        //                 key: "click",
        //                 value: console.log("hejEvent")
        //             }
        //         ]
        //     },

        //     {
        //         element: "button",
        //         attribute: [
        //             {
        //                 key: "id",
        //                 value: "31235"
        //             },
        //             {
        //                 key: "type",
        //                 value: "button"
        //             },
        //             {
        //                 key: "value",
        //                 value: "minText2"
        //             }
        //         ],
        //         style: [
        //             {
        //                 key: "backgroundColor",
        //                 value: "green"
        //             },
        //             {
        //                 key: "color",
        //                 value: "blue"
        //             },
        //             {
        //                 key: "border",
        //                 value: "thick solid black"
        //             }
                    
        //         ],
        //         textNode: [
        //             {
        //                 key: "text",
        //                 value: " textNode text"
        //             },
        //             {
        //                 key: "text",
        //                 value: " textNode text2"
        //             }
        //         ],
    
        //         event: [
        //             {
        //                 key: "click",
        //                 value: console.log("hejEvent")
        //             }
        //         ]
        //     }

        // ]
        

        // let myId = helper.dom.getElement("id", "fredrik");
        // let myChildTest = helper.dom.elementBuilder(testObject);

        // console.log(myChildTest);

        // let elementFirst = helper.dom.elementBuilder(testObject);
        // let elementSecond = helper.dom.elementBuilder(testObject);

        // helper.dom.appendChildNodeIO(elementFirst, myId);
        // helper.dom.appendChildNodeIO(elementSecond, myId);




        // testObject2.forEach(function(item) {
        //     let element = helper.dom.elementBuilder(item);
        //     helper.dom.appendChildNodeIO(element, myId);

        // })





       
       // let elementsOfKind = []; //elements with only one element kind
       
       
    
        //elementsOfKind = helper.dom.selectAllElementsByAttribute('[kind-rent]');


        //updateDBWithElementValue(elementsOfKind, 'rent', serializedNonsensFunction);





          
        // function updateFromDataKindElements(elements, dataKind, serializedFunction) {


        //     let docs = [];

        //     updateFromDataKindElsRecursive(elements, dataKind, serializedFunction);

           
        //     function updateFromDataKindElsRecursive(elements, dataKind, serializedFunction) {
        //         let dbId = helper.dom.getAttribute('db-id', elements[0]);

        //         console.log('dbID: ', dbId);

        //         if (dbId === "") {

        //             //sets value to 1
        //             // helper.dom.setAttribute("value", 1, elements[0]);

        //             //prepares for database
        //             let doc = {
        //                 dbName: db.name,
        //                 _id: new Date().toISOString(),
        //                 elementId: helper.dom.getAttribute('id', elements[0]),
        //                 elementValue: "hejjjj",
        //                 elementFunction: serializedFunction,
        //                 written: new Date().toISOString(),
        //                 kind: dataKind
        //             };

        //             //pushes the update into document
        //             docs.push(doc);

        //             //Sets database document id on element
        //             helper.dom.setAttribute("db-id", doc._id, elements[0]);
        //         } else {
        //             //gets doc from db and updates element from DOM value...
        //             console.log('dbID: ', dbId);

        //             let doc = getDoc(dbId, db)
        //                 .then((doc) => {
        //                     //updates document value on database
        //                     doc.elementValue = "redefined";
        //                     //updates written 
        //                     doc.written = new Date().toISOString();
        //                     return doc;
        //                 })
        //                 .then((doc) => {
        //                     console.log(doc);
        //                     docs.push(doc);   
        //                 });
        //             //pushes the update into document
                    

        //         }

        //         setTimeout(function () {
        //             if (elements.length > 1) {
        //                 //removes first element and takes the rest
        //                 updateFromDataKindElsRecursive(elements.slice(1));
        //             } else {
        //                 console.log('docs: ', docs);
        //                 db.bulkDocs(docs)
        //                 .then((docs) => {
        //                     console.log(docs);
        //                 });
        //             }
        //         }, 1);

        //     };

        // }



        // setTimeout(function () {
        //    console.log("hej");
        //    //Array selected from data-cell attribute
        //     elementsOfKind = [].slice.call(document.querySelectorAll('[data-cell]'));
        //     let dataCellId = helper.dom.getAttribute("dbId", elementsOfKind[0]);
        //     console.log("datacellID: ", dataCellId);

        //     db.get(dataCellId)
        //     .then(function(doc) {

        //         console.log(doc);
        //         console.log(doc.adderfunction);

        //         //Converts document function from string to usabel function
        //         let testSerial = helper.functions.deSerialize(doc.adderfunction);

        //         console.log(testSerial(3, 5));
        //         //dataCellArray[1].value = 3;
        //         //dataCellArray[2].value = 4;
        //         console.log(elementsOfKind[1]);
        //         console.log(helper.dom.getAttribute("value", elementsOfKind[1]));

                
        //         elementsOfKind[0].value = testSerial(Number(helper.dom.getAttribute("value", elementsOfKind[1])), Number(helper.dom.getAttribute("value", elementsOfKind[2])));
        //     })
        // }, 3000);


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

       //let deSerialNonsensFunction = helper.functions.deSerialize(serializedNonsensFunction);


               // console.log(db);


        // fetchAll(db)
        //     .then((docs) => {
        //         return docs.rows;
        //     })
        //     //array from db. Return array with element infos
        //     .then((rows) => {
        //         console.log(rows);
        //         return helper.dom.constructElementInfoFromDb(rows);
        //     })
        //     //make div elements from element infos
        //     .then((elementInfos) => {
        //         let builtElements = elementInfos.map((elementInfo) => {

        //             return helper.dom.elementBuilder(elementInfo);
        //         });

        //         return builtElements;
        //     })
        //     //attach div elements to div parent
        //     .then((builtElements) => {
        //         helper.dom.appendBuiltElementsOnId(builtElements, "eight");
        //     });



            
    


        //     let selectElement = helper.dom.createElement("select");
        //     let opitionElement1 = helper.dom.createElement("option");
        //     let opitionElement2 = helper.dom.createElement("option");
            

        //     helper.dom.setAttribute("label", "myLable1", opitionElement1);
        //     helper.dom.setAttribute("label", "myLable2", opitionElement2);

        //     helper.dom.setAttribute("text", "mytext1", opitionElement1);
        //     helper.dom.setAttribute("text", "mytext2", opitionElement2);

        //     helper.dom.setAttribute("value", "myvalue1", opitionElement1);
        //     helper.dom.setAttribute("value", "myvalue2", opitionElement2);

            

        //     helper.dom.appendChildNodeIO(opitionElement1, selectElement);
        //     helper.dom.appendChildNodeIO(opitionElement2, selectElement);

        //     //get div id info
        //     let myIdSelect = helper.dom.getElement("id", "fredrik");
        //     //put DOM obj in div
        //     helper.dom.appendChildNodeIO(selectElement, myIdSelect);

        //     console.log(selectElement);



        // let optionInfo1 = new helper.dom.ElementInfoConstructor();
        // optionInfo1.element = "option";

        // optionInfo1.attribute.push({
        //     key: "label",
        //     value: "nonsens1"
        // });

        // let optionInfo2 = new helper.dom.ElementInfoConstructor();
        // optionInfo2.element = "option";

        // optionInfo2.attribute.push({
        //     key: "label",
        //     value: "nonsens2"
        // });

        // let selectInfo1 = new helper.dom.ElementInfoConstructor();
        // selectInfo1.element = "select";



        //  //create a DOM object
        //  let optionEl1 = helper.dom.elementBuilder(optionInfo1);
        //  console.log(optionEl1);

        //  let optionEl2 = helper.dom.elementBuilder(optionInfo2);
        //  console.log(optionEl2);

        //  //get div id info
        //  let myId = helper.dom.getElement("id", "fredrik");

        //  //create select element
        //  let selectElement2 = helper.dom.elementBuilder(selectInfo1);
        //  //put option element in select element
        //  helper.dom.appendChildNodeIO(optionEl1, selectElement2.children[0]);
        //  helper.dom.appendChildNodeIO(optionEl2, selectElement2.children[0]);

        //  //put select element in div
        //  helper.dom.appendChildNodeIO(selectElement2, myId);
        //  helper.dom.appendChildNodeIO(selectElement2, myId);



        // /**
        //  * Adds child with inner HTML string text to parent with idName
        //  * @param {*} stringText 
        //  * @param {*} idName the id of the parent
        //  */



        // function addInnerElement(doc, idName) {
        //     let stringText = doc.country;

        //     var innerElement = helper.dom.createElement("div");
        //     helper.dom.appendInnerHTMLIO(stringText, innerElement);

        //     var divElement = helper.dom.getElement("id", idName);
        //     helper.dom.appendChildNodeIO(innerElement, divElement);
        // }




        // function addInputElement(doc, idName) {
        //     let stringText = doc.country;
        //     var inputEl = helper.dom.createElement("input");
        //     helper.dom.setAttribute("type", "text", inputEl);
        //     helper.dom.setAttribute("placeholder", "fyll i text", inputEl);
        //     // helper.dom.appendInnerHTMLIO(stringText, inputEl);

        //     var divElement = helper.dom.getElement("id", idName);
        //     helper.dom.appendChildNodeIO(inputEl, divElement);
        // }

        // /**
        //  * 
        //  * @param {*} doc 
        //  * @param {string} idName 
        //  */
        // function addDivInputElement(doc, idName) {
        //     let stringText = doc.country;
        //     //creates an input element
        //     var inputEl = helper.dom.createElement("input");
        //     helper.dom.setAttribute("type", "text", inputEl);
        //     helper.dom.setAttribute("placeholder", stringText, inputEl);

        //     //creates a button
        //     var buttonEl = helper.dom.createElement("input");
        //     helper.dom.setAttribute("type", "submit", buttonEl);
        //     helper.dom.setAttribute("value", "Add", buttonEl);
        //     helper.dom.setAttribute("data-docid", doc._id, buttonEl);
        //     buttonEl.addEventListener("click", function(event) {
        //         console.log(helper.dom.getAttribute("data-docid", event.target));
        //     });

        //     //creates a parent element
        //     var divEl = helper.dom.createElement("div");

        //     //adds child to parent
        //     helper.dom.appendChildNodeIO(inputEl, divEl);
        //     helper.dom.appendChildNodeIO(buttonEl, divEl);

        //     var divHolderEl = helper.dom.getElement("id", idName);
        //     helper.dom.appendChildNodeIO(divEl, divHolderEl);
        // }



        // //data som vi hämtar ifrån
        // let testArray = [];
        // testArray = [
        //     {
        //         text: "sadfölsakfj",
        //         id: "fredrik"
        //     },
        //     {
        //         text: "jaha",
        //         id: "fredrik"
        //     }
        // ];

        // fetchAll(db)
        // .then((result) => manipulateArray(result.rows, addDivInputElement));

        // function manipulateArray(resultArray, theFunction) {
        //     console.log(resultArray);
        //     resultArray.forEach((item) => {
        //         theFunction(item.doc, "fredrik")
        //     });
        // }
        // // manipulateArray(testArray, addInnerElement);
        // // manipulateArray(testArray, addInputElement);
        // // manipulateArray(testArray, addDivInputElement);



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



// let el = helper.dom.getElement('id', 'conflicts');

// helper.dom.appendInnerHTMLIO('', el);

// helper.pouch.fetchAll(db)
// .then((docs) => helper.pouch.getConflictRows(docs))
// // .then((conflictingObjs) => {
// //     console.log(conflictingObjs);
// // });
// .then((conflictRows) => getConflictingObjs(conflictRows, db))
// .then((conflictingObjs) => {
//     console.log(conflictingObjs);
//     if (!helper.boolean.isEmpty(conflictingObjs)) {
//         displayConflicts(conflictingObjs);
//     }

// });
