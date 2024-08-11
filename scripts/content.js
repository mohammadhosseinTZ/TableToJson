$(document).ready(function () {
  const tables = [];
  //create btn
  $("table").prepend("<button class=toJson>to JSON>>></button>");

  btnClicked();
});

function btnClicked() {


  $(".toJson").click(function () {
    let rows = [];
    const trEls = $(this).parent().find($(" tr:has(td)"));
    const thEls = $(this)
      .parent()
      .find($(" tr:nth-of-type(1) th, tr:nth-of-type(1) td"));

    trEls.each(function (i, el) {
      let tdEl = $(el).find($("td"));

      // console.log($(tdEl).get(0).innerHTML);
      let a = {};
      let jsonType = {};
      thEls.each(function (index, item) {
        a[$(item).text()] = $(tdEl).get(index).innerText;
      });
      rows.push(a);
    });

    jsonType = JSON.stringify(rows);
    console.log(jsonType);
    $("body").prepend(`<div class=jsonPopUp> </div>`);

    $(".jsonPopUp").html(jsonType);
    $(".jsonPopUp").prepend(
      `    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
      ` );
      $(".jsonPopUp svg").click(function () {
        $(this).parent().fadeOut(300);
      });
    $(".jsonPopUp").prepend("<input class=motCopy type='button' value='COPY JSON' } />");
    $(".motCopy").click(function () {
      
      var temp = $("<input>");
      $("body").append(temp);
     temp.val(jsonType).select();
      document.execCommand("copy");
      temp.remove();
    });
 

    
  });
}
