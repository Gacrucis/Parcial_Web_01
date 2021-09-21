var currentRow = 0;
var inEdition = false;

function addLike(){
    const likeInput = document.getElementById('like-input');

    if (likeInput.value == ''){
        return;
    }

    const likeTable = document.getElementById('like-table');
    var row = likeTable.insertRow();
    currentRow += 1;

    var likeField = row.insertCell();
    var percentageField = row.insertCell();
    var editField = row.insertCell();

    likeField.innerHTML = likeInput.value;
    percentageField.innerHTML = 0;
    editField.innerHTML = '<a id="like-edit-'+currentRow+'" >Editar</a>';

    
    likeField.setAttribute('id', 'like-field-'+currentRow);
    percentageField.setAttribute('id', 'percentage-field-'+currentRow);
    editField.setAttribute('id', 'edit-field-'+currentRow);
    
    var editText = document.getElementById('like-edit-'+currentRow);
    editText.setAttribute('class', 'like-edit');
    editText.setAttribute('onclick', 'editLike('+currentRow+')');
}

function editLike(row){

    if (inEdition){
        alert("Solo se puede editar una línea. Recargue la página para poder editar otra")
        return;
    }

    inEdition = true;
    var likeField = document.getElementById('like-field-'+row);
    var percentageField = document.getElementById('percentage-field-'+row);
    var editField = document.getElementById('edit-field-'+row);

    const oldLikeValue = likeField.innerText;
    const oldPercentageValue = percentageField.innerText;

    likeField.innerHTML = '<input type="text" id="input-like-edit-'+row+'"class="form-control normal-input" value="'+oldLikeValue+'" name="gusto">';
    percentageField.innerHTML = '<input type="text" id="input-percentage-edit-'+row+'" class="form-control normal-input" value="'+oldPercentageValue+'" name="porc">';
    editField.innerHTML = 'En edición';

    var editBar = document.getElementById('bottom-edit-div');
    editBar.innerHTML = '<p class="subtitle-text">Pulse Aceptar para guardar los cambios o cancelar para anularlos</p><button type="submit" class="btn btn-outline-secondary">Aceptar</button><button type="button" class="btn btn-outline-danger" onclick="location.reload()">Cancelar</button>';

}

function getResults(){
    inEdition = false;
    const requestParameters = new URLSearchParams(window.location.search);

    document.getElementById("name-label").innerText = requestParameters.get("name");
    document.getElementById("email-label").innerText = requestParameters.get("email");
    document.getElementById("phone-label").innerText = requestParameters.get("telefono");
    document.getElementById("like-label").innerText = requestParameters.get("gusto");
    document.getElementById("percentage-label").innerText = requestParameters.get("perc");

}