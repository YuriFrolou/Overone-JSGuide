const keywords = [
    "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default",
    "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "function",
    "if", "implements", "import", "in", "instanceof",
    "interface", "let", "new", "null", "package", "private", "protected",
    "public", "return", "super", "switch", "static", "this",
    "throw", "try", "true", "typeof", "var", "void", "while", "with", "yield"
];

const consoleDesc = {
    debug: "Выводит сообщение в веб.консоль Сообщение отображается только если консоль настроена на показ сообщений уровня отладки. Аналог console.log()",
    error: "Выводит сообщение об ошибке. Для форматирования вы можете использовать подстановочные символы (маски) с дополнительными параметрами",
    info: "Информационное сообщение. Для форматирования вы можете использовать подстановочные символы (маски) с дополнительными параметрами. Аналог console.log()",
    log: "Общий метод вывода информации. Для форматирования вы можете использовать подстановочные символы (маски) с дополнительными параметрами",
    warn: "Выводит предупреждающее сообщение. Для форматирования вы можете использовать подстановочные символы (маски) с дополнительными параметрами",
    dir: "Отображает интерактивный список свойств указанного объекта JavaScript. Этот список позволит вам посмотреть дочерние объекты и их свойства",
    dirxml: "Отображает представление указанного объекта в XML/HTML-виде, если это возможно. Если нет - в виде JavaScript-объекта (как в виде 'console.dir()')",
    table: "Отображает табличные данные в виде таблицы",
    trace: "Вывод трассировки стека",
    group: "Создаёт новую группировку сообщений, сдвигая все следующие выводимые строки вправо на один уровень. Для завершения группы вызовите groupEnd()",
    groupCollapsed: "Создаёт новую группировку сообщений, сдвигая все следующие сообщения вправо на один уровень; в отличие от group() вывод происходит в свёрнутую группу, требующую раскрыть её вручную по кнопке. Для завершения группы вызовите groupEnd()",
    groupEnd: "Выход из текущей группы",
    clear: "Очистка консоли",
    count: "Выводит количество вызовов метода с определённой меткой (передаётся в параметре метода)",
    countReset: "Обнуляет значение счётчика с заданным значением",
    assert: "Выводит в консоль (имеется ввиду веб-консоль) сообщение и стек вызова метода, если первый аргумент false",
    profile: "Запускает профайлер, встроенный в браузер (например, Firefox performance tool). Вы можете указать метку профиля (по желанию)",
    profileEnd: "Останавливает профайлер.Вы можете посмотреть результат в инструментах анализа производительности браузера (например, Firefox performance tool)",
    time: "Запускает таймер с именем из переданного параметра. Можно запустить одновременно до 10,000 таймеров на странице",
    timeLog: "Выводит в консоль текущее значение таймера, запущенного вызовом console.time()",
    timeEnd: "Останавливает указанный таймер и записывает в лог, сколько прошло секунд от его старта",
    timeStamp: "Ставит маркер в браузерном инструменте измерения производительности Timeline или Waterfall",
    context: "экспериментальная функция Chrome / V8, который создает новый контекст для вывода на консоль",
    memory: "Позволяет отображать размер буфера. Использовать его стоит, если не слишком понятна статистика производительности, а знакомиться с графиками времени нет"
};

