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

    formBlocks.forEach(function (block) {
        var blockBatch = parseInt(block.getAttribute('data-batch'), 10);
        var blockDegree = block.getAttribute('data-degree');

        if (blockBatch >= selectedBatch && blockDegree === selectedDegree) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {

    var forms = document.querySelectorAll('.data');
    forms.forEach(function (form) {
        form.style.display = 'none';
    });

    document.getElementById('user-batch').addEventListener('change', filterFormBlocks);
    document.getElementById('degree').addEventListener('change', filterFormBlocks);

    var checkboxes = document.querySelectorAll('.form-block .check');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            toggleFormNextToCheckbox(checkbox);
        });
    });

    filterFormBlocks();
});

document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector('.loader');
    const contentToHide = document.querySelector('#selectors');
    const formToHide = document.querySelector('.form');
    const headerToHide = document.querySelector('.header');
    const footerToHide = document.querySelector('.footer');
    const missionToHide = document.querySelector('.mission');

    function hideContent() {
        contentToHide.style.display = 'none';
        formToHide.style.display = 'none';
        headerToHide.style.display = 'none';
        footerToHide.style.display = 'none';
        missionToHide.style.display = 'none';
    }

    function showContent() {
        contentToHide.style.display = '';
        formToHide.style.display = '';
        headerToHide.style.display = '';
        footerToHide.style.display = '';
        missionToHide.style.display = '';
    }

    loader.style.display = 'block';
    hideContent();

    setTimeout(function () {
        loader.style.display = 'none';
        showContent();
    }, 3000);
});


