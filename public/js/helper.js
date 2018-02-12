var helper = {};
(function() {


    // Map, Reduce, Filter...
    
    //DONE
    this.map = my.curry(function(callback, array) {
        var newArray = [];
        for (var i = 0; i < array.length; i = i + 1) {
            newArray[i] = callback(array[i], i);
        }
        return newArray;
    });

    //DONE
    this.reduce = my.curry(function(callback, initialValue, array) {
        var working = initialValue;
        //console.log('array:', typeof(initialValue));
        for (var i = 0; i < array.length; i = i + 1) {
            working = callback(working, array[i]);
            //console.log('working: ', working);
        }
        return working;
    });


    //Functions
    this.functions = {

        //DONE
        serialize: my.curry(function(newFunction) {
           return JSON.stringify(newFunction, function (key, value) {
            if (typeof value === 'function') {
                return value.toString();
            }
            return value;
        })}),

        //DONE
        deSerialize: my.curry(function(newFunctionString) {
           return JSON.parse(newFunctionString, function (key, value) {

            if (value
    
                &&
                typeof value === "string"
    
                &&
                value.substr(0, 8) == "function") {
    
                var startBody = value.indexOf('{') + 1;
    
                var endBody = value.lastIndexOf('}');
    
                var startArgs = value.indexOf('(') + 1;
    
                var endArgs = value.indexOf(')');
    
    
    
                return new Function(value.substring(startArgs, endArgs)
    
                    , value.substring(startBody, endBody));
    
            }
    
            return value;
    
        })})
    };



    //Booleans
    this.boolean = {

        //DONE
        //Null, undefined, empty array, empty object, empty string = empty
        isEmpty: my.curry(function(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }
            if(typeof(obj) === "boolean") {
                return false;
            }
        
            return true;
        }),

        //DONE
        isEven: my.curry(function(x) {
            return (x % 2 === 0);
        }),

        //DONE
        isDefined: my.curry(function(item) {
            return (typeof item !== 'undefined')
        })
    };



    //Strings
    this.str = {

        //DONE
        /**
         * Adds a string to an accumulated string
         */
        adder: my.curry(function(acc, nextString) {
            return acc + nextString;
        }),

        //DONE
        /**
         * Tries if the last character is equal to the test character
         */
        endsWith: my.curry(function(str, test) {
            return str.substring(str.length - 1) === test;
        }),

        //DONE
        /**
         * Tries if the first character is equal to the test character
         */
        startsWith: my.curry(function(str, test) {
            return str.substring(0,2) === test;
        }),

        //DONE
        /**
         * Returns the first word from a string
         */
        getFirstWordFromString: my.curry(function(str) {
            return str.split(" ").slice(0, 1).join(" ");
        }),

        //DONE
        /**
         * Returns first word from a string using splitter
         */
        getFirstWordFromStringUsingSpliter: my.curry(function(str, splitter) {
            return str.split(splitter).slice(0, 1).join(" ");
        }),

        //DONE
        /**
         * Returns the last word from a string
         */
        getLastWordFromString: my.curry(function(str) {
            return str.split(" ").pop();
        }),

        //DONE
        /**
         * Returns the last word from a string using splitter
         */
        getLastWordFromStringUsingSpliter: my.curry(function(str, splitter) {
            return str.split(splitter).pop();
        }),

        //DONE
        /**
         * Returns the first words from a string
         */
        getFirstWordsFromString: my.curry(function(str, count) {
            return str.split(" ").slice(0, count).join(" ");
        }),

        //DONE
        /**
         * Returns the first words from a string using splitter
         */
        getFirstWordsFromStringUsingSplitter: my.curry(function(str, count, splitter) {
            return str.split(splitter).slice(0, count).join(splitter);
        }),

        //DONE
        /**
         * Returns the last words from a string
         */
        getLastWordsFromString: my.curry(function(str, count) {
            return str.split(" ").slice(count, str.length).join(" ");
        }),

        //DONE
        /**
         * Returns the last words from a string
         */
        getLastWordsFromStringUsingSplitter: my.curry(function(str, count, splitter) {
            return str.split(splitter).slice(count, str.length).join(splitter);
        }),

        //DONE
        /**
         * Removes first word from a string and returns the rest
         */
        removeFirstWordFromString: my.curry(function(str) {
            return str.split(" ").slice(1).join(" ");
        }),

        //DONE
        /**
         * Removes first word from a string and returns the rest
         */
        removeFirstWordFromStringUsingSplitter: my.curry(function(str, splitter) {
            return str.split(splitter).slice(1).join(" ");
        }),

        //DONE
        /**
         * Removes the last word from at string and returns the mod string
         */
        removeLastWordFromString: my.curry(function(str) {
            //var shortStr = str.split(" ").pop();
            var strArr = str.split(" ");
            strArr.pop();
            var newStr = strArr.join(" ");
            return newStr;
        }),

        //DONE
        /**
         * Removes the last word from at string and returns the mod string
         */
        removeLastWordFromStringUsingSplitter: my.curry(function(str, splitter) {
            //var shortStr = str.split(" ").pop();
            var strArr = str.split(splitter);
            strArr.pop();
            var newStr = strArr.join(" ");
            return newStr;
        }),

        /**
         * Removes first words from a string and returns the rest
         */
        removeFirstWordsFromString: my.curry(function(str, count) {
            return str.split(" ").slice(count).join(" ");
        }),

        //DONE
        /**
         * Removes first words from a string and returns the rest
         */
        removeFirstWordsFromStringUsingSplitter: my.curry(function(str, count, splitter) {
            return str.split(splitter).slice(count).join(splitter);
        }),

        //DONE
         /**
         * Removes the last words from a string
         */
        removeLastWordsFromString: my.curry(function(str, count) {
            return str.split(" ").slice(0, - count).join(" ");
        }),

        //DONE
        /**
         * Removes the last words from a string
         */
        removeLastWordsFromStringUsingSplitter: my.curry(function(str, count, splitter) {
            return str.split(splitter).slice(0, - count).join(splitter);
        }),

        //DONE
        /**
         * Converts a string into number
         */
        convertStringToNumber: my.curry((str) => {
            return  Number(str);
        })    
    };


    //Arrays
    this.arr = {

        //DONE
        flatten: my.curry(function (arr) {
            return arr.reduce(function (flat, toFlatten) {
                return flat.concat(Array.isArray(toFlatten) ? helper.arr.flatten(toFlatten) : toFlatten);
            }, []);
        }),

        //DONE
        seqArrayFromLength: my.curry(function (length) {
            let seqArray = new Array(length);

            for (let i = 1; i <= length; i++) {
                seqArray[i] = i;
            }
            return seqArray;
        }),

        //DONE
        seqArrayFromTo: my.curry(function (from, to) {
            let seqArray = [];

            for (let i = from; i <= to; i++) {
                seqArray.push(i);
            }
            return seqArray;
        }),

        //DONE
        sortArray: my.curry(function (arrayToSort, sortBy, direction) {

            let sortedArray = arrayToSort.sort(function(a, b) {
               let dirValue = 1;
                if (direction === "asc") {
                    dirValue = -dirValue;
                }

                if(a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) {
                    return dirValue;
                }
                else if (a[sortBy].toLowerCase() == b[sortBy].toLowerCase()){
                    return 0;
                } else {
                    return -dirValue;
                }
            });

            return sortedArray;
        })
    };

    
    

    //DOM
    this.dom = {

        //DONE
        appendInnerHTMLIO: my.curry(function(inner, outer) {
            outer.innerHTML = inner;
            return outer;
        }),

        //DONE
        appendInnerHTMLOI: my.curry(function(el, inner) {
            el.innerHTML = inner;
            return el;
        }),

        //DONE
        wrapStringInTag: my.curry(function(tag, str) {
            return '<' + tag + '>' + str + '</' + tag + '>';
        }),

        //DONE
        /**
         * Appends child node to parent last
         * @param child the inner element 
         * @param parent the outer element
         */
        appendChildNodeIO: my.curry(function(child, parent) {
            parent.appendChild(child);
            return parent;
        }),


          /**
         * Appends child node to parent first 
         * @param child the inner element 
         * @param parent the outer element
         */
        appendChildNodeFirstIO: my.curry(function(child, parent) {
            console.log('before parent');
            parent.insertBefore(child, parent.childNodes[0]);
            console.log('parent');
            console.log(parent);
            return parent;
        }),

        //DONE
        appendChildNodeOI: my.curry(function(el, child) {
            el.appendChild(child);
            return el;
        }),

        //DONE
        appendChildNodesOnId: my.curry(function(builtElements, id) {
            let myId = helper.dom.getElement("id", id);
                builtElements.forEach((builtElement) => {
                    helper.dom.appendChildNodeIO(builtElement, myId);
                });

            return myId;
        }),

        //DONE
        appendChildNodesIO: my.curry(function(builtElements, parentElement) {
            builtElements.forEach((builtElement) => {
                helper.dom.appendChildNodeIO(builtElement, parentElement);
            });

            return parentElement;
        }),

        //DONE
        appendChildNodesOI: my.curry(function(parentElement, builtElements) {
            builtElements.forEach((builtElement) => {
                helper.dom.appendChildNodeOI(parentElement, builtElement);
            });

            return parentElement;
        }),

        //DONE
        removeChildrenUntil: my.curry(function(el, numb) {
            while (el.children.length > numb) {
            el.removeChild(el.lastChild);
            }

            return el;
        }),

        //DONE
        removeAllChildren: my.curry(function(el) {
            while (el.children.length > 0) {
            el.removeChild(el.lastChild);
            }
            return el;
        }),

        //NOT DONE
        appendSiblingNodeCS: my.curry(function(el, sibling) {
            el.insertAdjacentElement('afterend',sibling);
            return el;
        }),

        //DONE
        boxChecker: my.curry(function(el) {
            el.checked = true;
            return el;
        }),

        //DONE
        boxUnchecker: my.curry(function(el) {
            el.checked = false;
            return el;
        }),

        //DONE
        /**
         * Creates element. @param tag kind of element
         */
        createElement: my.curry(function(tag) {
            return document.createElement(tag);
        }),

       //DONE
       /**
        * Gets element. @param kind ether "id" or "class" @param name the name of the kind
        */
        getElement: my.curry(function(kind, name) {
            switch(kind) {
                case 'id':
                    return document.getElementById(name);
                    break;
                case 'class':
                    return document.getElementsByClassName(name);
                    break;
                case 'tag':
                    return document.getElementsByTagName(name);
                    break;
            }   
        }),

        //makes a node list with the specified attribute from from DOM. Slices the node list into an array
        getAllElementsByAttribute: my.curry(function(elementAtrribute) {
            return [].slice.call(document.querySelectorAll(elementAtrribute));
        }),

        //DONE
        getAttribute: my.curry(function(attribute, el) {
            return el.getAttribute(attribute); 
        }),

        //DONE
        /**
         * Sets attribute to element 
         * @param {string} key 
         * @param {*} value 
         * @param  el the element
         */
        setAttribute: my.curry(function(key, value, el) {
            el.setAttribute(key, value);
            return el;
        }),

        //DONE
        setStyle: my.curry(function(key, value, el) {
            el.style[key] = value;
            return el;
        }),

        //DONE
        /**
         * Creates a new element
         */
        elementBuilder: my.curry(function (testingObject, db) {
            //check if element exists
            if (helper.boolean.isDefined(testingObject.kind)) {
                
                 //create element
                let element = helper.dom.createElement(testingObject.kind);
               
                //sets attributes
                if (helper.boolean.isDefined(testingObject.attribute)) {
                    testingObject.attribute.forEach(function (item) {
                        helper.dom.setAttribute(item.key, item.value, element);
                    });
                }

                //sets style
                if (helper.boolean.isDefined(testingObject.style)) {
                    testingObject.style.forEach(function (item) {
                        helper.dom.setStyle(item.key, item.value, element);
                    });
                }

                //sets textNode
                if (helper.boolean.isDefined(testingObject.textNode)) {
                    testingObject.textNode.forEach(function (item) {
                        let tempTextNode = document.createTextNode(item);
                        helper.dom.appendChildNodeIO(tempTextNode, element);
                    });
                }

                //sets eventlistender
                testingObject.event.forEach(function (item) {
                    element.addEventListener(item.key, function(event) {
                       item.value(event, db);
                    });
                });
               
                return element;
            }
        }),

        //DONE
        /**
         * Constructs an empty element info object
         */
        ElementInfoConstructor: my.curry(function () {
            this.kind = "";
            this.attribute = [];
            this.style = [];
            this.textNode = [];
            this.event = [];
        })



         
      

    
    };

    //EVENT
    this.event = {

        addOneSectionLastWithFilter: my.curry(function (event, db) {
            let kind = event.target.attributes.kind.value;
            return views.parmaco.createSection(kind, db);
        }),

        deleteLastDocWithFilter: my.curry(function (event, db) { //CHANGE FUNCTION NAME!
            let kind = event.target.attributes.kind.value;

            return helper.pouch.getAllRowsWithFilter(db, kind)
            .then((filteredRows) => {
                return helper.pouch.getLastRowOfKind(filteredRows);  
            })
            .then((lastRow) => {
                let idOfDocPreviousH;
                idOfDocPreviousH = lastRow.doc.previousH;
                idOfDocToRemove = lastRow.doc._id;
                if (idOfDocPreviousH !== 'first') {
                    let parameters = [
                        {
                            key: 'nextH',
                            value: 'last'
                        }
                    ]
                    return helper.pouch.editDocByIdAndPut(idOfDocPreviousH, db, parameters)
                        .then(() => {
                            return helper.pouch.deleteDocById(idOfDocToRemove, db);
                        });
                } else {
                    return helper.pouch.deleteDocById(idOfDocToRemove, db);
                }
            })
            .then(() => {
                return helper.pouch.getAllRowsWithFilter(db, kind);
            })
            .then((filteredRows) => {
                console.log(filteredRows);
                return removeFromDom(filteredRows, kind); 
            })
            .catch((obj) => {
                console.log('rejected!!');   
            });  
        }),

        deleteFirstDocWithFilter: my.curry(function (event, db) { //CHANGE FUNCTION NAME!
            let kind = event.target.attributes.kind.value;

            return helper.pouch.getAllRowsWithFilter(db, kind)
            .then((filteredRows) => {
                return helper.pouch.getFirstRowOfKind(filteredRows);  
            })
            .then((firstRow) => {
                let idOfDocNextH;
                idOfDocNextH = firstRow.doc.nextH;
                idOfDocToRemove = firstRow.doc._id;
                if (idOfDocNextH !== 'last') {
                    let parameters = [
                        {
                            key: 'previousH',
                            value: 'first'
                        }
                    ]
                    return helper.pouch.editDocByIdAndPut(idOfDocNextH, db, parameters)
                        .then(() => {
                            return helper.pouch.deleteDocById(idOfDocToRemove, db);
                        });
                } else {
                    return helper.pouch.deleteDocById(idOfDocToRemove, db);
                }
            })
            .then(() => {
                return helper.pouch.getAllRowsWithFilter(db, kind);
            })
            .then((filteredRows) => {
                console.log(filteredRows);
                return removeFromDom(filteredRows, kind); 
            })
            .catch((obj) => {
                console.log('rejected!!');   
            });
        }),


        /**
         * 
         * @param event
         * @param db
         */
        addOneDocFirstWithFilter: my.curry(function (event, db) {
            let elementIdKind = event.target.attributes.kind.value;
            
            return helper.pouch.getAllRowsWithFilter(db, elementIdKind)
            //search for the last row
            .then((filteredRows) => {
                console.log('filteredRows');
                console.log(filteredRows);
                firstRow = [];
                firstRow = filteredRows.filter((filteredRow) => {
                    return filteredRow.doc.previousH === 'first'; //next Horisontal
                });

                return(firstRow); 
            })
            //defines previous id form db
            .then((firstRow) => {
                console.log('firstRow');
                console.log(firstRow);
                let nextH;

                if(helper.boolean.isEmpty(firstRow)) {
                    nextH = 'last';
                } else {
                    nextH = firstRow[0].doc._id;
                }
                //gets last element id number from DOM
                return helper.pouch.getNewElementIdNumber(db, elementIdKind) //may bee new name newLastElementIdNumber??
                .then((newElementIdNumber) => {

                    helper.pouch.getAllRowsWithFirstH(db)
                    .then((rows) => {
                        console.log('rows with first');
                        console.log(rows);
       
                    })

                    //creates new document attributes in db
                    let attributes = [
                        {
                            key: 'elementIdNumber',
                            value: newElementIdNumber
                        },
                        {
                            key: 'elementValue',
                            value: ""
                        },
                        {
                            key: 'previousH',
                            value: 'first'
                        },
                        {
                            key: 'nextH',
                            value: nextH
                        },
                        {
                            key: 'previousV',
                            value: 'first'
                        },
                        {
                            key: 'nextV',
                            value: 'last'
                        },
                        {
                            key: 'kind',
                            value: elementIdKind
                        },
                        {
                            key: 'elementId',
                            value: elementIdKind + "-" + newElementIdNumber
                        }
                    ];
                    //creates new doc to be posted in db
                    return helper.pouch.createDoc(db, attributes);
                })
                //post new doc to db
                .then((doc) => {
                    return helper.pouch.postDoc(doc, db);
                })
                //if not empty let previous doc's 'next' attribute be the new 'last' doc's id
                .then((response) => {
                    if(!helper.boolean.isEmpty(firstRow)) {
                        return helper.pouch.editDocByIdAndPut(nextH, db, [{
                            key: 'previousH',
                            value: response.id
                        }]);
                    } else {
                        return response;
                    }
                })
                //gets last row from db
                .then(() => {
                    return helper.pouch.getLatestRowWithFilter(db, elementIdKind);//DOES IT NEED TO BE FILTERED?
                })
                //creates a new element and places it as child to parent in DOM
                .then((row) => {
                    return views.parmaco.createElementOfKindFirst(elementIdKind + '-elements-box', elementIdKind, db, row);
                }); 

            });        
        }),

        /**
         * 
         * @param event
         * @param db
         */
        addOneDocLastWithFilter: my.curry(function (event, db) {
            let elementIdKind = event.target.attributes.kind.value;
            
            return helper.pouch.getAllRowsWithFilter(db, elementIdKind)
            //search for the last row
            .then((filteredRows) => {
                console.log('filteredRows');
                console.log(filteredRows);
                lastRow = [];
                lastRow = filteredRows.filter((filteredRow) => {
                    return filteredRow.doc.nextH === 'last'; //next Horisontal
                });

                return(lastRow); 
            })
            //defines previous id form db
            .then((lastRow) => {
                console.log('lastRow');
                console.log(lastRow);
                let previousH;

                if(helper.boolean.isEmpty(lastRow)) {
                    previousH = 'first';
                } else {
                    previousH = lastRow[0].doc._id;
                }
                //gets last element id number from DOM
                return helper.pouch.getNewElementIdNumber(db, elementIdKind) //may bee new name newLastElementIdNumber??
                .then((newElementIdNumber) => {

                    //creates new document attributes in db
                    let attributes = [
                        {
                            key: 'elementIdNumber',
                            value: newElementIdNumber
                        },
                        {
                            key: 'elementValue',
                            value: ""
                        },
                        {
                            key: 'previousH',
                            value: previousH
                        },
                        {
                            key: 'nextH',
                            value: 'last'
                        },
                        {
                            key: 'kind',
                            value: elementIdKind
                        },
                        {
                            key: 'elementId',
                            value: elementIdKind + "-" + newElementIdNumber
                        }
                    ];
                    //creates new doc to be posted in db
                    return helper.pouch.createDoc(db, attributes);
                })
                //post new doc to db
                .then((doc) => {
                    return helper.pouch.postDoc(doc, db);
                })
                //if not empty let previous doc's 'next' attribute be the new 'last' doc's id
                .then((response) => {
                    if(!helper.boolean.isEmpty(lastRow)) {
                        return helper.pouch.editDocByIdAndPut(previousH, db, [{
                            key: 'nextH',
                            value: response.id
                        }]);
                    } else {
                        return response;
                    }
                })
                //gets last row from db
                .then(() => {
                    return helper.pouch.getLatestRowWithFilter(db, elementIdKind);//DOES IT NEED TO BE FILTERED?
                })
                //creates a new element and places it as child to parent in DOM
                .then((row) => {
                    return views.parmaco.createElementOfKindLast(elementIdKind + '-elements-box', elementIdKind, db, row);
                }); 

            });        
        }),

        deleteAllDocsWithFilter: my.curry(function (event, db) {
            let elementIdKind = event.target.attributes.kind.value;
            helper.pouch.deleteAllRowsWithFilter(db, elementIdKind)
            .then(() => {
                return helper.pouch.getAllRows(db);
            })
            .then((rows) => {
                return removeFromDom(rows, elementIdKind); 
            });    
        }),

        addSelectedNumberOfDocsWithFilter: my.curry(function (event, db) {
            let selectedValue;
            let elementIdKind;
            
            selectedValue = helper.str.convertStringToNumber(event.target.value);
            elementIdKind = event.target.attributes.kind.value;

            helper.pouch.getNewElementIdNumber(db, elementIdKind)
            .then((newElementIdNumber) => {
                let newElementIdNumbers = helper.arr.seqArrayFromTo(newElementIdNumber, (newElementIdNumber + selectedValue - 1));
                return newElementIdNumbers;
            })
            .then((newElementIdNumbers) => {
                return helper.pouch.createDocs(db, newElementIdNumbers, elementIdKind);
            })
            .then((docs) => {
                return helper.pouch.postDocs(docs, db);
            }); 
        }),

        detectClickFunction: my.curry(function (event, db) {
           return console.log(event);
        }),

        detectKeybordFunction: my.curry(function (event, db) {
            let keyPressed = event.whitch || event.keyCode || event.charCode;
            if (keyPressed === 13) {
                event.preventDefault();
                let element = event.target;
                let elementValue = element.value;
                let dbId = helper.dom.getAttribute("dbid", element);
                helper.dom.setAttribute('value', elementValue, element);
                
                let parameters = [
                    {
                        key: 'elementValue',
                        value: elementValue
                    }
                ];
                helper.pouch.editDocByIdAndPut(dbId, db, parameters);
                event.target.blur();
            }
        }),

        detectBlurFunction: my.curry(function (event, db) {
            event.preventDefault();
            let element = event.target;
            let elementValue = element.value;
            let dbId = helper.dom.getAttribute("dbid", element);
            helper.dom.setAttribute('value', elementValue, element);

            let parameters = [
                {
                    key: 'elementValue',
                    value: elementValue
                }
            ];
            helper.pouch.editDocByIdAndPut(dbId, db, parameters);
        })
    };

    //POUCH
    this.pouch = {

        //DONE
        fetchAll: my.curry(function(db) {
            return db.allDocs({
                include_docs: true,
                conflicts: true
            });
        }),

        //DONE
        deleteDoc: my.curry(function (doc, db) {
            return new Promise(function (resolve, reject) {
                doc._deleted = true;
                doc.written = new Date().toISOString();
                resolve(db.put(doc));
            });
        }),

        //DONE
        deleteDocById: my.curry(function (docId, db) {
            return helper.pouch.getDoc(docId, db)
                .then((doc) => helper.pouch.deleteDoc(doc, db));
        }),

        //DONE
        getDoc: my.curry(function (docId, db) {
            return db.get(docId, {
                conflicts: true,
                include_docs: true
            });
        }),

        //DONE
        postDoc: my.curry(function (doc, db) {
            return db.put(doc);
        }),

        //DONE
        putDoc: my.curry(function (doc, db) {
            return db.put(doc);
        }),

        //DONE
        postDocs: my.curry(function (docs, db) {
            return db.bulkDocs(docs);
        }),

        //DONE
        deleteRows: my.curry(function (rows, db) {
            return rows.forEach((row) => {
                helper.pouch.deleteDoc(row.doc, db);    
            });
        }),

        //DONE
        deleteAllRowsWithFilter: my.curry(function (db, filter) {
            return helper.pouch.getAllRowsWithFilter(db, filter)
            .then((filteredRows) => {
                return helper.pouch.deleteRows(filteredRows, db);
            });
        }),

        //DONE
        /**
         * Deletes last added row in db
         * @param db the database
         * @param kind section to filter. Rent etc.
         */
        deleteLastRowWithFilter: my.curry(function (db, kind) {
            return helper.pouch.getAllRowsWithFilter(db, kind)
            .then((filteredRows) => {
                let sortedFilteredRows = helper.pouch.sortRows(filteredRows, 'id', "desc");

                //select last doc and delete it
                if (!helper.boolean.isEmpty(sortedFilteredRows)) {
                    let idOfDocToRemove = sortedFilteredRows[0].id;
                    return helper.pouch.deleteDocById(idOfDocToRemove, db);
                } 

            });
        }),

        //DONE
        getAllRows: my.curry(function (db) {
            return helper.pouch.fetchAll(db)
                .then((docs) => {
                    return docs.rows;
                });
        }),

        //DONE
        getAllRowsWithFilter: my.curry(function (db, filter) {
            return helper.pouch.getAllRows(db)
                .then((rows) => {
                    let filteredRows = rows.filter((row) => {
                        return row.doc.kind === filter;
                    });
                    return filteredRows;
                });
        }),

        //DONE
        getAllRowsWithFirstH: my.curry(function (db) {
            return helper.pouch.getAllRows(db)
                .then((rows) => {
                    let filteredRows = rows.filter((row) => {
                        return row.doc.previousH === 'first';
                    });
                    return filteredRows;
                });
        }),

        //DONE
        getLatestRowWithFilter: my.curry(function (db, filter) {
            return helper.pouch.getAllRowsWithFilter(db, filter)
            .then((filteredRows) => {
                let sortedFilteredRows = helper.pouch.sortRows(filteredRows, 'id', "desc");

                if (!helper.boolean.isEmpty(sortedFilteredRows)) {
                    return sortedFilteredRows[0];
                }   
            });
        }),


        //DONE
        sortRows: my.curry(function (rows, sortParameter, direction) {
            let sortedRows = helper.arr.sortArray(rows, sortParameter, direction);
            return sortedRows;
        }),




        deleteRevision: my.curry(function (rev, docId, db) {
            return db.remove(docId, rev);
        }),

        getConflictRows: my.curry(function (docs) {
           // console.log(docs);
            return docs['rows'].filter(function (row) {
                return row.doc._conflicts;
            });
        }),


        //gets the previously revision id
        getPreviousRev: my.curry(function (latestDocRev) {
            //console.log(latestDocRev);

            let previousRev = (latestDocRev._revisions.ids.length - 1) + '-' + latestDocRev._revisions.ids[1];
            let id = latestDocRev._id;
            // console.log(oldRev);
            // console.log(oldId);
            return db.get(id, { rev: previousRev, include_docs: true });
        }),


        getNewElementIdNumber: my.curry(function (db, elementIdKind) {
            return helper.pouch.getAllRowsWithFilter(db, elementIdKind)
            .then((filteredRows) => {
                let newElementIdNumber;
                let sortedFilteredRows;
                let elementIdOfLastDoc;
                let elementIdNumberOfLastDoc;

                if (!helper.boolean.isEmpty(filteredRows)) {
                    sortedFilteredRows = helper.pouch.sortRows(filteredRows, 'id', "desc");
                    elementIdOfLastDoc = sortedFilteredRows[0].doc.elementId;
                    elementIdNumberOfLastDoc = helper.str.getLastWordFromStringUsingSpliter(elementIdOfLastDoc, "-");
                    newElementIdNumber = helper.str.convertStringToNumber(elementIdNumberOfLastDoc) + 1;
                } else {
                    newElementIdNumber = 1;
                }

                //console.log("newElementIdNumber", newElementIdNumber);

                return newElementIdNumber;
            });
        }),

        /**
         * Builds a doc with specified parameters
         * @param db
         * @param parameters an array of parameters
         */
        createDoc: my.curry(function (db, parameters) {
            return new Promise(function (resolve, reject) {
                let serializedNonsensFunction = helper.functions.serialize(nonsensFunction);
       
                let doc = {
                    dbName: db.name,
                    _id: new Date().toISOString(),
                    elementFunction: serializedNonsensFunction,
                    written: new Date().toISOString(),
                };
       
                parameters.forEach((parameter) => {
                   doc[parameter.key] = parameter.value;
                });
       
                resolve(doc);
            });
        }),

        createDocs: my.curry(function (db, arr, elementIdKind) {
            return new Promise((resolve, reject) => {
                let docs = [];
                let index = 0;
                let timer = setInterval(function() {
                    if (index < arr.length) {
                        let elementIdNumber = arr[index++];
                        let parameters = [
                            {
                                key: 'elementIdNumber',
                                value: elementIdNumber
                            },
                            {
                                key: 'elementValue',
                                value: ""
                            },
                            {
                                key: 'kind',
                                value: elementIdKind
                            },
                            {
                                key: 'elementId',
                                value: elementIdKind + "-" + elementIdNumber
                            }
                        ];
                        helper.pouch.createDoc(db, parameters)
                        .then((doc) => {
                            docs.push(doc);
                        })
                        .catch(() => {
                            clearInterval(timer);
                            reject();                        
                        });
                    } else {
                        clearInterval(timer);
                        resolve(docs);
                    }
                }, 100);
            });
        }),

        //DONE
        editDoc: my.curry(function (doc, parameters) {
            parameters.forEach((parameter) => {
                doc[parameter.key] = parameter.value;
            });

            doc.written = new Date().toISOString();
        
            return doc;
        }),

        //DONE
        editDocById: my.curry(function (docId, db, parameters) {
            return helper.pouch.getDoc(docId, db)
            .then((doc) => {
                return helper.pouch.editDoc(doc, parameters);
            })
        }),

        //DONE
        editDocAndPut: my.curry(function (doc, db, parameters) {
            let editedDoc = helper.pouch.editDoc(doc, parameters);
            return helper.pouch.putDoc(editedDoc, db);
        }),

        //DONE
        /**
         * Edits doc id and update the db
         * @param docId
         * @param db
         * @param parameters the attributes array
         */
        editDocByIdAndPut: my.curry(function (docId, db, parameters) {
            return helper.pouch.editDocById(docId, db, parameters)
            .then((editedDoc) => {
                return helper.pouch.putDoc(editedDoc, db);
            });
        }),


         /**
         * Get first row were previousH is 'first' and check if empty
         * @param filteredRows array of filtered rows, filtered from kind
         */
        getFirstRowOfKind: my.curry(function (filteredRows) {
            return new Promise(function (resolve, reject) {
                row = [];
                row = filteredRows.filter((filteredRow) => {
                    return filteredRow.doc.previousH === 'first';
                });

                if (helper.boolean.isEmpty(row)) {
                    console.log('reject in function');
                    reject();
                } else {
                    console.log('resolve in function');
                    console.log(row);
                    resolve(row[0]);
                }
            });
        }),


         /**
         * Get first row were previousH is 'first' and check if empty
         * @param filteredRows array of filtered rows, filtered from kind
         */
        getLastRowOfKind: my.curry(function (filteredRows) {
            return new Promise(function (resolve, reject) {
                row = [];
                row = filteredRows.filter((filteredRow) => {
                    return filteredRow.doc.nextH === 'last';
                });
                if (helper.boolean.isEmpty(row)) {
                    console.log('reject in function')
                    reject();
                } else {
                    console.log('resolve in function')
                    resolve(row[0]);
                }
            })
        })
    };






}).apply(helper);    












