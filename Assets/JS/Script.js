 $(document).ready(function(){
     $("a").on('click', function(event) {
     if (this.hash !== "") {
     event.preventDefault();
     var hash = this.hash;
     $('html, body').animate({
     scrollTop: $(hash).offset().top
     }, 500, function(){

     window.location.hash = hash;
     });
     }
     });
    });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
    // con esto podemos activar los popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    // con esto hacemos funcionar de manera correcta el Modal(mas interna que visualmente)
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')
    
    myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
    })