const types = {
    "Number (Число)": "Примитивный тип данных. Представляет числа в JavaScript, которые могут быть целыми или дробными, положительными и отрицательными. В качестве разделителя между целой и дробной частями используется точка. Диапазон значений: от -2<sup>53</sup> до 2<sup>53</sup>\n" +
        "<br><code>let x = 45;<br>\n" +
        "let y = 23.897;</code><br>\n" +
        "Ноль в JS имеет два представления: -0 и +0. («0» - синоним +0).\n" +
        "Существует несколько символических значений: +Infinity (положительная бесконечность, получаем при делении на +0), -Infinity (отрицательная бесконечность, получаем при делении на -0), и NaN (не число). Через NaN полезно представлять ошибочные операции с числами. Например, умножение числа на undefined не является допустимой операцией, поэтому дает NaN.\n",
    "String (Строка)": "Примитивный тип данных. Строка – это последовательность одного или более символов, которые могут состоять из букв, цифр или других знаков. Каждый символ в строке JavaScript доступен по номеру индекса. Первый элемент имеет индекс 0. Длина строки — это количество элементов в ней. Строки в JavaScript являются иммутабельными.\n" +
        "<br><code>let language = `JavaScript`;</code>\n" +
        "В JavaScript любое значение, заключенное в одинарные, двойные или косые кавычки, является строкой. Двойные кавычки и одинарные кавычки ведут себя одинаково. Использование косых кавычек добавляет дополнительный функционал, как например, интерполяция (шаблонные литералы) - встраивание данных в строку.\n" +
        "Шаблонными литералами называются строковые литералы, допускающие использование выражений внутри, обозначаемых знаком $ и фигурными скобками (${выражение}):\n" +
        "<br><code>let user = \"Tom\";<br>\n" +
        "let text = `Name: ${user}`;</code><br>\n",
    "Булевый тип данных (Boolean)": "Представляет логическую сущность и имеет два значения: true (истина) и false (ложь). \n" +
        "<br><code>let isAlive = true;</code><br>\n",
    "Null": "Примитивный тип данных. Имеет всего одно значение: null (отсутствие значения). Должно быть установлено явно.<br><code>let isAlive = null;\n" +
        "<br>console.log(isAlive); // null</code><br>\n",
    "Undefined": "Примитивный тип данных. Переменная, которой не было присвоено значение, будет иметь значение undefined. \n" +
        "<br><code>let isAlive;<br>\n" +
        "console.log(isAlive); // undefined</code><br>\n",
    "Тип данных Символ (Symbol)": "Примитивный тип данных. Символ — это уникальное и иммутабельное примитивное значение, которое может быть использовано как ключ для свойства объекта. \n" +
        "<br><code>let id = Symbol(\"id\");</code><br>\n",
    "Тип данных BigInt": "Примитивный тип данных. Служит для представления очень больших целых чисел, которые выходят за пределы диапазона типа number. Для определения числа как значения типа BigInt в конце числа добавляется суффикс n:\n" +
        "<br><code> let bigInt = 19241924124n;</code><br>\n",
    "Object (Объект)": "Ссылочный тип данных.\n" +
        "Объект в JavaScript — это просто коллекция свойств, состоящая из пар ключ-значение. Ключом может быть строка или Symbol, а значением — любой тип данных. Функции объекта называются методами. Свойства не являются обязательными. Работа с любыми объектами ведется исключительно по ссылке.\n" +
        "Создание объекта:\t\n<br>" +
        "<code>let user = new Object();<br>\n" +
        "let user = {<br>\n" +
        "name: “Yuriy”,<br>\n" +
        "age: 43<br>\n" +
        "};\n</code><br>" +
        "Доступ к свойству объекта:\n" +
        " – через точку:</br><code>user.age = 26;</code><br>\n" +
        "\n" +
        "– синтаксис массивов: <br><code>user[\"name\"] = \"Tom\";</code><br>\n" +
        "\n" +
        "С помощью оператора typeof можно получить тип переменной:\n" +
        "<br><code>let id = 45;<br>\n" +
        "console.log (typeof id);   // number</code>\n"

};


const terms = {
    "Динамическая типизация": "JavaScript является слабо типизированным или динамическим языком. Это значит, что вам не нужно определять тип переменной заранее. Тип определится автоматически во время выполнения программы. Также это значит, что вы можете использовать одну переменную для хранения данных различных типов.",
    "Переменная в JavaScript": "именованная область в оперативной памяти компьютера, которая хранит в себе какие-либо данные: числа, строки (текст) и т.д. У каждой переменной имеется своё уникальное имя (которое вы придумываете сами), обращаясь к переменной по имени, можно получить данные которая она в себе хранит.",
    "Тип данных (тип)": "множество значений и операций у переменных.",
    "Объект": "Простая структура, используемая не только для хранения данных, но и для создания других структур, где любая структура создаётся с использованием ключевого слова new.",
    "Функция": "самостоятельный блок кода, который можно, один раз объявив, вызывать столько раз, сколько нужно. Функция может принимать параметры. Функции возвращают единственное значение.Функции в JavaScript являются объектами типа Function. Функции можно вызывать. В JS функции можно назначать переменным, передавать другим функциям в качестве аргументов, возвращать из других функций."
};

