//Utilized this for pagination https://codepen.io/monkeytempal/pen/pVrwLN
//runs jquery and jquery.simplePagination.js and modified by Conley
//Pagination and Job Search Code for the different pages
/***************************************************PENDING TAB OF SECTION*****/

//separates the long list into multiples pages
function paginationPending() {
    var items = $(".pending .cardLink");
    var numItems = items.length; //number of Cards
    var perPage = 6; //how many cards per page

    items.slice(perPage).hide();

    $('#pagination-container-pending').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
}

function mySearchPending() {
    var input = document.getElementById("pendingSearch"); //get the search bar
    var filter = input.value.toUpperCase(); //convert input to Upper Case
    var information = document.getElementsByClassName("cardLink pending"); //get the cards
    // Loop through all list items, and hide those who don't match the search query
    if(!(filter)) { //if the search bar value does not have any values
      for (i = 0; i < information.length; i++) { //makes all the cards visible
        information[i].style.visibility = "visible";
        information[i].style.display = "";
      }
    } else {
      for (i = 0; i < information.length; i++) {
        var job = information[i].getElementsByTagName("h3")[0]; //job name
        var jobValue = job.textContent || job.innerText;
      
        var company = information[i].getElementsByTagName("h4")[0]; //company name
        var companyValue = company.textContent || company.innerText;

        var posType = information[i].getElementsByTagName("p")[0]; //position type
        var posTypeValue = posType.textContent || posType.innerText;
        //only keep the cards that are searched visible
        if (posTypeValue.toUpperCase().indexOf(filter) > -1 || jobValue.toUpperCase().indexOf(filter) > -1 || companyValue.toUpperCase().indexOf(filter) > -1) {
          information[i].style.visibility = "visible";
          information[i].style.display = "";
        } else { //hide cards that aren't serached
          information[i].style.visibility = "hidden";
          information[i].style.display = "none";
          document.getElementById('pagination-container-pending').style.visibility = "hidden"; //make the page numbers invisble
        }
      }
    }
  }

//refreshPage allows to rerun pagination once the search bar is clicked away or onblur
function refreshPagePending() {
    mySearchPending(); //utilizes mySearch Function
    var specifiedElement = document.getElementById("pendingSearch"); //Getting the Search Bar text value
    if(!specifiedElement.value) { //if there is no value in the search bar
        paginationPending(); //runs pagination again
        document.getElementById('pagination-container-pending').style.visibility = "visible"; //make page numbers visible
    }
}

paginationPending(); //runs pagination when the website starts

/*****END OF PENDING TAB OF SECTION*****/

/***************************************************ACCEPTED TAB OF SECTION*****/

//separates the long list into multiples pages
function paginationAccepted() {
  var items = $(".accepted .cardLink");
  var numItems = items.length; //number of Cards
  var perPage = 6; //how many cards per page

  items.slice(perPage).hide();

  $('#pagination-container-accepted').pagination({
      items: numItems,
      itemsOnPage: perPage,
      prevText: "&laquo;",
      nextText: "&raquo;",
      onPageClick: function (pageNumber) {
          var showFrom = perPage * (pageNumber - 1);
          var showTo = showFrom + perPage;
          items.hide().slice(showFrom, showTo).show();
      }
  });
}

function mySearchAccepted() {
//console.log(value);
  var input = document.getElementById("acceptedSearch"); //get the search bar
  var filter = input.value.toUpperCase(); //convert input to Upper Case
  var information = document.getElementsByClassName("cardLink accepted"); //get the cards
  // Loop through all list items, and hide those who don't match the search query
  if(!(filter)) { //if the search bar value does not have any values
    for (i = 0; i < information.length; i++) { //makes all the cards visible
      information[i].style.visibility = "visible";
      information[i].style.display = "";
    }
  } else {
    for (i = 0; i < information.length; i++) {
      var job = information[i].getElementsByTagName("h3")[0]; //job name
      var jobValue = job.textContent || job.innerText;
    
      var company = information[i].getElementsByTagName("h4")[0]; //company name
      var companyValue = company.textContent || company.innerText;

      var posType = information[i].getElementsByTagName("p")[0]; //position type
      var posTypeValue = posType.textContent || posType.innerText;
      //only keep the cards that are searched visible
      if (posTypeValue.toUpperCase().indexOf(filter) > -1 || jobValue.toUpperCase().indexOf(filter) > -1 || companyValue.toUpperCase().indexOf(filter) > -1) {
        information[i].style.visibility = "visible";
        information[i].style.display = "";
      } else { //hide cards that aren't serached
        information[i].style.visibility = "hidden";
        information[i].style.display = "none";
        document.getElementById('pagination-container-accepted').style.visibility = "hidden"; //make the page numbers invisble
      }
    }
  }
}

