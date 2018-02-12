var views = {};
(function() {

    this.parmaco = {

        /**
         * Builds elements horisontally in DOM
         * @param title the title above the element
         * @param db the db
         * @param filteredRow the row from db
         */
        form: my.curry(function(title, db, filteredRow) {
            let element4 = title;

            let info3 = new helper.dom.ElementInfoConstructor();
            info3.kind = "div";
    
            info3.attribute.push({
                key: "class",
                value: "text-block"
            });
    
            let element3 = helper.dom.elementBuilder(info3, db);
    
            helper.dom.appendInnerHTMLIO(element4, element3);
    
    
            let info2 = new helper.dom.ElementInfoConstructor();
            info2.kind = "div";
    
            info2.attribute.push({
                key: "class",
                value: "text-box"
            });
    
            let element2 = helper.dom.elementBuilder(info2, db);

    
            helper.dom.appendChildNodeIO(element3, element2);
    
    
            let info1 = new helper.dom.ElementInfoConstructor();
            info1.kind = "div";
    
            info1.attribute.push({
                key: "class",
                value: "form-box"
            });
    
            let element1 = helper.dom.elementBuilder(info1, db);
    
            helper.dom.appendChildNodeIO(element2, element1);
    
    
            let info4 = new helper.dom.ElementInfoConstructor();
            info4.kind = "input";
    
            info4.attribute.push({
                key: "class",
                value: "w-input"
            });
    
            info4.attribute.push({
                key: "type",
                value: "text"
            });

            let extraAttributes = [
                {
                    key: "kind-" + filteredRow.doc.kind,
                    value: true
                },
                {
                    key: "kind",
                    value: filteredRow.doc.kind
                },
                {
                    key: "placeholder",
                    //value: "Enter your name"
                    value: nonsensFunction()
                },
                {
                    key: "id",
                    value: filteredRow.doc.elementId
                },
                {
                    key: "dbid",
                    value: filteredRow.doc._id
                },
                {
                    key: "value",
                    value: filteredRow.doc.elementValue
                },
                {
                    key: "data-cell",
                    value: filteredRow.doc.elementId
                }
            ];

            let extraEvents = [
                {
                    key: "click",
                    value: helper.event.detectClickFunction
                },
                {
                    key: "keypress",
                    value: helper.event.detectKeybordFunction
                },
                {
                    key: "blur",
                    value: helper.event.detectBlurFunction
                }
            ];
            
            extraAttributes.forEach((item) => {
                info4.attribute.push(item);
            });

            extraEvents.forEach((item) => {
                info4.event.push(item);
            });

    
            element4 = helper.dom.elementBuilder(info4, db);
    
    
            info3 = new helper.dom.ElementInfoConstructor();
            info3.kind = "form";
    
            info3.attribute.push({
                key: "class",
                value: "input-form"
            });
    
            element3 = helper.dom.elementBuilder(info3, db);
    
            helper.dom.appendChildNodeIO(element4, element3);
    
    
            info2 = new helper.dom.ElementInfoConstructor();
            info2.kind = "form";
    
            info2.attribute.push({
                key: "class",
                value: "form-block w-form"
            });
    
            element2 = helper.dom.elementBuilder(info2, db);
    
            helper.dom.appendChildNodeIO(element3, element2);
    
    
            helper.dom.appendChildNodeIO(element2, element1);


            let info0 = new helper.dom.ElementInfoConstructor();
            info0.kind = "div";
    
            info0.attribute.push({
                key: "class",
                value: "forms-box"
            });

            info0.attribute.push({
                key: "contained-dbid",
                value: filteredRow.doc._id
            });

            info0.attribute.push({
                key: "container",
                value: filteredRow.doc.kind
            });
    
            element0 = helper.dom.elementBuilder(info0, db);
    
            helper.dom.appendChildNodeIO(element1, element0);


            return element0;
        }),

                /**
         * Creates an add one button first
         * @param holderElement the element box
         * @param kind kind of user data (rent...)
         * @param db the database
         */
        createButtonAddOneSectionOfKindLast: my.curry(function (kind, db, holderElement) {
            let buttonElement;
            let elementInfo;

            elementInfo = new helper.dom.ElementInfoConstructor();
            elementInfo.kind = "button";

            elementInfo.attribute.push({
                key: "kind",
                value: kind
            });

            elementInfo.event.push({
                key: "click",
                value: helper.event.addOneSectionLastWithFilter
            });

            buttonElement = helper.dom.elementBuilder(elementInfo, db);
            helper.dom.appendInnerHTMLIO("Add one " + kind + "section last", buttonElement);
            return helper.dom.appendChildNodeIO(buttonElement, holderElement);
        }),

        /**
         * Creates an add one button first
         * @param holderElement the element box
         * @param kind kind of user data (rent...)
         * @param db the database
         */
        createButtonAddOneDocOfKindFirst: my.curry(function (kind, db, holderElement) {
            let buttonElement;
            let elementInfo;

            elementInfo = new helper.dom.ElementInfoConstructor();
            elementInfo.kind = "button";

            elementInfo.attribute.push({
                key: "kind",
                value: kind
            });

            elementInfo.event.push({
                key: "click",
                value: helper.event.addOneDocFirstWithFilter
            });

            buttonElement = helper.dom.elementBuilder(elementInfo, db);
            helper.dom.appendInnerHTMLIO("Add one " + kind + "first", buttonElement);
            return helper.dom.appendChildNodeIO(buttonElement, holderElement);
        }),

        //DONE
        /**
         * Creates an add one button
         * @param holderElement the element box
         * @param kind kind of user data (rent...)
         * @param db the database
         */
        createButtonAddOneDocOfKindLast: my.curry(function (kind, db, holderElement) {
            let buttonElement;
            let elementInfo;

            elementInfo = new helper.dom.ElementInfoConstructor();
            elementInfo.kind = "button";

            elementInfo.attribute.push({
                key: "kind",
                value: kind
            });

            elementInfo.event.push({
                key: "click",
                value: helper.event.addOneDocLastWithFilter
            });

            buttonElement = helper.dom.elementBuilder(elementInfo, db);
            helper.dom.appendInnerHTMLIO("Add one " + kind + "last", buttonElement);
            return helper.dom.appendChildNodeIO(buttonElement, holderElement);
        }),

        //DONE
        createButtonRemoveLastDocOfKind: my.curry(function (kind, db, parentElement) {
            let buttonElement;
            let elementInfo;

            elementInfo = new helper.dom.ElementInfoConstructor();
            elementInfo.kind = "button";

            elementInfo.attribute.push({
                key: "kind",
                value: kind
            });

            elementInfo.event.push({
                key: "click",
                value: helper.event.deleteLastDocWithFilter
            });

            buttonElement = helper.dom.elementBuilder(elementInfo, db);
            helper.dom.appendInnerHTMLIO("remove last " + kind, buttonElement);
            return helper.dom.appendChildNodeIO(buttonElement, parentElement);
        }),

        createButtonRemoveFirstDocOfKind: my.curry(function (kind, db, parentElement) {
            let buttonElement;
            let elementInfo;

            elementInfo = new helper.dom.ElementInfoConstructor();
            elementInfo.kind = "button";

            elementInfo.attribute.push({
                key: "kind",
                value: kind
            });

            elementInfo.event.push({
                key: "click",
                value: helper.event.deleteFirstDocWithFilter
            });

            buttonElement = helper.dom.elementBuilder(elementInfo, db);
            helper.dom.appendInnerHTMLIO("remove first " + kind, buttonElement);
            return helper.dom.appendChildNodeIO(buttonElement, parentElement);
        }),


        //DONE
        createButtonRemoveAllDocsOfKind: my.curry(function (kind, db, parentElement) {
            let buttonElement;
            let elementInfo;

            elementInfo = new helper.dom.ElementInfoConstructor();
            elementInfo.kind = "button";

            elementInfo.attribute.push({
                key: "kind",
                value: kind
            });

            elementInfo.event.push({
                key: "click",
                value: helper.event.deleteAllDocsWithFilter
            });

            buttonElement = helper.dom.elementBuilder(elementInfo, db);
            helper.dom.appendInnerHTMLIO("remove all " + kind, buttonElement);
            return helper.dom.appendChildNodeIO(buttonElement, parentElement);
        }),

        //NOT DONE
        createSelectAddSelectedNumberOfDocsOfKind: my.curry(function (kind, db, parentElement) {
            let selectElement;
            let elementInfo;
            let optionValues = [1, 2, 3, 4, 5];

            elementInfo = new helper.dom.ElementInfoConstructor();
            elementInfo.kind = "select";

            elementInfo.attribute.push({
                key: "kind",
                value: kind
            });

            elementInfo.event.push({
                key: "change",
                value: helper.event.addSelectedNumberOfDocsWithFilter
            });

            selectElement = helper.dom.elementBuilder(elementInfo, db);


            optionValues.forEach((optionValue) => {

                let elementInfo = new helper.dom.ElementInfoConstructor();
                elementInfo.kind = "option";

                elementInfo.attribute.push({
                    key: "value",
                    value: optionValue
                });
                
                let optionElement = helper.dom.elementBuilder(elementInfo, db);

                helper.dom.appendInnerHTMLIO(optionValue, optionElement);
                helper.dom.appendChildNodeIO(optionElement, selectElement);

            });

            //helper.dom.appendInnerHTMLIO("remove all!", selectElement);
            helper.dom.appendChildNodeIO(selectElement, parentElement);
        }),

        //DONE
        /**
         * Creates and orders buttons of specified types
         * @param holderId the box for the buttons
         * @param kind kind of user data (rent...)
         * @param db the database
         */
        createButtonsRowOfKind: my.curry(function (holderId, kind, db) {
            let holderElement = helper.dom.getElement("id", holderId);

            views.parmaco.createSelectAddSelectedNumberOfDocsOfKind(kind, db, holderElement);
            views.parmaco.createButtonRemoveAllDocsOfKind(kind, db, holderElement);
            views.parmaco.createButtonRemoveLastDocOfKind(kind, db, holderElement);
            views.parmaco.createButtonAddOneDocOfKindLast(kind, db, holderElement); //skicka kanske bara holderId??
            views.parmaco.createButtonRemoveFirstDocOfKind(kind, db, holderElement);
            views.parmaco.createButtonAddOneDocOfKindFirst(kind, db, holderElement);
            views.parmaco.createButtonAddOneSectionOfKindLast('magic', db, holderElement);
            
            return holderElement;
        }),

        //NOT DONE
        /**
         * Takes content from database and places it in form elements
         * @param holderId the id of the parent
         * @param kind kind of user data (rent...)
         * @param db the database
         */
        createElementsOfKind: my.curry(function (holderId, kind, db) {
            let holderElement = helper.dom.getElement("id", holderId);

            helper.pouch.getAllRowsWithFilter(db, kind)
            .then((filteredRows) => {
                let elements = filteredRows.map((filteredRow) => {
                    return views.parmaco.form(kind, db, filteredRow); //makes a form
                });
                elements.forEach((element) => {
                    helper.dom.appendChildNodeIO(element, holderElement);
                });
            });
        }),


         /**
         * Creates DOM element of specified kind with info from row in db and places it first
         * @param holderId the id of the parent
         * @param kind kind of user data (rent...)
         * @param db the database
         * @param row db row
         */
        createElementOfKindFirst: my.curry(function (holderId, kind, db, row) {
            let holderElement = helper.dom.getElement("id", holderId);
            let element = views.parmaco.form(kind, db, row);
            helper.dom.appendChildNodeFirstIO(element, holderElement);
        }),

        //DONE
        /**
         * Creates DOM element of specified kind with info from row in db and places it last
         * @param holderId the id of the parent
         * @param kind kind of user data (rent...)
         * @param db the database
         * @param row db row
         */
        createElementOfKindLast: my.curry(function (holderId, kind, db, row) {
            let holderElement = helper.dom.getElement("id", holderId);
            let element = views.parmaco.form(kind, db, row);
            helper.dom.appendChildNodeIO(element, holderElement);
        }),

        //DONE
        /**
         * Builds a DOM element for headline named from kind and places it in parent
         * @param holderId the id of the parent
         * @param kind kind of user data (rent...)
         * @param db the database
         */
        createHeadlineOfKind: my.curry(function (holderId, kind, db) {
            let elementInfo = new helper.dom.ElementInfoConstructor();

            elementInfo.kind = 'h1';
            elementInfo.attribute.push({
                key: "class",
                value: "main-heading"
            });

            elementInfo.textNode.push(kind);

            let elementH1 = helper.dom.elementBuilder(elementInfo, db);

            let holderElement = helper.dom.getElement('id', holderId);
            helper.dom.appendChildNodeIO(elementH1, holderElement);
        }),

        //DONE
        /**
         * Creates an empty div for element with id and places it to the parent
         * @param holderId the id of the parent
         * @param kind kind of user data (rent...)
         * @param db the database
         */
        createBoxForElementsOfKind: my.curry(function (holderId, kind, db) {
            let elementInfo = new helper.dom.ElementInfoConstructor();

            elementInfo.kind = 'div';
            elementInfo.attribute.push({
                key: "class",
                value: "forms-and-chart-box"
            });
            elementInfo.attribute.push({
                key: "id",
                value: kind + "-elements-box"
            });

            let elementDiv = helper.dom.elementBuilder(elementInfo, db);

            let holderElement = helper.dom.getElement('id', holderId);
            helper.dom.appendChildNodeIO(elementDiv, holderElement);
        }),

        //DONE
        /**
         * Creates an empty div for section with id and places it to the parent
         * @param holderId the id of the parent
         * @param kind kind of user data (rent...)
         * @param db the database
         */
        createBoxForSection: my.curry(function (holderId, kind, db) {
            let elementInfo = new helper.dom.ElementInfoConstructor();

            elementInfo.kind = 'div';
            elementInfo.attribute.push({
                key: "id",
                value: kind + "-box"
            });

            let elementDiv = helper.dom.elementBuilder(elementInfo, db);

            let holderElement = helper.dom.getElement('id', holderId);
            helper.dom.appendChildNodeIO(elementDiv, holderElement);
        }),

        //DONE
        /**
         * Creates an empty div for headline with id and places it to the parent
         * @param holderId the id of the parent
         * @param kind kind of user data (rent...)
         * @param db the database
         */
        createBoxForHeadline: my.curry(function (holderId, kind, db) {
            elementInfo = new helper.dom.ElementInfoConstructor();

            elementInfo.kind = 'div';
            elementInfo.attribute.push({
                key: "class",
                value: "heading-box"
            });

            elementInfo.attribute.push({
                key: "id",
                value: kind + "-heading-box"
            });

            let elementDiv = helper.dom.elementBuilder(elementInfo, db);

            let holderElement = helper.dom.getElement('id', holderId);
            helper.dom.appendChildNodeIO(elementDiv, holderElement);
        }),

        //DONE
        /**
         * Creates an empty div for button with id and places it to the parent
         * @param holderId the id of the parent
         * @param kind kind of user data (rent...)
         * @param db the database
         */
        createBoxForButtonsRow: my.curry(function (holderId, kind, db) {
            elementInfo = new helper.dom.ElementInfoConstructor();

            elementInfo.kind = 'div';
            elementInfo.attribute.push({
                key: "class",
                value: "heading-box"
            });

            elementInfo.attribute.push({
                key: "id",
                value: kind + "-buttonsrow-box"
            });

            let elementDiv = helper.dom.elementBuilder(elementInfo, db);

            let holderElement = helper.dom.getElement('id', holderId);
            helper.dom.appendChildNodeIO(elementDiv, holderElement);
        }),

        //DONE
        /**
         * Creates a section constrained to a cost type containing heading and rows
         * @param kind type of user data (rent...)
         * @param db the database
         */
        createSection: my.curry(function (kind, db) {
            views.parmaco.createBoxForSection('main', kind, db);

            views.parmaco.createBoxForHeadline(kind + '-box', kind, db);
            views.parmaco.createHeadlineOfKind(kind + '-heading-box', kind, db);

            views.parmaco.createBoxForButtonsRow(kind + '-box', kind, db);
            views.parmaco.createButtonsRowOfKind(kind + '-buttonsrow-box', kind, db);

            views.parmaco.createBoxForElementsOfKind(kind + '-box', kind, db);
            views.parmaco.createElementsOfKind(kind + '-elements-box', kind, db);
        })
    };

}).apply(views);