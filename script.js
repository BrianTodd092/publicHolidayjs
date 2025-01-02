const t = new Date();
const m = t.getMonth();
const c = t.getDate();
const d =t.getDay();

var dateEaster = [new Date("2025/04/21"), new Date("2026/04/06"),new Date("2027/03/29"),new Date("2028/04/17"),new Date("2029/04/02"),new Date("2030/04/21"),
new Date("2031/04/14"),new Date("2032/03/29"),new Date("2033/04/18"),new Date("2034/04/10"),new Date("2035/03/26"),new Date("2036/04/14"),new Date("2037/04/07"),
new Date("2038/04/26"),new Date("2039/04/11"),new Date("2040/04/02"),new Date("2041/04/22"),new Date("2042/04/07"),new Date("2044/04/18"),new Date("2045/04/10"),
new Date("2046/03/26"),new Date("2047/04/15"),new Date("2048/04/06"),new Date("2049/04/19"),new Date("2050/04/11"),new Date("2051/04/03"),new Date("2052/04/22"),
new Date("2053/04/07"),new Date("2054/03/30"),new Date("2055/04/19"),new Date("2056/04/03"),new Date("2057/04/23"),new Date("2058/04/15"),new Date("2059/03/31"),
new Date("2060/04/19"),new Date("2061/04/11"),new Date("2062/04/04"),new Date("2063/04/16"),new Date("2064/04/07"),new Date("2065/03/30"),new Date("2066/04/12"),
new Date("2067/04/05"),new Date("2068/04/23"),new Date("2069/04/14"),new Date("2070/03/31"),new Date("2071/04/20"),new Date("2072/04/11"),new Date("2073/03/04"),
new Date("2074/04/17"),new Date("2075/04/08"),new Date("2076/04/20"),new Date("2077/04/12"),new Date("2078/04/04"),new Date("2079/04/24"),new Date("2080/04/08"),
new Date("2081/03/31"),new Date("2082/04/20"),new Date("2083/04/05"),new Date("2084/03/27"),new Date("2085/04/16")];

for (let holiday of dateEaster){
  var b = new Date();
    var n = b.setHours(0, 0, 0, 0);  // Date != Time

if (holiday.setHours(0, 0, 0, 0) == n){

document.getElementById('e').innerHTML ="Easter Bank Holiday Monday";
}
}




if (m === 0 && c === 1){
document.getElementById('x').style.display = "block";
}
//Feb Friday Bank Holiday
else if (m === 1 && d === 5 && c === 1){

document.getElementById('x').style.display = "block";
}
//Feb
else if (m === 1 && d !== 5  && c <= 7 && d === 1 ){

//document.getElementById('x').style.display = "block";
  document.getElementById('c').innerHTML = "February Bank Holiday Monday";
}

 else if (m === 2 && c === 17){
document.getElementById('x').style.display = "block";

 }
// Bank Holiday Monday Start of Month
 else if ( m === 4  && c <= 7 && d === 1 ||  m === 5  && c <= 7 && d === 1 ||  m === 7  && c <= 7 && d === 1){

document.getElementById('x').style.display = "block";

}
else if ( m === 9 && c >= 24 && d === 1) {

document.getElementById('x').style.display = "block";

}

else if (m === 11 & c === 25  || m === 11 && c === 26){

document.getElementById('x').style.display = "block";

}
