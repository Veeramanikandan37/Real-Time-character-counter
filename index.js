let count=0;
let totalcount=200;
document.getElementById('input').oninput=()=>{
    let len=document.getElementById('input').value;
    count=len.length;
    document.getElementById('conchar').innerHTML="Total character: "+count;
    document.getElementById('remchar').innerHTML="Remaining character: "+(totalcount-count);
}