const modals = {
    "Функция alert()": "предназначена для вывода в браузере предупреждающего модального диалогового окна с сообщением и кнопкой «ОК». \n" +
        "\n" +
        "Синтаксис: <br><code>alert(message)</code>:\n" +
        "message - текст сообщения\n",
    "Функция prompt()": "предназначена для вывода диалогового окна с сообщением, текстовым полем для ввода данных и с кнопками «ОК» и «Отмена»  \n" +
        "Синтаксис: <br><code>prompt(message, default)</code>\n" +
        "message - текст сообщения\n" +
        "default - начальное значение для поля ввода, которое будет по умолчанию в нём отображаться (является не обязательным)\n" +
        "Результат работы функции можно сохранить в переменную для дальнейшего использования\n" +
        "\n" +
        "<br><code>const name=prompt(‘Enter your  name’);</code>\n",
    "Функция confirm() ": "применяется для вывода модального диалогового окна с сообщением и с кнопками «ОК» и «Отмена». Обычно используется для запроса разрешения у пользователя на выполнение того или иного действия.\n" +
        "\n" +
        "Синтаксис: <br><code>confirm(question)</code>:\n" +
        "question - текст сообщения (вопроса)\n" +
        "\n" +
        "Функция confirm может вернуть следующие результаты:\n" +
        "true - если пользователь нажал на кнопку «ОК»;\n" +
        "false - в остальных случаях.\n" +
        "\n" +
        "Результат работы функции можно сохранить в переменную для дальнейшего использования\n" +
        "<br><code>const isAgree=confirm(‘Continue?’);</code>\n"
};

const convertTypes = {
    "Явное логическое приведение типов": "<strong>Функция Boolean (value)</strong>\n" +
        "Производит приведение передаваемого в скобках аргумента (литерал или переменная) к логическому типу<br>\n" +
        "<b>Falsy values</b><br>\n" +
        "такие значения в результате приведения их к логическому типу всегда будут возвращать false:<br>\n" +
        "\"\" (пустая строка), 0, null, undefined, NaN, false<br>\n" +
        "\n" +
        "<b>Truthy values</b><br>\n" +
        "Все остальные значения, не входящие в Falsy values, в т.ч массивы, объекты, функции\n" +
        "\n",

    "Явное приведение типов к числу": "<strong>Функция Number (value)</strong><br>\n" +
        "Производит приведение передаваемого в скобках аргумента (значение или переменная) к числовому типу, если это невозможно, возвращает NaN\n" +
        "<br>Пример: \n" +
        "<br><code>Number ('5') // 5</code> (число)<br>\n" +
        "<b>Особенное поведение:</b><br>\n" +
        "<code>Number (\"\") // 0 </code><br>\n" +
        "<code>Number (null) // 0</code><br>\n" +
        "<code>Number (false) // 0</code><br>\n" +
        "<code>Number (true) // 1</code><br>\n" +
        "<code>Number (undefined) // NaN</code><br>\n" +
        "<code>Number ('12px') // NaN</code><br>\n" +
        "<strong>Оператор + (унарный плюс)</strong><br>\n" +
        "Вариант неявного преобразования к числу. Работает аналогично Number ()<br>\n" +
        "<strong>Функция parseInt (value)</strong><br>\n" +
        "Принимает строку в качестве value и возвращает целое число\n" +
        "<br><b>Пример:</b><br> \n" +
        "<code>parseInt ('5') // 5</code> (целое число)<br>\n" +
        "<code>parseInt ('5.4') // 5 </code>(целое число, дробная часть отбрасывается)<br>\n" +
        "\n" +
        "<b>Особенное поведение:</b><br>\n" +
        "<code>parseInt (\"\") // NaN</code><br>\n" +
        "<code>parseInt (null) // NaN</code><br>\n" +
        "<code>parseInt (false) // NaN</code><br>\n" +
        "<code>parseInt (true) // NaN</code><br>\n" +
        "<code>parseInt (undefined) // NaN</code><br>\n" +
        "<code>parseInt ('px12') // NaN </code>(если какие-то символы стоят перед числом, вернет NaN)<br>\n" +
        "<code>parseInt ('12px') // 12</code> (если символы стоят после числа, они будут отброшены)<br>\n" +
        "\n" +
        "<strong>Функция parseFloat (value)</strong><br>\n" +
        "Работает по тому же принципу, что и parseInt, только возвращает десятичное число (число с плавающей точкой)\n" +
        "<br><b>Пример:</b><br> \n" +
        "<code>parseFloat ('5') // 5 </code>(число с плавающей точкой)<br>\n" +
        "<code>parseFloat ('5.4') // 5.4 </code>(число с плавающей точкой)<br>\n" +
        "\n" +
        "<b>Особенное поведение:</b><br> аналогично parseInt\n",

    "Явное приведение типов к строке": "<strong>Функция String (value)</strong><br>\n" +
        "Возвращает value в виде строки\n" +
        "<br><b>Пример:</b><br>\n" +
        "<code>String(5) // '5'</code><br>\n" +
        "<code>String(null) // 'null'</code><br>\n" +
        "<code>String(undefined) // 'undefined'</code><br>\n" +
        "Для массивов не применяется. Вернет пустую строку<br>\n" +
        "<strong>Метод  (value).toString()</strong><br>\n" +
        "Возвращает value в виде строки. Value следует передавать либо в виде строки, либо в виде переменной.\n" +
        "<br><b>Пример:</b><br>\n" +
        "<code>(15).toString() // '15'</code><br>\n" +
        "<code>(true).toString() // 'true'</code><br>\n" +
        "<code>let x=5;  x.toString() // '5'</code><br>\n" +
        "Вызов метода у undefined или null вызовет ошибку.\n",

    "Неявное приведение типов к типу String": "При сложении любого типа данных со строкой, JS вернет строку (порядок не имеет значения)\n" +
        "<br><b>Пример:</b><br>\n" +
        "<code>15 + 'string' // '15string'</code>\n",

    "Неявное приведение типов к типу Number": "Выполняют следующие операторы:<br>\n" +
        "- Арифметические (-, +, *, /, %)<br>\n" +
        "Но при сложении, если 1 из операндов является строкой, происходит приведение к строке.<br>\n" +
        "- Операторы сравнения (>, <, >=, <=)<br>\n" +
        "- Побитовые операторы (|, &, ^, ~)<br>\n" +
        "- Унарный оператор +<br>\n" +
        "- Оператор нестрогого равенства  ==  и  !=<br>\n" +
        "\n" +
        "Если преобразование в число невозможно, возвращается NaN.<br>\n" +
        "-\tTrue  в числовом выражении 1\n" +
        "-\tFalse, null, \"\" (пустая строка)   в числовом выражении 0<br>\n" +
        "-\tUndefined – NaN<br>\n" +
        "(при применении == к null и undefined, преобразование в число не происходит)\n",

    "Неявное приведение типов к типу Boolean": "-\tВызывается в логическом контексте<br>\n" +
        "<code>if(x){…}</code><br>\n" +
        "Выражение, заключенное в скобки, после if, всегда будет преобразовываться к булевому типу<br>\n" +
        "    -    Вызывается логическими операторами &&, ||<br>\n" +
        "Логические операторы приводят операнды к булевому типу только для внутренних целей, а возвращают значения исходных операндов<br>\n" +
        "     -   Вызывается оператором !!\n"
};