//refreshPage allows to rerun pagination once the search bar is clicked away or onblur
function refreshPageAccepted() {
  mySearchAccepted(); //utilizes mySearch Function
  var specifiedElement = document.getElementById("acceptedSearch"); //Getting the Search Bar text value
  if(!specifiedElement.value) { //if there is no value in the search bar
    paginationAccepted(); //runs pagination again
    document.getElementById('pagination-container-accepted').style.visibility = "visible"; //make page numbers visible
  }
}

paginationAccepted(); //runs pagination when the website starts

/*****END OF ACCEPTED TAB OF SECTION*****/

/***************************************************REJECTED TAB OF SECTION*****/

//separates the long list into multiples pages
function paginationRejected() {
  var items = $(".rejected .cardLink");
  var numItems = items.length; //number of Cards
  var perPage = 6; //how many cards per page

  items.slice(perPage).hide();

  $('#pagination-container-rejected').pagination({
      items: numItems,
      itemsOnPage: perPage,
      prevText: "&laquo;",
      nextText: "&raquo;",
      onPageClick: function (pageNumber) {
          var showFrom = perPage * (pageNumber - 1);
          var showTo = showFrom + perPage;
          items.hide().slice(showFrom, showTo).show();
      }
  });
}

function mySearchRejected() {
//console.log(value);
  var input = document.getElementById("rejectedSearch"); //get the search bar
  var filter = input.value.toUpperCase(); //convert input to Upper Case
  var information = document.getElementsByClassName("cardLink rejected"); //get the cards
  //console.log(information.length);
  // Loop through all list items, and hide those who don't match the search query
  if(!(filter)) { //if the search bar value does not have any values
    for (i = 0; i < information.length; i++) { //makes all the cards visible
      information[i].style.visibility = "visible";
      information[i].style.display = "";
    }
  } else {
    for (i = 0; i < information.length; i++) {
      var job = information[i].getElementsByTagName("h3")[0]; //job name
      var jobValue = job.textContent || job.innerText;
    
      var company = information[i].getElementsByTagName("h4")[0]; //company name
      var companyValue = company.textContent || company.innerText;

      var posType = information[i].getElementsByTagName("p")[0]; //position type
      var posTypeValue = posType.textContent || posType.innerText;
      //only keep the cards that are searched visible
      if (posTypeValue.toUpperCase().indexOf(filter) > -1 || jobValue.toUpperCase().indexOf(filter) > -1 || companyValue.toUpperCase().indexOf(filter) > -1) {
        information[i].style.visibility = "visible";
        information[i].style.display = "";
      } else { //hide cards that aren't serached
        information[i].style.visibility = "hidden";
        information[i].style.display = "none";
        document.getElementById('pagination-container-rejected').style.visibility = "hidden"; //make the page numbers invisble
      }
    }
  }
}

//refreshPage allows to rerun pagination once the search bar is clicked away or onblur
function refreshPageRejected() {
  mySearchRejected(); //utilizes mySearch Function
  var specifiedElement = document.getElementById("rejectedSearch"); //Getting the Search Bar text value
  if(!specifiedElement.value) { //if there is no value in the search bar
    paginationRejected(); //runs pagination again
    document.getElementById('pagination-container-rejected').style.visibility = "visible"; //make page numbers visible
  }
}

paginationRejected(); //runs pagination when the website starts

/*****END OF REJECTED TAB OF SECTION*****/

/***************************************************ADDITIONAL TAB OF SECTION*****/

//separates the long list into multiples pages
function paginationRecommend() {
  var items = $(".recommend .cardLink");
  console.log(items);
  var numItems = items.length; //number of Cards
  var perPage = 10; //how many cards per page
  console.log(numItems);
  items.slice(perPage).hide();

  $('#pagination-container-recommend').pagination({
      items: numItems,
      itemsOnPage: perPage,
      prevText: "&laquo;",
      nextText: "&raquo;",
      onPageClick: function (pageNumber) {
          var showFrom = perPage * (pageNumber - 1);
          var showTo = showFrom + perPage;
          items.hide().slice(showFrom, showTo).show();
      }
  });
}

