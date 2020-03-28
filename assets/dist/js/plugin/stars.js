var parentItems = document.querySelector('.stars');
    // Массив из всех star
    var allItems = document.querySelectorAll('.stars .star');
    // Количетсво активных элементов
    var activeItems = document.querySelectorAll('.stars .star.active').length;

    // Функция проверяет куда нажали и меняет классы
    var cStars = function(nowPos) {
    // Убираем у всех элементов active
    for (var i = 0; allItems.length > i; i++) {
            allItems[i].classList.remove('active');
    }
    // Добавляет активный класс всем элементам до выбранного, включая выбранный
    for (var i = 0; nowPos + 1 > i; i++) {
        allItems[i].classList.toggle('active');
    } 
    }

    // При наведении
    parentItems.addEventListener('mouseover', function(e) {
        var myTarget = e.target;
    // Длина массива
    var i = allItems.length;
    // Находи выбранный элемент в массиве и заносим его индекс в переменную
    while(i--) {
        if(allItems[i] == myTarget) {
        var currentIndex = i;
        break;
        }
    }
    cStars(currentIndex);
    });

    // При клике
    parentItems.addEventListener('click', function(e) {
        // Выбранный элемент
        var myTarget = e.target;
    // Длина массива
    var i = allItems.length;
    // Находи выбранный элемент в массиве и заносим его индекс в переменную
    while(i--) {
        if(allItems[i] == myTarget) {
        var currentIndex = i;
        break;
        }
    }
    cStars(currentIndex);
        // Меняем количество активных айтемов
    activeItems = document.querySelectorAll('.stars .star.active').length;
    });

    // При мауслив
    parentItems.addEventListener('mouseleave', function(e) {
    cStars(+activeItems - 1);
    });