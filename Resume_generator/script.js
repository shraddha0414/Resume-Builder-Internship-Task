function addNewWEField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkdT").innerHTML = document.getElementById("linkdField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName('weField');
    let str = '';
    for (let e of wes) {
        str += '<li>' + e.value + '</li>';
    }
    document.getElementById('weT').innerHTML = str;

    let aqs = document.getElementsByClassName('eqField');
    let str1 = '';
    for (let e of aqs) {
        str1 += '<li>' + e.value + '</li>';
    }
    document.getElementById('aqT').innerHTML = str1;

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}


function previewResume() {
    var form = document.getElementById("resumeForm");
    var previewContent = "";

    // Iterate over form elements to construct preview content
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];
        // Check if the element is an input or textarea
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            // Add a label with the name of the input field and its value
            previewContent += "<p><strong>" + element.name + ":</strong> " + element.value + "</p>";
        }
    }

    // Display preview content in the preview container
    var previewContainer = document.getElementById("previewContainer");
    previewContainer.style.display = "block";
    previewContainer.innerHTML = previewContent;
}




function printCV() {
    window.print();
}
