function setColor(set) {
        let changeColor = set;
        if(changeColor) {
            var userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
        }
        console.log("set color to: " + userColor);
        
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = () => { setColor(toggle) };
}
