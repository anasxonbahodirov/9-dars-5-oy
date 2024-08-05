const p = document.getElementById('p');
const l = document.getElementById('l');
const button = document.getElementById('but');
// button.addEventListener('click', function () {
//     if (input1.value === '12345' && input2.value === '67890') {
//         alert('marsga kirdiz');
//     } else {
//         alert('marsga kirmadiz');
//     }
// });
button.addEventListener('click', function () {
    if(p.value === '123456' && l.value === '78900'){
        alert('Mars spacega muvaffaqyatli otdingiz');
    }else{
        alert('Marsga kirmadiz');
    }
})