//Set
Set.prototype.isSuperset = function(subset) {
    for (var elem of subset) {
        if (!this.has(elem)) {
            return false;
        }
    }
    return true;
}

Set.prototype.union = function(setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}

Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

Set.prototype.difference = function(setB) {
    var difference = new Set(this);
    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}




//     //Events
//     this.events = (function(){
//         var topics = {};
//         var hOP = topics.hasOwnProperty;
      
//         return {
//           subscribe: function(topic, listener) {
//             // Create the topic's object if not yet created
//             if(!hOP.call(topics, topic)) topics[topic] = [];
      
//             // Add the listener to queue
//             var index = topics[topic].push(listener) -1;
      
//             // Provide handle back for removal of topic
//             return {
//               remove: function() {
//                 delete topics[topic][index];
//               }
//             };
//           },
//           publish: function(topic, info) {
//             // If the topic doesn't exist, or there's no listeners in queue, just leave
//             if(!hOP.call(topics, topic)) return;
      
//             // Cycle through topics queue, fire!
//             topics[topic].forEach(function(item) {
//                     item(info != undefined ? info : {});
//             });
//           }
//         };
//     })();


//     //Requests
//     this.requestPostJson = my.curry(function(baseString, requestString, data) {
//         return new Promise((resolve, reject) => {
//             var request = new XMLHttpRequest();
//             request.open('POST', baseString + requestString, true);
//             //console.log(baseString + requestString);
//             //console.log(JSON.stringify(data));
//             request.setRequestHeader('Content-type', 'application/json');
//             request.send(JSON.stringify(data));
//             request.onreadystatechange = function () {
//                 if (request.readyState === 4 && request.status === 200) {
//                     resolve(request.response);
//                 }
//             };
//         });
//     });

