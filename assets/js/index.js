function randomColor(e,g){if(e[0]){if(!e[0].nodeName){return}}else{if(!e.nodeName){return}}if(e.style){var f=[e];length=1}else{if(!e[0].style){return}var f=e;length=e.length}for(var c=0;c<length;c++){var b=~~(256*Math.random());var a=~~(256*Math.random());var d=~~(256*Math.random());f[c].style.backgroundColor="rgb("+b+","+a+","+d+")"}}randomColor($(".wave"));