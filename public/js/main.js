let rectangle = document.getElementById('rendu-rectangle');

let seClick = document.getElementById('section-click');
let kids2 = document.querySelectorAll('#section-change input');

let kids = seClick.children;

for (let i = 0; i < kids.length; i++) {
    kids[i].addEventListener('click', () => {
        if (kids[i].getAttribute('data-style') == 'backgroundColor') {

            rectangle.style.backgroundColor = getComputedStyle(kids[i]).backgroundColor;

        } else if (kids[i].getAttribute('data-style') == 'borderStyle') {

            rectangle.style.borderStyle = getComputedStyle(kids[i]).borderStyle;
        } else {
            rectangle.style.borderTopWidth = getComputedStyle(kids[i]).borderTopWidth;
        }
    });
}

kids2[0].addEventListener('change', e => {
    rectangle.style.borderColor = e.target.value;

});

kids2[1].addEventListener('change', e => {
    rectangle.style.borderWidth = `${e.target.value}px`;
    
});
kids2[2].addEventListener('change', e => {
    rectangle.style.borderTopWidth = `${e.target.value}px`;
});
kids2[3].addEventListener('change', e => {
    rectangle.style.borderRightWidth = `${e.target.value}px`;
});
kids2[4].addEventListener('change', e => {
    rectangle.style.borderBottomWidth = `${e.target.value}px`;
});
kids2[5].addEventListener('change', e => {
    rectangle.style.borderLeftWidth =`${e.target.value}px`;
});



kids2[6].addEventListener('change', e => {
    rectangle.style.borderRadius =`${e.target.value}px`;
});

kids2[7].addEventListener('change', e => {
    rectangle.style.borderTopLeftRadius =`${e.target.value}px`;
});

kids2[8].addEventListener('change', e => {
    rectangle.style.borderTopRightRadius =`${e.target.value}px`;
});

kids2[9].addEventListener('change', e => {
    rectangle.style.borderBottomRightRadius =`${e.target.value}px`;
});

kids2[10].addEventListener('change', e => {
    rectangle.style.borderBottomLeftRadius =`${e.target.value}px`;
});