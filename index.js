const outer = document.querySelector(".outer");
const list = document.querySelector(".list");
const closeBtn = document.querySelector(".list__close");
const consoleBtn = document.querySelector(".chapters__btn_console");
const keywordsBtn = document.querySelector(".chapters__btn_keywords");
const varBtn = document.querySelector(".chapters__btn_var");
const constBtn = document.querySelector(".chapters__btn_const");
const termsBtn = document.querySelector(".chapters__btn_terms");
const typesBtn = document.querySelector(".chapters__btn_types");
const modalsBtn = document.querySelector(".chapters__btn_modals");
const explicitBtn = document.querySelector(".chapters__btn_explicit");
const arithmeticBtn = document.querySelector(".chapters__btn_arithmetic");
const comparisonBtn = document.querySelector(".chapters__btn_comparison");
const newBtn = document.querySelector(".chapters__btn_new");

keywordsBtn.addEventListener("click", function (e) {
    outer.insertAdjacentHTML('afterend', renderArrayList(e, keywords));
});

consoleBtn.addEventListener("click", function (e) {
    outer.insertAdjacentHTML('afterend', renderObjectList(e, consoleDesc));
});

varBtn.addEventListener("click", function (e) {
    outer.insertAdjacentHTML('afterend', renderArticle(e, letAndVarContent));
});

constBtn.addEventListener("click", function (e) {
    outer.insertAdjacentHTML('afterend', renderArticle(e, constContent));
});

termsBtn.addEventListener("click", function (e) {
    outer.insertAdjacentHTML('afterend', renderObjectList(e, terms));
});

typesBtn.addEventListener("click", function (e) {
    outer.insertAdjacentHTML('afterend', renderObjectList(e, types, typesDescription));
});

modalsBtn.addEventListener("click", function (e) {
    outer.insertAdjacentHTML('afterend', renderObjectList(e, modals, modalsDescription));
});

explicitBtn.addEventListener("click", function (e) {
    outer.insertAdjacentHTML('afterend', renderObjectList(e, convertTypes));
});

arithmeticBtn.addEventListener("click", function (e) {
    outer.insertAdjacentHTML('afterend', renderObjectList(e, mathOperators));
});

comparisonBtn.addEventListener("click", function (e) {
    outer.insertAdjacentHTML('afterend', renderObjectList(e, equalOperators));
});

newBtn.addEventListener("click", function (e) {
    outer.insertAdjacentHTML('afterend', renderObjectList(e));
});