var myPage = {
    olOptions: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
    checkOptions: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],

    createPage: function() {
        this.createWrapper();
        this.createForm();
    },

    createWrapper: function() {
        var divWrap = document.createElement("div");
        divWrap.className = "wrapper";
        document.body.appendChild(divWrap);
    },

    createForm: function() {
        var wrapper = document.getElementsByClassName("wrapper")[0];
        var form = document.createElement("form");
        form.setAttribute("action", "");
        form.setAttribute("method", "get");

        var header = document.createElement("h3");
        header.classList.add("centered");
        header.classList.add("boldness");
        header.innerHTML = "Тест по программированию";
        form.appendChild(header);

        var divForm = document.createElement("div");
        divForm.className = "form-group";
        form.appendChild(divForm);

        var olList = this.createOl(this.olOptions);
        divForm.appendChild(olList);

        form.appendChild(this.createButton());
        wrapper.appendChild(form);
    },

    createOl: function(array) {
        var list = document.createElement('ol');
        for (var i = 0; i < array.length; i++) {
            var item = document.createElement('li');
            item.classList.add("boldness");
            item.appendChild(document.createTextNode(array[i]));

            var ulList = this.createUl(this.checkOptions);
            item.appendChild(ulList);

            list.appendChild(item);
        }
        return list;
    },

    createUl: function(array) {
        var list = document.createElement('ul');
        list.classList.add("list-unstyled");
        for (var i = 0; i < array.length; i++) {
            var item = document.createElement('li');
            item.appendChild(this.createCheckbox(array[i]));
            list.appendChild(item);
        }
        return list;
    },

    createCheckbox: function(title) {
        var divCheck = document.createElement('div');
        divCheck.classList.add("checkbox");

        var label = document.createElement('label');
        var checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(title));
        divCheck.appendChild(label);
        return divCheck;
    },
    createButton: function() {
        var butWrap = document.createElement('ol');
        butWrap.classList.add("centered");
        butWrap.classList.add("form-group");

        var button = document.createElement('input');
        button.type = "button";
        button.value = "Проверить мои результаты";
        button.classList.add("btn");
        button.classList.add("btn-primary");
        butWrap.appendChild(button);
        return butWrap;
    }
};

myPage.createPage();