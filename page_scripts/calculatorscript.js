function putElement(elmt) {
  var element = document.getElementById(elmt).innerHTML
  document.getElementById("output_paragraph").innerHTML =
    "Yes, you clicked the button!";
  alert(element)
}

