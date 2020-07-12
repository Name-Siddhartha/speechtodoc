var socket = io({query:'loggeduser='+document.getElementById("myself").innerText+"&"+"meeting_id="+window.location.href.split("conversation/")[1]},{forceNew: false});
socket.on('someone_joined', function(data) {
    console.log(data.room_data.sockets)
        var x=[];
        var y=[];
        x=[];
        y=[];
        var y = Object.keys(data.room_data.sockets);
       for(var i=0;i<data.room_data.length;++i){x.push(data.decode[y[i]])} 
console.log(x)

    document.getElementById("dtext").innerHTML=x;
})
socket.on('someone_left', function(data) {

    console.log(data.room_data.sockets)
    var x=[];
    var y=[];
    x=[];
    y=[];
    var y = Object.keys(data.room_data.sockets);
    for(var i=0;i<data.room_data.length;++i){x.push(data.decode[y[i]])} 
    console.log(x)
  
    document.getElementById("dtext").innerHTML=x;
})