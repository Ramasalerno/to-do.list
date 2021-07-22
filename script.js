const INPUT = document.querySelector("input");
const ADD_BTN = document.querySelector(".btn-add");
const UL = document.querySelector("ul");
const EMPTY = document.querySelector(".empty");

ADD_BTN.addEventListener('click', (evento) => {
    //.preventDefault evita que se recargue la pagina
    evento.preventDefault();

    const TEXT = INPUT.value;

    if (TEXT.length>0) {
        const LI = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = TEXT;

        LI.appendChild(p);
        LI.appendChild(ADD_DELETE_BOTON());
        //REFERENCIA A LA CONSTANTE UL sobre la constante LI
        UL.appendChild(LI);

        INPUT.value = '';
        EMPTY.style.display = "none";
    }
});

function ADD_DELETE_BOTON() {
    const DELETE_BOTON = document.createElement('button');

    DELETE_BOTON.textContent = "X";
    //.classname quita la clase que tenga el elemento y le asigna una nueva
    DELETE_BOTON.className = "btn-delete";

    DELETE_BOTON.addEventListener('click', (e) => {
        const ITEM = e.target.parentElement;
        UL.removeChild(ITEM);

        const ITEMS = document.querySelectorAll('li');

        if (ITEMS.length === 0) {
            EMPTY.style.display = "block";
        }
    });
    return DELETE_BOTON;
}