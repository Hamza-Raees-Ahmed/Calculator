function abc(e){
    document.getElementById('inpfield').value += e
}
function eq(){
    var j= document.getElementById('inpfield')
    j.value = eval(j.value)
}
function clrall(){
    document.getElementById('inpfield').value = ' '
}
function clr(){
    var j= document.getElementById('inpfield')
    j.value = inpfield.slice(0,-1)
}