// this.requestGetJson = my.curry(function(baseString, requestString) {
//     return new Promise((resolve, reject) => {
//         var request = new XMLHttpRequest();
//         request.open('GET', baseString + requestString);
//         request.responseType = 'application/json';
//         request.send();
//        // console.log('here...');
//         request.onreadystatechange = function () {
//             // console.log(baseString + requestString);
//             // console.log(request.readyState);
//             // console.log(request.status);
//             if (request.readyState === 4 && request.status === 200) {
//                 //console.log(request.response);
//                 resolve(JSON.parse(request.response));
                
//             }
//             if (request.readyState === 4 && request.status !== 200) {
//                 //console.log(request.response);
//                 //throw 'Uh-oh! rejected message';
//                 reject('meddelande');
                
//             }
//         };
//     });
// });




// this.indexedDB = {
//     openDb: my.curry(function (db_name, db_version, storeAndIndex) {
//         console.log("openDb ...");
    
//         var openRequest = indexedDB.open(db_name,db_version);
        
//         openRequest.onupgradeneeded = function(e) {
//             var thisDB = e.target.result; 
//             console.log("running onupgradeneeded");
    
//             storeAndIndex.forEach(function(item) {
//                 if(!thisDB.objectStoreNames.contains(item.OS)) {
//                     let itemOS = thisDB.createObjectStore(item.OS, {keyPath: "id"});
    
