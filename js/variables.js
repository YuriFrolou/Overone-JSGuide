const noDataMessage = '<div class="list">' +
    '<button class="list__close" onclick="this.parentNode.remove()">X</button>' +
    '<p class="no-data-message">' +
    'Данные по данному разделу пока не добавлены' +
    '</p>' +
    '</div>';

const typesDescription = '<b>Тип данных (тип)</b> – множество значений и операций, применяемых к переменной. \n' +
    'Все типы данных в JavaScript, кроме объектов, являются иммутабельными (значения не могут быть модифицированы, а только перезаписаны новым полным значением). \n';

const modalsDescription = 'Для простого взаимодействия с пользователем в браузере предусмотрены три функции: <b>alert (оповещение)</b>, <b>prompt \n' +
    '(приглашение)</b> и <b>confirm (подтверждение)</b>.<br> \n' +
    'Диалоговые окна, создаваемые этими методами:<br>\n' +
    ' - являются модальными (они приостанавливают выполнение скрипта и не позволяют пользователю взаимодействовать с остальной частью страницы, пока окно не будет закрыто.<br>\n' +
    '- их расположение и оформление определяется браузером. Как-то изменить или настроить это нельзя.<br>\n' +
    '- использовать данные функции имеет смысл только при изучении JavaScript, чтобы запросить или вывести некоторую информацию на экран. В настоящих проектах они обычно не используются.\n';