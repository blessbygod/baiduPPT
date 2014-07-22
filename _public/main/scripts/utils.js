var Utils = function(){
};
Utils.prototype.catchException = function(fn){
    try{
        fn();
    }catch(ex){
        console.log(ex.message);
    }
};
var utils = new Utils();

