document.addEventListener('DOMContentLoaded', () => {
    function typeWriter(elementId, text, i, speed, callback) {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(elementId, text, i, speed, callback), speed);
        } else if (callback) {
            callback(); 
        }
    }

    const bodyId = document.body.id;
    let targetText = '';
    let targetElementId = 'typing-text';

    if (bodyId === 'index') {
        targetText = 'Principal';
    } else if (bodyId === 'projetos') {
        targetText = 'Projetos';
    } else if (bodyId === 'contato') { 
        targetText = 'Meios de comunicação<br>e outras redes'; 
    }
    else {
        return; 
    }

    document.getElementById(targetElementId).innerHTML = '';

    
    const initialDelay = 1000; 

    setTimeout(() => {
        typeWriter(targetElementId, targetText, 0, 80); 
    }, initialDelay);
});

