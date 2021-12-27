const defaults ={

    nome: '',
    
    inicioevento: '',

    fimevento: ''
    
    }
    
    export default class Evento{
    
    
    
    constructor(obj){
    
    this.nome= obj.nome|| defaults.nome;
    
    this.inicioevento= obj.inicioevento|| defaults.inicioevento;
    
    this.fimevento= obj.fimevento|| defaults.fimevento;
    
    }
    
    
    
    }