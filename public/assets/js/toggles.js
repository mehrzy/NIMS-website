//Allows for resources to be filtered by several fields
$('#resourceSearch').keyup(function(){
  // get the value of the input, which we filter on
  var filter = $.trim($(this).val().toLowerCase().replace(/\s+/g, ''));
  filterResources(filter);
});

//Prevents the enter key from causing a form submission event and reloading page
$('#resourceSearch').keypress(function(key){
  if(key.which == 13) return false;
});

function openFilterModal(){
  $('#filterModal').modal('show');
}

function addFilter(filter){

    $('<div/>')
      .addClass("chip")
      .text(filter)
      .append(
        $('<i/>')
          .addClass("close fa fa-times")
          .attr("aria-hidden", true)
      )
      .insertBefore('#addFilterChip');
      

}

function filterResources(filter) {
  console.log($('.card').parent());
  /*
  $('.card').each(function(ndx, card){
    var cardContent = $.trim($(card).text().toLowerCase().replace(/\s+/g, ''));

      if(cardContent.indexOf(filter) !== -1){
        //Card resource list contains the filter, so show it
        this.style.display = "";
        $(this).parent().addClass("col-sm-12").addClass("col-lg-6");
    } else {
        //Card resource list does not contain the filter, so hide it
        this.style.display = "none";
        //removing column styles is necessary to prevent floating cards when only one result matches
        $(this).parent().removeClass("col-sm-12").removeClass("col-lg-6");
    }
  });
  */
  $('.card').each(function(){
    this.style.display = "none";
    $(this).parent().removeClass("col-sm-12").removeClass("col-lg-6");
  });

}