//                     item.indices.forEach(function(info) {
//                         itemOS.createIndex(info.index, info.name, {unique:info.unique});
//                     }) 
//                 }
    
//             });
        
            
//         };
//         openRequest.onsuccess = function(e) {
//             console.log("running onsuccess");
//             db = e.target.result;
//             helper.events.publish('reloadedPage', '5091');
//         };
        
//         openRequest.onerror = function(e) {
//             console.log("onerror!");
//             console.dir(e);
//         };
//     }),
//     getObjectStore: my.curry(function (store_name, mode) {
//         var tx = db.transaction(store_name, mode);
//         return tx.objectStore(store_name);
//     }),
//     getAllInStore: my.curry(function (store_name) {
//         return new Promise((resolve, reject) => {
//             let store = helper.indexedDB.getObjectStore(store_name, 'readonly');
//             let request;
//             let arr = [];
        
//             request = store.openCursor();
//             request.onsuccess = function(event) {
//                 let cursor = event.target.result;
        
//                 if (cursor) {
//                     log(cursor.value);
//                     arr.push(cursor.value);
//                     cursor.continue();

//                 } else {
//                     console.log("No more entries");
//                     if(arr.length != 0) {
//                         resolve(arr);
//                     } else {
//                         reject();
//                     };
                    
