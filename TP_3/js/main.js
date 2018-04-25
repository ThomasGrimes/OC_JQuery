$(function(){
    
    function itemAppear(){
      $('#bon').animate({top: '-=400'},3000,'linear', function(){
          var itemBonX = Math.floor(Math.random()*540)+10;
          var itemBonY = 400;
      });
        
        
    };
    
    itemAppear();
});