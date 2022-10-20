var obj = [ { person: "Name X", age: "18", company: "GUVI" }, { person: "Name Y", age: "19", company: "GUVI Zen" }, { person: "Name Z", age: "20", company: "GUVI geek network" }, ]


for (var i in obj){
    console.log(i, obj[i]);
}

console.log("<br>");

for(var j of obj){
    console.log(j);
}

console.log("<br>");

for(var k = 0;k<=obj.length-1;k++){
    console.log(obj[k]);
}

console.log("<br>");

obj.forEach(function (l){
    console.log(l);
});