
// document.addEventListener('DOMContentLoaded', function() {

    // Dropdwon for one single li
    // const link = document.getElementById('dropdownLink');
    // const content = document.getElementById('dropdownContent');

    // link.addEventListener('click', function(event) {
    //     if (content.classList.contains('hidden')) {
    //         content.classList.remove('hidden');
    //         content.classList.add('visible');
    //     } else {
    //         content.classList.remove('visible');
    //         content.classList.add('hidden');
    //     }
    // });
// });

    // Dropdown for multiple li's

document.addEventListener('DOMContentLoaded', function() {

    // Dropdown content for project section
    var dropDownLinks = document.querySelectorAll('#dropdownParent .dropdownLink');

    dropDownLinks.forEach(function(link) {

        link.addEventListener('click', function(event) {
            event.preventDefault();

            var dropDownContent = this.nextElementSibling;
            if (dropDownContent.classList.contains('hidden')) {
                dropDownContent.classList.remove('hidden');
                dropDownContent.classList.add('visible');
            } else {
                dropDownContent.classList.remove('visible');
                dropDownContent.classList.add('hidden');
            }
        });
    });


    // Dropdown mobile menu

    const link = document.getElementById('dropdownBtn');
    const content = document.getElementById('dropdownBtnMenu');
    
    link.addEventListener('click', function(event) {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            content.classList.add('visible');
        } else {
            content.classList.remove('visible');
            content.classList.add('hidden');
        }
    });


});


