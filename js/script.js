// WEB303 Assignment 3

function getTeamJSON() {
    $.getJSON('team.json', function(data) {
        $.each(data, function(index, teamMember) {
            var memberHTML =
                '<h2>' + teamMember.name + '</h2>' +
                '<h5>' + teamMember.position + '</h5>' +
                '<p>' + teamMember.bio + '</p>';
            $('#team').append(memberHTML);
        });
    });
}

function getTeamDataWithAjax() {
    $('#team').text('Loading...'); 
    $.ajax({
        type: 'GET',
        url: 'team.json',
        dataType: 'json',
        success: function(data) {
            setTimeout(function() {
                $('#team').empty(); 
                $.each(data, function(index, teamMember) {
                    var memberHTML =
                        '<h2>' + teamMember.name + '</h2>' +
                        '<h5>' + teamMember.position + '</h5>' +
                        '<p>' + teamMember.bio + '</p>';
                    $('#team').append(memberHTML);
                });
            }, 3000); 
        },
        error: function() {
            $('#team').text('Error: Content could not be retrieved.');
        }
    });
}

$(document).ready(function() {
    getTeamDataWithAjax(); 
});