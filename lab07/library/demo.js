//Crate class's name demo
//var demo = {
//    data:"XXX",
//    test:"Text",
//    
//    calculated : function(x,y){
//        return x+y;
//    }
//}

function Demo(){
    this.data ="XXX",
    this.text = "Text",
    this.calculated = function(x,y){
        return x+y;
    }
}

module.exports = new Demo();
