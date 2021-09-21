var currentRow = 0;

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

    
    likeField.setAttribute('id', 'like-field-'+currentRow)
    percentageField.setAttribute('id', 'percentage-field-'+currentRow)
    editField.setAttribute('id', 'edit-field-'+currentRow)
    
    var editText = document.getElementById('like-edit-'+currentRow);
    editText.setAttribute('class', 'like-edit')
    editText.setAttribute('onclick', 'editLike('+currentRow+')')
}

function editLike(row){
    var likeField = document.getElementById('like-field-'+row);
    var percentageField = document.getElementById('percentage-field-'+row);
    var editField = document.getElementById('edit-field-'+row);

    const oldLikeValue = likeField.innerText;
    const oldPercentageValue = percentageField.innerText;

    likeField.innerHTML = '<input type="text" id="input-like-edit-'+row+'"class="form-control normal-input" value="'+oldLikeValue+'">'
    percentageField.innerHTML = '<input type="text" id="input-percentage-edit-'+row+'" class="form-control normal-input" value="'+oldPercentageValue+'">'
    editField.innerHTML = 'En edición'

    var editBar = document.getElementById('bottom-edit-div');
    editBar.innerHTML = '<p class="subtitle-text">Pulse Aceptar para guardar los cambios o cancelar para anularlos</p><button type="button" class="btn btn-outline-secondary">Aceptar</button><button type="button" class="btn btn-outline-danger" onclick="location.reload()">Cancelar</button>'

    // bottom.innerHTML = `<div class="row pb-3"><div class="row text-start"><span class="text-secondary">Pulse Aceptar para guardar los cambios o cancelar para anularlos</span></div><div class="row"><div class="col-3"><a class="btn btn-success" onclick="aceptarCambios(${rowNumber})">Aceptar</a></div><div class="col-3"><a class="btn btn-danger" onclick="cancelarCambios(${rowNumber}, '${likesValue}', '${percValue}')">Cancelar</a></div></div></div>`;
}

function acceptChanges(row){
    
}