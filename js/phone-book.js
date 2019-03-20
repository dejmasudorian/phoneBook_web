window.PhoneBook = {

    apiUrl: "http://localhost:8080/phone-book",



    add: function () {
        var first_name = $("input[title='First Name']").val();
        var last_name = $("input[title='Last Name']").val();
        var phone_number = $("input[title='Phone Number']").val();

        var data={
            'first_name': first_name,
            'last_name' : last_name,
            'phone_number' : phone_number,

        };

        $.ajax(
            {url: PhoneBook.apiUrl,
                method:"POST",
                contentType:"application/json; charset=utf-8",
                data: JSON.stringify(data)}
                .done(function (response) {
                    console.log(response);
                    //reload items table
                }));

    },

    delete: function() {
        var first_name = $("input[title='First Name']").val();
        var last_name = $("input[title='Last Name']").val();
        var phone_number = $("input[title='Phone Number']").val();

        var data={
            'first_name': first_name,
            'last_name' : last_name,
            'phone_number' : phone_number,

        };

        $.ajax({
            url: PhoneBook.apiUrl,
            method:"DELETE",
            data:JSON.stringify(data)
        }).done(function (response) {
            console.delete(response);

        });
    },

    update: function () {
        var first_name = $("input[title='First Name']").val();
        var last_name = $("input[title='Last Name']").val();
        var phone_number = $("input[title='Phone Number']").val();

        var data={
            'first_name': first_name,
            'last_name' : last_name,
            'phone_number' : phone_number,

        };

        $.ajax({
            url: PhoneBook.apiUrl,
            method:"UPDATE",
            data: JSON.stringify(data)
        }).done(function (response) {
                console.update(response);
        });
    },

    startEdit: function (id) {
        var editPerson = PhoneBook.find(function (phone) {
            console.log(phone.first_name);
            return PhoneBook.id == id;
        });
        console.debug('startEdit', editPerson);

        $('input[name=first_name]').val(editPerson.first_name);
        $('input[name=last_name]').val(editPerson.last_name);
        $('input[name=phone_number]').val(editPerson.phone_number);
        editId = id;
    },

    cancelEdit: function() {
        editId = '';
        document.querySelector(".add-form").reset();
    },

    read: function () {
        $.ajax({
            url: PhoneBook.apiUrl,
            method: "READ"
        }).done(function () {
            console.info('done:');
            console.load();
            PhoneBook.display();
        });
    },

    bindEvents: function () {
        $("#phone-book").submit(function (event) {
            event.preventDefault();

            PhoneBook.add();
            PhoneBook.delete();
            PhoneBook.read();
            PhoneBook.update()

            return false;
        });

    }

};

PhoneBook.bindEvents();