function mySearchRecommend() {
  var input = document.getElementById("RecommendSearch"); //get the search bar
  var filter = input.value.toUpperCase(); //convert input to Upper Case
  var information = document.getElementsByClassName("cardLink recommend"); //get the cards
  // Loop through all list items, and hide those who don't match the search query
  if(!(filter)) { //if the search bar value does not have any values
    for (i = 0; i < information.length; i++) { //makes all the cards visible
      information[i].style.visibility = "visible";
      information[i].style.display = "";
    }
  } else {
    for (i = 0; i < information.length; i++) {
      var job = information[i].getElementsByTagName("h3")[0]; //job name
      var jobValue = job.textContent || job.innerText;
    
      var company = information[i].getElementsByTagName("h4")[0]; //company name
      var companyValue = company.textContent || company.innerText;

      var posType = information[i].getElementsByTagName("p")[0]; //position type
      var posTypeValue = posType.textContent || posType.innerText;
      //only keep the cards that are searched visible
      if (posTypeValue.toUpperCase().indexOf(filter) > -1 || jobValue.toUpperCase().indexOf(filter) > -1 || companyValue.toUpperCase().indexOf(filter) > -1) {
        information[i].style.visibility = "visible";
        information[i].style.display = "";
      } else { //hide cards that aren't serached
        information[i].style.visibility = "hidden";
        information[i].style.display = "none";
        document.getElementById('pagination-container-recommend').style.visibility = "hidden"; //make the page numbers invisble
      }
    }
  }
}

//refreshPage allows to rerun pagination once the search bar is clicked away or onblur
function refreshPageRecommend() {
  mySearchRecommend(); //utilizes mySearch Function
  var specifiedElement = document.getElementById("RecommendSearch"); //Getting the Search Bar text value
  if(!specifiedElement.value) { //if there is no value in the search bar
    paginationRecommend(); //runs pagination again
    document.getElementById('pagination-container-recommend').style.visibility = "visible"; //make page numbers visible
  }
}

paginationRecommend(); //runs pagination when the website starts

/*****END OF RECOMMEND TAB OF SECTION*****/

/***************************************************GENERIC TAB OF SECTION*****/

//separates the long list into multiples pages
function paginationGeneric() {
  var items = $(".generic .cardLink");
  var numItems = items.length; //number of Cards
  var perPage = 10; //how many cards per page

  items.slice(perPage).hide();

  $('#pagination-container-generic').pagination({
      items: numItems,
      itemsOnPage: perPage,
      prevText: "&laquo;",
      nextText: "&raquo;",
      onPageClick: function (pageNumber) {
          var showFrom = perPage * (pageNumber - 1);
          var showTo = showFrom + perPage;
          items.hide().slice(showFrom, showTo).show();
      }
  });
}

function mySearchGeneric() {
//console.log(value);
  var input = document.getElementById("generic"); //get the search bar
  var filter = input.value.toUpperCase(); //convert input to Upper Case
  var information = document.getElementsByClassName("cardLink generic"); //get the cards
  // Loop through all list items, and hide those who don't match the search query
  if(!(filter)) { //if the search bar value does not have any values
    for (i = 0; i < information.length; i++) { //makes all the cards visible
      information[i].style.visibility = "visible";
      information[i].style.display = "";
    }
  } else {
    for (i = 0; i < information.length; i++) {
      var job = information[i].getElementsByTagName("h3")[0]; //job name
      var jobValue = job.textContent || job.innerText;
    
      var company = information[i].getElementsByTagName("h4")[0]; //company name
      var companyValue = company.textContent || company.innerText;

      var posType = information[i].getElementsByTagName("p")[0]; //position type
      var posTypeValue = posType.textContent || posType.innerText;
      //only keep the cards that are searched visible
      if (posTypeValue.toUpperCase().indexOf(filter) > -1 || jobValue.toUpperCase().indexOf(filter) > -1 || companyValue.toUpperCase().indexOf(filter) > -1) {
        information[i].style.visibility = "visible";
        information[i].style.display = "";
      } else { //hide cards that aren't serached
        information[i].style.visibility = "hidden";
        information[i].style.display = "none";
        document.getElementById('pagination-container-generic').style.visibility = "hidden"; //make the page numbers invisble
      }
    }
  }
}

//refreshPage allows to rerun pagination once the search bar is clicked away or onblur
function refreshPageGeneric() {
  mySearchGeneric(); //utilizes mySearch Function
  var specifiedElement = document.getElementById("generic"); //Getting the Search Bar text value
  if(!specifiedElement.value) { //if there is no value in the search bar
    paginationGeneric(); //runs pagination again
    document.getElementById('pagination-container-generic').style.visibility = "visible"; //make page numbers visible
  }
}

paginationGeneric(); //runs pagination when the website starts

/*****END OF GENERIC TAB OF SECTION*****/

