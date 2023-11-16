$(document).ready(function () {
    // Initial data load
    getData();

    $('#characters-data').click(function () {
        var field = $(this).data();
        console.log(field)
        // field.sort()
    });

    function getData() {
        // $('#characters-data').text('Loading....')
        $.ajax({
            url: 'data.json',
            dataType: 'json',
            success: function (data) {
                $('#characters-data').empty();

                $.each(data, function (index, character) {
                    var row = '<tr>';
                    row += '<td>' + character.firstName + '</td>';
                    row += '<td>' + character.lastName + '</td>';
                    row += '<td>' + character.region + '</td>';
                    row += '<td>' + character.age + '</td>';
                    row += '<td>' + character.date + '</td>';
                    row += '</tr>';
                    
                    $('#characters-data').append(row);
                    

                    
                    
                });
            }
        });



        // function sortTable(field) {
        //     var tbody = $('character-data')
        //     tbody.sort()
        // }
    }




});

