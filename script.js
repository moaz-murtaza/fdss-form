function toggleFormNextToCheckbox(checkbox) {
    var formDiv = checkbox.nextElementSibling;
    if (formDiv && formDiv.classList.contains("data")) {
        formDiv.style.display = checkbox.checked ? "block" : "none"; 
    }
}

function filterFormBlocks() {
    var selectedBatch = parseInt(document.getElementById('user-batch').value, 10);
    var selectedDegree = document.getElementById('degree').value;
    var formBlocks = document.querySelectorAll('.form-block');
    
    formBlocks.forEach(function(block) {
        var blockBatch = parseInt(block.getAttribute('data-batch'), 10);
        var blockDegree = block.getAttribute('data-degree');

        if (blockBatch >= selectedBatch && blockDegree === selectedDegree) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {

    var forms = document.querySelectorAll('.data');
    forms.forEach(function(form) {
        form.style.display = 'none';
    });

    document.getElementById('user-batch').addEventListener('change', filterFormBlocks);
    document.getElementById('degree').addEventListener('change', filterFormBlocks);

    var checkboxes = document.querySelectorAll('.form-block .check');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            toggleFormNextToCheckbox(checkbox);
        });
    });

    filterFormBlocks();
});
