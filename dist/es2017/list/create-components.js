import { FEATURE } from 'aurelia-pal';
import { DOMHelper } from '../dom-helper';
export function CreateListComponent(compiler, resources, element, instruction) {
    let tag = instruction.attributes['tag'];
    if (!tag) {
        tag = 'ul';
    }
    const tagEl = DOMHelper.createElement(tag);
    tagEl.setAttribute('class', 'mdc-list');
    tagEl.setAttribute('class.bind', 'class');
    tagEl.setAttribute('ref', 'elementList');
    while (element.firstChild) {
        tagEl.appendChild(element.firstChild);
    }
    const templateEl = document.createDocumentFragment();
    templateEl.appendChild(tagEl);
    if (!FEATURE.htmlTemplateElement) {
        FEATURE.ensureHTMLTemplateElement(templateEl);
    }
    instruction.inheritBindingContext = true;
    instruction.viewFactory = compiler.compile(templateEl, resources, instruction);
    return true;
}
export function CreateListItemComponent(compiler, resources, element, instruction) {
    const href = element.getAttribute('href');
    const tag = href ? 'a' : 'li';
    const base = DOMHelper.createElement(tag);
    base.setAttribute('class', 'mdc-list-item');
    base.setAttribute('class.bind', 'class');
    base.setAttribute('ref', 'elementListItem');
    base.setAttribute('href.bind', 'href');
    base.setAttribute('target.bind', 'target');
    base.setAttribute('model.bind', 'model');
    base.setAttribute('data-value.bind', 'model || $index');
    base.setAttribute('click.delegate', 'elementClick($event)');
    moveSlotElements(element, base);
    const templateEl = document.createDocumentFragment();
    templateEl.appendChild(base);
    if (!FEATURE.htmlTemplateElement) {
        FEATURE.ensureHTMLTemplateElement(templateEl);
    }
    instruction.inheritBindingContext = true;
    instruction.viewFactory = compiler.compile(templateEl, resources, instruction);
    return true;
}
function moveSlotElements(node, base) {
    if (!node.hasChildNodes()) {
        return;
    }
    const startSlot = DOMHelper.createElement('div');
    const endSlot = DOMHelper.createElement('div');
    const textSlot = DOMHelper.createElement('span');
    const primarySlot = DOMHelper.createElement('span');
    const secondarySlot = DOMHelper.createElement('span');
    const noSlot = DOMHelper.createElement('span');
    while (node.firstChild) {
        const childNode = node.firstChild;
        if (childNode.nodeType === Node.ELEMENT_NODE && childNode.attributes) {
            const slotAtr = childNode.attributes.getNamedItem('slot');
            if (slotAtr) {
                if (slotAtr.value === 'start') {
                    if (childNode.hasChildNodes()) {
                        while (childNode.firstChild) {
                            if (childNode.firstChild.nodeType === Node.TEXT_NODE) {
                                const span = DOMHelper.createElement('span');
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
                                const span = DOMHelper.createElement('span');
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
