var url = "http://tiny-pizza-server.herokuapp.com/collections/chirp";

function renderTemplate(templateId, container, model) {
  var templateString = $('#' + templateId).text();
  var templateFunction = _.template(templateString);
  var renderedTemplate = templateFunction(model);
  $(container).append(renderedTemplate);
}

//Get function on loadup
$(function() {

  $.ajax(url, {
    type: 'get',
    dataType: 'json',
    success: function(data) {
      $.each(data, function(i, each) {
        renderTemplate('text-body', '.chirp-holder', each);
    });
    }
  });
});


//Post Function
$('.button').on('click', function() {
  $.ajax(url, {
    type: 'post',
    dataType: 'json',
    data: {
      text: $('#chirp-box').val()
    },
    success: function(newData) {
      renderTemplate('text-body', '.chirp-holder', newData);
    }
  });
});
