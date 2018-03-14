//makeGrid() function
function makeGrid(){
   var canvas = $('#pixelCanvas');
   var rows = $('#inputHeight').val();
   var columns = $('#inputWeight').val();
//for loop that adds rows to the canvas
   for (let x=1; x<=rows; x++){
      canvas.append('<tr></tr>');
    }
//for loop that adds columns to the new created rows
    for (let y=1; y<=columns; y++){
      $('tr').append('<td></td>');
    }
}

// when the submit button is clicked recals the makeGrid() function and changes the size of the canvas
$('input[type="submit"]').click(function(evt){
    evt.preventDefault();//prevents page refresh
    $('#pixelCanvas').empty();//comand to empty the canvas before creating the new one
    makeGrid();
});

// when the cell is clicked changes the cel's color
$('#pixelCanvas').click('td', function(evt){
    var pickedColor = $('#colorPicker').val();
    $(evt.target).css('background-color', pickedColor);
});