const mathOperators = {
    "Сложение (+)": "Аналогичен математической операции сложения.<br>\n" +
        "Оператор: бинарный<br>\n" +
        "Приоритет: 13 из таблицы приоритетов<br>\n" +
        "Ассоциативность: слева направо<br>\n" +
        "Операция сложения с одновременным присваиванием:<br> \n" +
        "<code>let a=3; let b=7;</code><br>\n" +
        "<code>a+=b (результат аналогичен a=a + b)</code>\n",

    "Вычитание (-)": "Аналогичен математической операции вычитания<br>\n" +
        "Оператор: бинарный<br>\n" +
        "Приоритет: 13 из таблицы приоритетов<br>\n" +
        "Ассоциативность: слева направо<br>\n" +
        "Операция вычитания с одновременным присваиванием:<br> \n" +
        "<code>let a=3; let b=7;</code><br>\n" +
        "<code>a-=b (результат аналогичен a=a-b)</code>\n",

    "Деление (/)": "Аналогичен математической операции деления<br>\n" +
        "Оператор: бинарный<br>\n" +
        "Приоритет: 14 из таблицы приоритетов<br>\n" +
        "Ассоциативность: слева направо<br>\n" +
        "Операция деления с одновременным присваиванием: <br>\n" +
        "<code>let a=3; let b=7;</code><br>\n" +
        "<code>a/=b (результат аналогичен a=a/b)</code>\n",

    "Умножение (*)": "Аналогичен математической операции умножения<br>\n" +
        "Оператор: бинарный<br>\n" +
        "Приоритет: 14 из таблицы приоритетов<br>\n" +
        "Ассоциативность: слева направо<br>\n" +
        "Операция умножения с одновременным присваиванием:<br> \n" +
        "<code>let a=3; let b=7;</code><br>\n" +
        "<code>a*=b (результат аналогичен a=a*b)</code>\n",

    "Остаток от деления (%)": "Результат a % b – это остаток от целочисленного деления a на b.<br>\n" +
        "Оператор: бинарный<br>\n" +
        "Приоритет: 14 из таблицы приоритетов<br>\n" +
        "Ассоциативность: слева направо<br>\n" +
        "Операция остаток от деления с одновременным присваиванием:<br> \n" +
        "<code>let a=3; let b=7;</code><br>\n" +
        "<code>a%=b (результат аналогичен a=a%b)</code>\n",

    "Возведение в степень (**)": "В выражении a ** b оператор возведения в степень умножает a на само себя b раз.<br>\n" +
        "Оператор: бинарный<br>\n" +
        "Приоритет: 15 из таблицы приоритетов<br>\n" +
        "Ассоциативность: справа налево<br>\n",

    "Инкремент (++)": "Увеличивает переменную на 1<br>\n" +
        "Можно применить только к переменной. Попытка использовать его на значении (5++), приведёт к ошибке<br>\n" +
        "Оператор: унарный<br>\n" +
        "<em>Постфиксная форма:</em> оператор стоит после переменной:<br>\n" +
        "- сначала возвращает значение переменной, затем увеличивает его на 1<br>\n" +
        " - приоритет: 17 из таблицы приоритетов<br>\n" +
        "- ассоциативность: отсутствует<br>\n" +
        "<em>Префиксная форма:</em> оператор стоит перед переменной:<br>\n" +
        "- сначала увеличивает значение переменной на 1, затем возвращает значение<br>\n" +
        " - приоритет: 16 из таблицы приоритетов<br>\n" +
        "- ассоциативность: справа налево<br>\n",

    "Декремент (--)": "Уменьшает переменную на 1<br>\n" +
        "Можно применить только к переменной. Попытка использовать его на значении (5--), приведёт к ошибке<br>\n" +
        "Оператор: унарный<br>\n" +
        "<em>Постфиксная форма:</em> оператор стоит после переменной:<br>\n" +
        "- сначала возвращает значение переменной, затем уменьшает его на 1<br>\n" +
        " - приоритет: 17 из таблицы приоритетов<br>\n" +
        "- ассоциативность: отсутствует<br>\n" +
        "<em>Префиксная форма:</em> оператор стоит перед переменной:<br>\n" +
        "- сначала уменьшает значение переменной на 1, затем возвращает значение<br>\n" +
        " - приоритет: 16 из таблицы приоритетов<br>\n" +
        "- ассоциативность: справа налево<br>\n",
    "Унарный плюс +": "В основном используется для неявного преобразования нечисловых типов данных к числу<br>\n" +
        "Оператор: унарный<br>\n" +
        "Приоритет: 16 из таблицы приоритетов<br>\n" +
        "Ассоциативность: справа налево<br>\n",
    "Унарный минус -": "- Если операнд является числом, изменит его знак на противоположный<br>\n" +
        "- В противном случае, преобразует значение операнда к числу, а затем изменит его знак на противоположный<br>\n" +
        "Оператор: унарный<br>\n" +
        "Приоритет: 16 из таблицы приоритетов<br>\n" +
        "Ассоциативность: справа налево<br>\n"
};

const equalOperators = {
    "С неявным приведением типов": "- Больше: a > b<br>\n" +
        "- Меньше: a < b<br>\n" +
        "- Больше или равно: a >= b<br>\n" +
        "- Меньше или равно: a <= b<br>\n" +
        "- Равно: a == b<br>\n" +
        "- Не равно: a != b<br>\n" +
        "\n" +
        " *Возвращают логический тип данных (true/false)<br>\n" +
        " *Если операнды являются числами, JS выполняет числовое сравнение<br>\n" +
        " *Нечисловой операнд будет приведен к числу:<br>\n" +
        " <code>console.log(10 < '20') // true</code><br>\n" +
        " *true преобразуется в 1, false в 0:<br>\n" +
        " <code>console.log(true > 0) // true</code><br>\n" +
        " *При сравнении <code>null==undefined</code> результат будет true\n",
    "Без неявного приведения типов": "-Строгое равно: a === b<br>\n" +
        "- Строгое не равно: a !== b<br>\n" +
        "*Возвращают логический тип данных (true/false)<br>\n" +
        "*Не происходит неявного приведения типов (операнды сравниваются по значению и по типу данных)<br>\n" +
        "*При сравнении null==undefined результат будет false\n"
};