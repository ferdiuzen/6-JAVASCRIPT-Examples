class UI {
   constructor() {
      this.btn_start = document.querySelector(".btn_start"),
         this.btn_next = document.querySelector(".next_btn"),
         this.quiz_box = document.querySelector(".quiz_box"),
         this.option_list = document.querySelector(".option-list");

   }
   soruGoster(soru) {
      let question = `<span> ${soru.soruMetni} </span>`;

      let options = '';

      for (let cevap in soru.cevapSecenekleri) {

         options +=
            `  
         <div class="option">  
         <span> <b> ${cevap}  </b> ${soru.cevapSecenekleri[cevap]}        </span>
         </div> `;


      }


      document.querySelector(".question_text").innerHTML = question;
      option_list.innerHTML = options;
      //    document.querySelector(".option-list").innerHTML=options;
      const option = option_list.querySelectorAll(".option"); //seçenekleri option isimli değişkene attık

      for (let opt of option) {
         opt.setAttribute("onclick", "optionSelected(this)");
      }
      //option isimli class taki seçeneğin bulunduğu listte 
      //seçim yaptırıp, seçildi olarak alınmasını sağlar
   }
   soruSayisiniGoster(soruSirasi, toplamSoru) {
      let tag = `<span class="badge bg-warning">${soruSirasi}/${toplamSoru} </span>`;

      document.querySelector(".quiz_box .question_index").innerHTML = tag;
   }
}






  