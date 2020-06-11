let c = document.createElement('p');
c.innerHTML='<b>Ответ верный</b>';
c.style.cssText = "color: green; font-size: 1em;";

let d = document.createElement('p');
d.innerHTML='<b>Ответ неверный</b>';
d.style.cssText = "color: red; font-size: 1em;";

function res_1(a){
    a  =  document.getElementById('a').value;
    let b  =  1.5;
    if(a==b){
        result_1.append(c);
    }
    else{
        result_1.append(d);
    }
}

function dec_1(){
    let e = "<p>Решение: </p><p>R ½ = MRTS x1/ x2 = MP2 / MP1 = (dF/ dx2) : (dF/dx1) = 3 : 2 = 1,5</p><p>Ответ: 1,5.</p>";
    document.getElementById('decision_1').innerHTML = e;
}

function res_2(a){
    a  =  document.getElementById('b').value;
    let b  =  4;
    if(a==b){
        result_2.append(c);
    }
    else{
        result_2.append(d);
    }
}

function dec_2(){
    let e="<p>Решение:</p><p>Производная этой функции имеет вид: Y' = 2*2X - 10.</p><p>Она будет равна нулю при X = 2,5.</p><p>Поскольку Y’’(X) = 4 > 0, то при производстве четырех единиц товара средние издержки фирмы будут минимизироваться.</p><p>Ответ: 4.</p>";
    document.getElementById('decision_2').innerHTML = e;
}

function res_3(a){
    a  =  document.getElementById('c').value;
    let b  =  0.75;
    if(a==b){
        result_3.append(c);
    }
    else{
        result_3.append(d);
    }
}

function dec_3(){
    let e="<p>Решение: </p><p>Е∑ = 1/2+ 1/4 = 3/4.</p><p>Ответ: 0,75.</p>";
    document.getElementById('decision_3').innerHTML = e;
}