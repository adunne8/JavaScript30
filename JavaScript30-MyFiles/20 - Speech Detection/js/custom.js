// GLOBAL VARIABLE
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const words = document.querySelector('.words');

const recognition = new SpeechRecognition();
recognition.interimResults = true;

console.log(recognition);

let p = document.createElement('p');

words.appendChild(p);

recognition.addEventListener('result', e => {
    //EVENT .proto results
    const transcript = Array.from(e.results)
        // 0: FROM results, CONTAINS transcript AND confidence ENTRIES
        .map(result => result[0])
        // TAKE THE TRANSCRIPT FROM result[0]
        .map(result => result.transcript)
        //JOIN THE STRINGS
        .join('');

    const confidence = Array.from(e.results)
        // 0: FROM results, CONTAINS transcript AND confidence ENTRIES
        .map(result => result[0])
        // TAKE THE TRANSCRIPT FROM result[0]
        .map(result => result.confidence)
        //JOIN THE STRINGS
        .join('');
    

    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }

    if(transcript.includes('get the weather')){
        console.log("Getting the weather");
        
    }
    console.log(`${transcript} : ${confidence}`);



});

// result WILL UNBIND THE EVENT - NEED TO REBIND
recognition.addEventListener('end', recognition.start);

recognition.start();