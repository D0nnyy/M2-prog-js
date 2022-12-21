class Dino
{

    constructor(naam,vleeseter,leeftijd,planteneter,)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.planteneter = planteneter;
        this.leeft = true;
        this.honger = true;

    }
    eetDino(Brachiosaurus) 
    {
        brachiosaurus.leeft = false;
        console.log("trex eet de dino brachiosaurus");
    }

}

class Plant
{
    constructor(naam)
    {
        this.naam = naam;
        
    }

}

class App
{
    runApplication()
    {
        let trex = new Dino("Trex",true,10,false,true);
        console.log(trex);

        let brachiosaurus = new Dino("Brachiosaurus",false,34,true,true);
        console.log(brachiosaurus)

        let triceratops = new Dino("Triceratops",false,356,true,true);
        console.log(triceratops)
    }
}


let app = new App();
app.runApplication();