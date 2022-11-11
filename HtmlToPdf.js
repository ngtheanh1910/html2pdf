$(document).ready(function($) {

    $(document).on('click', '.btn_print', function(event) {
        event.preventDefault();

        //credit : https://ekoopmans.github.io/html2pdf.js

        var element = document.getElementById('container_content');

        //easy
        //html2pdf().from(element).save();

        //custom file name
        //html2pdf().set({filename: 'code_with_mark_'+js.AutoCode()+'.pdf'}).from(element).save();


        //more custom settings
        var opt = {
            margin: 1,
            filename: 'pageContent_' + js.AutoCode() + '.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 2
            },
            jsPDF: {
                unit: 'in',
                format: 'letter',
                orientation: 'portrait'
            }
        };

        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();


    });


});