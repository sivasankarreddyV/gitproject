 function loadjson(file,callback){
     var xhr=new XMLHttpRequest();
     xhr.overrideMimeType("application/json");
     xhr.open("GET",file,true);
     xhr.onreadystatechange=function(){
         if(xhr.readyState===4 && xhr.status=="200"){
             callback(xhr.responseText);
         }

     };
     xhr.send(null);
 }

 loadjson("data.json",function(text){
     var data =JSON.parse(text);
     console.log(data);
     display(data.cards)
 })
 
 
 function display(mb){
     var deck=document.querySelector(".card-deck")
     deck.classList.add("text-center")
     console.log(deck)
     
    for( var i in mb){
    // console.log(mb[i].name)

        var caddiv=document.createElement("div")
        caddiv.classList.add("card")
        var cadimg=document.createElement("img")
        cadimg.src=mb[i].img
        console.log(cadimg)
        caddiv.appendchild(cadimg)
        deck.appendchild(caddiv)

    // Name Area

        var cname=document.createElement("h2")
        cname.textcontent=mb[i].rate;
        caddiv.appendchild(cname)
    // rate area
        var cname=document.createElement("h3")
        rate.textcontent=mb[i].rate;
        caddiv.appendchild(rate)
    // offer area
        var ofer=document.createElement("h3")
        ofer.textcontent="off/-"+mb[i].offer;
        caddiv.appendchild(ofer)

    // button area
        var btn=document.createElement("button")
        btn.classlist.add("btn-danger")
        btn.textcontent=mb[i].button;
        caddiv.appendchild(btn)
    }
}
