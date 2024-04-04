/*calling the specific functions*/
function ahaha() {
    var audio=document.getElementById(sn1)/*Accessing the specific audios by their "ID" */
    sn1.play() /*Requesting the funtion to play the audio */
}
/*calling the specific functions*/
function bang() {
    var audio=document.getElementById(sn2)/*Accessing the specific audios by their "ID" */
    sn2.play() /*Requesting the funtion to play the audio */
}
/*calling the specific functions*/
function email() {
    var audio=document.getElementById(sn3)/*Accessing the specific audios by their "ID" */
    sn3.play() /*Requesting the funtion to play the audio */
}
/*calling the specific functions*/
function dan() {
    var audio=document.getElementById(sn4)/*Accessing the specific audios by their "ID" */
    sn4.play() /*Requesting the funtion to play the audio */
}
/*calling the specific functions*/
function confused() {
    var audio=document.getElementById(sn5)/*Accessing the specific audios by their "ID" */
    sn5.play() /*Requesting the funtion to play the audio */
}
/*calling the specific functions*/
function iate() {
    var audio=document.getElementById(sn6)/*Accessing the specific audios by their "ID" */
    sn6.play() /*Requesting the funtion to play the audio */
}
/*calling the specific functions*/
function hello() {
    var audio=document.getElementById(sn7)/*Accessing the specific audios by their "ID" */
    sn7.play() /*Requesting the funtion to play the audio */
}
/*calling the specific functions*/
function scary() {
    var audio=document.getElementById(sn8)/*Accessing the specific audios by their "ID" */
    sn8.play() /*Requesting the funtion to play the audio */
}

/*calling the specific functions*/
function scary() {
    var audio=document.getElementById(sn9)/*Accessing the specific audios by their "ID" */
    sn9.play() /*Requesting the funtion to play the audio */
}

/*Using textToAudio to set the speechh audio,volume,language,picth etc*/
function textToAudio() {
    let msg=document.getElementById("tts").value;
    let speech= new SpeechSynthesisUtterance();
    speech.volume=2;
    speech.pitch=2;
    speech.rate=1;
    speech.lang="en-US"
    speech.text=msg;
    window.speechSynthesis.speak(speech);
}
