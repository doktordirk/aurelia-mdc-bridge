define(["require", "exports", "aurelia-pal", "../dom-helper"], function (require, exports, aurelia_pal_1, dom_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function CreateListComponent(compiler, resources, element, instruction) {
        var tag = instruction.attributes['tag'];
        if (!tag) {
            tag = 'ul';
        }
        var tagEl = dom_helper_1.DOMHelper.createElement(tag);
        tagEl.setAttribute('class', 'mdc-list');
        tagEl.setAttribute('class.bind', 'class');
        tagEl.setAttribute('ref', 'elementList');
        while (element.firstChild) {
            tagEl.appendChild(element.firstChild);
        }
        var templateEl = document.createDocumentFragment();
        templateEl.appendChild(tagEl);
        if (!aurelia_pal_1.FEATURE.htmlTemplateElement) {
            aurelia_pal_1.FEATURE.ensureHTMLTemplateElement(templateEl);
        }
        instruction.inheritBindingContext = true;
        instruction.viewFactory = compiler.compile(templateEl, resources, instruction);
        return true;
    }
    exports.CreateListComponent = CreateListComponent;
    function CreateListItemComponent(compiler, resources, element, instruction) {
        var href = element.getAttribute('href');
        var tag = href ? 'a' : 'li';
        var base = dom_helper_1.DOMHelper.createElement(tag);
        base.setAttribute('class', 'mdc-list-item');
        base.setAttribute('class.bind', 'class');
        base.setAttribute('ref', 'elementListItem');
        base.setAttribute('href.bind', 'href');
        base.setAttribute('target.bind', 'target');
        base.setAttribute('model.bind', 'model');
        base.setAttribute('data-value.bind', 'model || $index');
        base.setAttribute('click.delegate', 'elementClick($event)');
        moveSlotElements(element, base);
        var templateEl = document.createDocumentFragment();
        templateEl.appendChild(base);
        if (!aurelia_pal_1.FEATURE.htmlTemplateElement) {
            aurelia_pal_1.FEATURE.ensureHTMLTemplateElement(templateEl);
        }
        instruction.inheritBindingContext = true;
        instruction.viewFactory = compiler.compile(templateEl, resources, instruction);
        return true;
    }
    exports.CreateListItemComponent = CreateListItemComponent;
    function moveSlotElements(node, base) {
        if (!node.hasChildNodes()) {
            return;
        }
        var startSlot = dom_helper_1.DOMHelper.createElement('div');
        var endSlot = dom_helper_1.DOMHelper.createElement('div');
        var textSlot = dom_helper_1.DOMHelper.createElement('span');
        var primarySlot = dom_helper_1.DOMHelper.createElement('span');
        var secondarySlot = dom_helper_1.DOMHelper.createElement('span');
        var noSlot = dom_helper_1.DOMHelper.createElement('span');
        while (node.firstChild) {
            var childNode = node.firstChild;
            if (childNode.nodeType === Node.ELEMENT_NODE && childNode.attributes) {
                var slotAtr = childNode.attributes.getNamedItem('slot');
                if (slotAtr) {
                    if (slotAtr.value === 'start') {
                        if (childNode.hasChildNodes()) {
                            while (childNode.firstChild) {
                                if (childNode.firstChild.nodeType === Node.TEXT_NODE) {
                                    var span = dom_helper_1.DOMHelper.createElement('span');
                                    span.classList.add('mdc-list-item__graphic');
                                    span.appendChild(childNode.firstChild);
                                    startSlot.appendChild(span);
                                }
                                else {
                                    childNode.firstChild.classList.add('mdc-list-item__graphic');
                                    startSlot.appendChild(childNode.firstChild);
                                }
                            }
                        }
                    }
                    else if (slotAtr.value === 'end') {
                        if (childNode.hasChildNodes()) {
                            while (childNode.firstChild) {
                                if (childNode.firstChild.nodeType === Node.TEXT_NODE) {
                                    var span = dom_helper_1.DOMHelper.createElement('span');
                                    span.classList.add('mdc-list-item__meta');
                                    span.appendChild(childNode.firstChild);
                                    endSlot.appendChild(span);
                                }
                                else {
                                    childNode.firstChild.classList.add('mdc-list-item__meta');
                                    endSlot.appendChild(childNode.firstChild);
                                }
                            }
                        }
                    }
                    else if (slotAtr.value === 'text') {
                        if (childNode.hasChildNodes()) {
                            while (childNode.firstChild) {
                                primarySlot.appendChild(childNode.firstChild);
                            }
                        }
                    }
                    else if (slotAtr.value === 'secondary') {
                        if (childNode.hasChildNodes()) {
                            while (childNode.firstChild) {
                                secondarySlot.appendChild(childNode.firstChild);
                            }
                        }
                    }
                    node.removeChild(childNode);
                }
                else {
                    noSlot.appendChild(childNode);
                }
            }
            else {
                noSlot.appendChild(childNode);
            }
        }
        if (startSlot.hasChildNodes()) {
            while (startSlot.firstChild) {
                base.appendChild(startSlot.firstChild);
            }
        }
        if (secondarySlot.hasChildNodes()) {
            textSlot.classList.add('mdc-list-item__text');
            base.appendChild(textSlot);
            primarySlot.classList.add('mdc-list-item__primary-text');
            textSlot.appendChild(primarySlot);
            secondarySlot.classList.add('mdc-list-item__secondary-text');
            textSlot.appendChild(secondarySlot);
        }
        else if (primarySlot.hasChildNodes()) {
            primarySlot.classList.add('mdc-list-item__text');
            base.appendChild(primarySlot);
        }
        else if (noSlot.hasChildNodes()) {
            noSlot.classList.add('mdc-list-item__text');
            base.appendChild(noSlot);
        }
        if (endSlot.hasChildNodes()) {
            while (endSlot.firstChild) {
                base.appendChild(endSlot.firstChild);
            }
        }
    }
});