//                 }
//             };

//             request.onerror = function(event) {
//                 reject();
//             };
            
//         });      
        
//     }),
//     getOneFromIndexInStore: my.curry(function (store_name, index_name, index_value) {
//         return new Promise((resolve, reject) => {
    
//             let store = helper.indexedDB.getObjectStore(store_name, 'readonly');
//             let index = store.index(index_name);
//             let request;
        
//             request = index.get(index_value);
//             request.onsuccess = function(event) {
//                 log(event.target.result);
//                 resolve(event.target.result);
//             };
//         });
//     }),
//     getAllFromIndexInStore: my.curry(function (store_name, index_name, index_value) {
//         return new Promise((resolve, reject) => {
//             console.log('store_name: ', store_name);
//             console.log('index_name: ', index_name);
//             console.log('index_value: ', index_value);
//             let singleKeyRange = IDBKeyRange.only(index_value);
//             let store = helper.indexedDB.getObjectStore(store_name, 'readonly');
//             let index = store.index(index_name);
//             let request;
//             let arr = [];
        
//             request = index.openCursor(singleKeyRange);
//             request.onsuccess = function(event) {
//                 let cursor = event.target.result;
        
//                 if (cursor) {
//                     log(cursor.value);
//                     arr.push(cursor.value);
//                     console.log('cursor: ', arr);
//                     cursor.continue();
//                 } else {
//                     console.log("No more entries", index_name);
//                     console.log(arr);
//                     if (arr.length) {
//                         console.log('arr.length');
//                         resolve(arr);
//                     } else {
//                         console.log('arr.length == 0');
//                         reject(); 
//                     }
                    
