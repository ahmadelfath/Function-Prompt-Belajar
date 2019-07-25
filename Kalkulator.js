var a = prompt ('Nilai Pertama');
var b = prompt ('What do you want?"+" "-" "/" "*"');
var c = prompt ('Nilai kedua');
switch (b) {
    case '+':
        var jumlah = parseInt(a)+parseInt(c)
        var hasil = alert('Hasil :' +jumlah)
        break;
     case '-':
        var jumlah = parseInt(a)-parseInt(c)
        var hasil = alert('Hasil :' +jumlah)
        break;
     case '/':
        var jumlah = parseInt(a)/parseInt(c)
        var hasil = alert('Hasil :' +jumlah)
        break;
     case '*':
        var jumlah = parseInt(a)*parseInt(c)
        var hasil = alert('Hasil :' +jumlah)
        break;



    default:
        break;
}