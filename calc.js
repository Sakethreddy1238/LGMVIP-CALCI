function ac()
{
document.getElementById('next').value="";
} 
function show(input)
{
    document.getElementById('next').value+=input;
} 
function kanna() 
{
    let saketh=eval(document.getElementById('next').value);
    document.getElementById('next').value=saketh;
} 
