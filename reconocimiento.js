let video;
let featureExtractor;
let clasificador;
let imgMasc=0;
let imgNoMasc=0;
let perdida=0;

function setup(){
    noCanvas();
    video=createCapture(video);
    video.parent("contenedorvideo");
    featureExtractor=ml5.featureExtractor("MobileNet",modelolisto);
    clasificador=featureExtractor.clasification(video,videolisto);
    cargabotones;

}
function modelolisto(){
    select("#estadomodelo").html("modelo cargado");
}
function modelolisto(){
    select("#estadovideo").html("video cargado");
}
function cargabotones(){
    botonA=select("#btnmascarilla");
    botonA.moussePressed(function (){
        clasificador.addImage('con_mascarilla');
        select("#sumamascarilla").html(imgMasc=imgMasc+1);
    });
    
    botonB=select("#btnnomascarilla");
    botonB.moussePressed(function (){
        clasificador.addImage('sin_mascarilla');
        select("#sumanomascarilla").html(imgNoMasc=imgNoMasc+1);
    });
    
    botonEnt=select("#btnentrenar");
    botonEnt.moussePressed(function (){
        clasificador.train(function (vperdida){
            if (vperdida) {
                perdida=vperdida;
                select("#perdida").html("perdida"+perdida);    
            }else{
                select("#perdida").html("entrenamiento terminado don perdida de "+perdida);

            }
        });
        
    });
    botonPred = select("#btnpredecir");
    botonPred.moussePressed(function(){
        clasificador.classify(muestraResultado);

    });
}
function muestraResultado(err,res){
    console.log(res);
    clasificador.classify(muestraResultado);
    select("#result").html(res);
}
