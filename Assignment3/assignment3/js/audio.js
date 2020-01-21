// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function (){
    var MyAudio = document.querySelector("#audio");

    var som = "";

    if (audio.controls == true){
        som += "<audio controls>";
    }else{
        som += "<audio>";
    }
 
    for (var i = 0; i < audio.source.length; ++i){
        som += "<source src='" + audio.source[i].src +"' type='"+audio.source[i].type +"'>";
    }

    som += "</audio>";

    MyAudio.innerHTML += som;
}