let bttnSrch = document.querySelector('.selector-find');
let bttnNext = document.querySelector('.selector-next');
let bttnPrev = document.querySelector('.selector-prev');
let bttnParent = document.querySelector('.nav-top');
let bttnChild = document.querySelector('.nav-bottom'); 
let bttnNextParent = document.querySelector('.nav-right');
let bttnPrevParent = document.querySelector('.nav-left');
let input = document.querySelector('.selector');

let SELECTOR = {};

function SelectedStyle(elem) {
    elem.style.outline = 'solid red 5px';
    elem.style.backgroundColor = 'lightblue';
}
function UnSelected(elem) {
    elem.style.outline = 'none';
    elem.style.backgroundColor = '';
}

bttnSrch.addEventListener("click", function(e) {
    if(document.querySelector(input.value)) {
        if(SELECTOR.now != undefined) {
            UnSelected(SELECTOR.now);
        };
        let elem = document.querySelectorAll(input.value);
        SelectedStyle(elem[0]);
        SELECTOR.now = elem;
        SELECTOR.id = 0;
        if(elem[1] != undefined) {
            bttnNext.disabled = false;
            bttnPrev.disabled = true;
        }
        CheckBattons();
        CheckNextElement(elem[0]);
    }
});

bttnNext.addEventListener('click', function(e) {
    if(SELECTOR.now[SELECTOR.id + 1] != undefined) {
        let nextElem = SELECTOR.now[SELECTOR.id + 1];
        UnSelected(SELECTOR.now[SELECTOR.id]);
        SELECTOR.id = SELECTOR.id + 1;
        SelectedStyle(nextElem);
        CheckBattons();
        CheckNextElement(SELECTOR.now[SELECTOR.id]);
    }
});

bttnPrev.addEventListener('click', function(e) {
    if(SELECTOR.now[SELECTOR.id - 1] != undefined) {
        let nextElem = SELECTOR.now[SELECTOR.id - 1];
        UnSelected(SELECTOR.now[SELECTOR.id]);
        SELECTOR.id = SELECTOR.id - 1;
        SelectedStyle(nextElem);
        CheckBattons();
        CheckNextElement(SELECTOR.now[SELECTOR.id]);
    }
});

bttnParent.addEventListener('click', function(e) {
    if(SELECTOR.now.length != undefined) {
        SELECTOR.now = SELECTOR.now[SELECTOR.id];
    }
    UnSelected(SELECTOR.now);
    let parentElem = SELECTOR.now.parentElement;
    SelectedStyle(parentElem);   
    SELECTOR.now = parentElem;
    CheckNextElement(SELECTOR.now);

});
bttnChild.addEventListener('click', function(e) {
    if(SELECTOR.now.length != undefined) {
        SELECTOR.now = SELECTOR.now[SELECTOR.id];
    }
    if(SELECTOR.now.children[0] != undefined) {
        UnSelected(SELECTOR.now);
        let childElem = SELECTOR.now.children[0];
        SELECTOR.now = childElem;
        SelectedStyle(childElem);
    }
    CheckNextElement(SELECTOR.now);
});

bttnNextParent.addEventListener('click', function(e) {
    if(SELECTOR.now.length != undefined) {
        SELECTOR.now = SELECTOR.now[SELECTOR.id];
    }
    if(SELECTOR.now.nextElementSibling != undefined) {
        UnSelected(SELECTOR.now);
        let nextElem = SELECTOR.now.nextElementSibling;
        SELECTOR.now = nextElem;
        SelectedStyle(nextElem);
    }
    CheckNextElement(SELECTOR.now);
})

bttnPrevParent.addEventListener('click', function(e) {
    if(SELECTOR.now.length != undefined) {
        SELECTOR.now = SELECTOR.now[SELECTOR.id];
    }
    if(SELECTOR.now.previousElementSibling != undefined) {
        UnSelected(SELECTOR.now);
        let prevElem = SELECTOR.now.previousElementSibling;
        SELECTOR.now = prevElem;
        SelectedStyle(prevElem);
    }
    CheckNextElement(SELECTOR.now);
});

function CheckNextElement(elem) {
    if(SELECTOR.now.length == undefined) {
        bttnNext.disabled = true;
        bttnPrev.disabled = true;
    }
    if(elem.parentElement != undefined) {
        bttnParent.disabled = false;
    } else {
        bttnParent.disabled = true;
    }
    if(elem.children[0] != undefined) {
        bttnChild.disabled = false;
    } else {
        bttnChild.disabled = true;
    }
    if(elem.nextElementSibling != undefined) {
        bttnNextParent.disabled = false;
    } else {
        bttnNextParent.disabled = true;
    }
    if(elem.previousElementSibling != undefined) {
        bttnPrevParent.disabled = false;
    } else {
        bttnPrevParent.disabled = true;
    }
    if (elem == document.querySelector('body')) {
        bttnParent.disabled = true;
        bttnNextParent.disabled = true;
        bttnPrevParent.disabled = true;
    }
}

function CheckBattons() {
    if(SELECTOR.now[SELECTOR.id + 1] != undefined) {
        bttnNext.disabled = false;
    } else {
        bttnNext.disabled = true;
    } 
    if (SELECTOR.now[SELECTOR.id - 1] != undefined) {
        bttnPrev.disabled = false;
    } else {
        bttnPrev.disabled = true;
    }
}