/*var ans=0;
var s="";
add=()=>
{
    var n=parseInt(document.getElementById("num").value);
    ans=ans+n;
    if(s.length==0)
    {
        s=s+n;
    }
    else
    {
      s=s+("+"+n)
    }
    document.getElementById("result").textContent=ans;
    hist=()=>{
        
        document.getElementById("history").textContent=s;
    }
    

}
sub=()=>
{
    var n=parseInt(document.getElementById("num").value);
    ans=ans-n;
    if(s.length==0)
    {
        s=s-n;
    }
    else
    {
      s=s+("-"+n)
    }
    document.getElementById("result").textContent=ans;
    hist=()=>{
        
        document.getElementById("history").textContent=s;
    }
}
mul=()=>
{
    var n=parseInt(document.getElementById("num").value);
    ans=ans*n;
    if(s.length==0)
    {
        s=s*n;
    }
    else
    {
      s=s+("*"+n)
    }
    document.getElementById("result").textContent=ans;
    hist=()=>{
        
        document.getElementById("history").textContent=s;
    }
}
div=()=>
{
    var n=parseInt(document.getElementById("num").value);
    ans=ans/n;
    if(s.length==0)
    {
        s=s/n;
    }
    else
    {
      s=s+("/"+n)
    }
    document.getElementById("result").textContent=ans;
    hist=()=>{
        
        document.getElementById("history").textContent=s;
    }

}*/
function clearScreen() {
    document.getElementById("result").value = "";
}
function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}