function append(value){
    document.getElementById('display').value+=value;
}
function calculate(){
    var result=eval(document.getElementById('display').value)
    document.getElementById('display').value=result;
}
function allclear(){
    document.getElementById('display').value='';
}
function del(){
    var del=document.getElementById('display').value
    document.getElementById('display').value=del.substring(0,del.length-1);
}