//                 }
//             };

//             request.onerror = function(event) {
//                 console.log('An error!');
//                 reject();
//             };
//         });
//     }),
//     deleteOneFromKeyInStore: my.curry(function (store_name, key) {
        
        
//         let store = helper.indexedDB.getObjectStore(store_name, 'readwrite');
//         let request = store.delete(key);
        
//         request.onsuccess = function(e) {
//             log('deleted one');
//             console.dir(e);
//         }
    
//         request.onerror = function(e) {
//             console.log("Error");
//             console.dir(e);
//         }
//     }),
//     addObjectToStore: my.curry(function (store_name, obj) {
//         //console.log("addPublication arguments:", obj);
    
//         var store = helper.indexedDB.getObjectStore(store_name, 'readwrite');
//         var req;
//         try {
//           req = store.add(obj);
//         } catch (e) {
//           if (e.name == 'DataCloneError') {
//             console.log(e.name);
//           }
            
//           throw e;
//         }
//         req.onsuccess = function (event) {
//           console.log("Insertion in DB successful");
//         };
//         req.onerror = function() {
//           //console.error("addPublication error", this.error);
//         };
//     }),
//     getOneFromKeyInStore: my.curry(function (store_name, key) {
        
        
//             let store = helper.indexedDB.getObjectStore(store_name, 'readonly');
//             let request = store.get(key);
            
//             request.onsuccess = function(e) {
//                 log('get one');
//                 var result = e.target.result;
//                 console.dir(result);
//             }
        
//             request.onerror = function(e) {
//                 console.log("Error");
//                 console.dir(e);
//             }
//         })
// };

        /**
         * Constructs array with element info from database array
         */
        // constructElementInfoFromDb: my.curry(function(rows) {

        //     let elementInfos = rows.map((item) => {

        //         let elementInfo = new helper.dom.ElementInfoConstructor();
        //         elementInfo.kind = "input";
        //         elementInfo.attribute.push({
        //             key: "dbName",
        //             value: item.doc.dbName

        //         });
        //         elementInfo.attribute.push({
        //             key: "placeholder",
        //             value: item.doc.country

        //         });
        //         elementInfo.attribute.push({
        //             key: "written",
        //             value: item.doc.written

        //         });
        //         elementInfo.attribute.push({
        //             key: "_id",
        //             value: item.doc._id

        //         });
        //         elementInfo.attribute.push({
        //             key: "_rev",
        //             value: item.doc._rev

        //         });
                
        //         return elementInfo;
        //     });

        //     return elementInfos;

        // }),

