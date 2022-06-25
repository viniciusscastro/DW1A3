function somar(){
    n1 = Number.parseFloat(window.document.getElementById('txtn1').value)
    n2 = Number.parseFloat(window.document.querySelector('input#txtn2').value)
    res = document.querySelector('#soma_result')
    res.innerText= Number(n1+n2)
}

function fatorial(){
    var n3 = Number.parseFloat(window.document.querySelector('input#txtn3').value)
    var res = n3;
    for (var i = 1; i < n3; i++) {
        res *= i;
    }
    window.document.querySelector('#fatorial_result').innerText = res;
}

window.document.querySelector('input#txtn2').addEventListener('keyup',function(){
    if(window.document.querySelector('input#txtn1') && (window.document.querySelector('input#txtn2').value!='')){
        somar();
    }else{
        res = document.querySelector('#soma_result')
        res.innerText= 0
    }
})

window.document.querySelector('input#txtn3').addEventListener('keyup',function(){
    if(window.document.querySelector('input#txtn3') && (window.document.querySelector('input#txtn3').value!='')){
        fatorial();
    }else{
        res = document.querySelector('#fatorial_result')
        res.innerText= 0
    }
})

