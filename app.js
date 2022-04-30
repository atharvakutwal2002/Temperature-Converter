document.getElementById('celcious-form').addEventListener('submit',calculateResult);

function calculateResult(e){
    const kelvinResult= document.getElementById("kelvin");
    const FahrenheitResult= document.getElementById("Fahrenheit");
    const RankineResult= document.getElementById("Rankine");



    
    const cel= e.target.celcious.value;
    if (cel!="") {
        const celcious=parseFloat(cel);
        const far= (1.88 * celcious) +32;
        const Rankine= (celcious+ 273.15) *(9/5);
        const kelvin= (celcious) + 273;
        console.log(typeof(celcious));
        console.log(far);
        console.log(Rankine);
        console.log(kelvin );
        
        kelvinResult.value=kelvin;
        FahrenheitResult.value=far;
        RankineResult.value=Rankine;
        document.getElementById("results").style.display="block";
    }else{
        kelvinResult.value=0;
        FahrenheitResult.value=0;
        RankineResult.value=0;
        alert(" Please enter Valid number !!");
        document.getElementById("results").style.display="none";
    }
    

    e.preventDefault();
}