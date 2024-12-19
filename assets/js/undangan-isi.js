function putarLagu() {
    const lagu=document.querySelector('#lagu');
    const tombol=document.querySelector('#kontrol');

    if(lagu.paused){
        lagu.play();
        tombol.src='assets/img/of.png';
    }else{
        lagu.pause();
        tombol.src='assets/img/onn.png'
    }
}