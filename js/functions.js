function renderObjectList(event, list = {}, description = '') {
    if (Object.keys(list).length === 0) {
        return noDataMessage;
    }
    let str = '<div class="list">';
    str += '<h1 class="list__heading">' + event.target.value + '</h1>';
    if (description) {
        str += '<p class="list__subtitle">' + description + '</p>';
    }
    str += '<button class="list__close" onclick="this.parentNode.remove()">X</button>'
    for (let item in list) {
        str += '<div class="list__item">' +
            '<h3 class="list__title">' +
            item + '</h3>' + '<p class="list__desc">' +
            list[item] +
            '</p>' + '</div>';
    }
    str += '</div>';
    return str;
}

function renderArrayList(event, list = [], description = '',) {
    if (list.length === 0) {
        return noDataMessage;
    }
    let str = '<div class="list">';
    str += '<h1 class="list__heading">' + event.target.value + '</h1>';
    if (description) {
        str += '<p class="list__subtitle">' + description + '</p>';
    }
    str += '<button class="list__close" onclick="this.parentNode.remove()">X</button>'
    for (let item of list) {
        str += '<div class="list__item">' + item + '</div>'
    }
    str += '</div>';
    return str;
}

function renderArticle(event, text = "") {
    if (text === "") {
        return noDataMessage;
    }
    let str = '<div class="article">';
    str += '<h1 class="article__title">' + event.target.value + '</h1>';
    str += '<button class="list__close" onclick="this.parentNode.remove()">X</button>'
    str += text;
    str += '</div>';
    return str;
}