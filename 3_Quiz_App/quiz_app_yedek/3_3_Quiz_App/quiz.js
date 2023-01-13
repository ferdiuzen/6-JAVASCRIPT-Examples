
function Quiz(sorular){
    this.sorular=sorular;//sorular dizisindeki sorular fonksiyonda this ile implement edildi
    this.soruIndex=0; //Başlangıç olarak ilk soru belirlendi
}
//Bu bölüm dizideki soruları , göstermek istediğimiz yere 
// göndermek için aracı görevi yapan fonksiyondur
Quiz.prototype.soruGetir=function(){
    return this.sorular[this.soruIndex];
}