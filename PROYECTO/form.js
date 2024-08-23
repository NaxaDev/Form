function mayus(e){
    e.value = e.value.toUpperCase();
}

document.addEventListener('DOMContentLoaded', function() {

    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'America/Caracas'
    };

    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
    document.getElementById('datetime').value = formattedTime;
});


document.addEventListener('DOMContentLoaded', function() {
    
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedLastModified = lastModified.toLocaleString('en-US', options);


    document.getElementById('last-modified').textContent = `Ultima modificacion: ${formattedLastModified}`;
});

const form = document.getElementById('survey-form');
const notification = document.getElementById('notification');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    notification.style.display = 'block';
    notification.classList.add('slide-down');

  
    setTimeout(function() {
        notification.classList.remove('slide-down');
        notification.classList.add('slide-up');

        
        notification.addEventListener('animationend', function() {
            notification.style.display = 'none';
            notification.classList.remove('slide-up');
        }, { once: true });
    }, 3000); 
});