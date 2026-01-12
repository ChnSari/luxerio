        const toggleBtn = document.getElementById("themeToggle");
        const icon = toggleBtn.querySelector("i");
        const html = document.documentElement;

        /* Sayfa güncellendiğinde kayıtlı tema kontrolü */
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            html.classList.add("dark");
            icon.classList.replace("fa-moon", "fa-sun");
        }

        /* Tema Değiştirme */
        toggleBtn.addEventListener("click", () => {
            html.classList.toggle("dark");

            if (html.classList.contains("dark")) {
                icon.classList.replace("fa-moon", "fa-sun");
                localStorage.setItem("theme", "dark");
            }
            else {
                icon.classList.replace("fa-sun", "fa-moon");
                localStorage.setItem("theme", "light");
            }
        });

        /* Mobil Menü */
        const hamburger= document.getElementById("hamburger");
        const mobileMenu= document.getElementById("mobileMenu");
        const collections= document.getElementById("mobileCollections");

        /* Hamburger aç / kapat */
        hamburger.addEventListener("click",() => {
            hamburger.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        });

        /* Mobil Collections aç / kapat */
        collections.addEventListener("click", () => {
            collections.classList.toggle("active");
        });

        const grid = document.querySelector('.product-grid');
        const cards = document.querySelectorAll('.product-card');
        const dots = document.querySelectorAll('.product-dots .dot');

        grid.addEventListener('scroll', () => {
            const scrollLeft = grid.scrollLeft;
            const cardWidth = cards[0].offsetWidth;
            const index = Math.round(scrollLeft / cardWidth);

            dots.forEach(dot => dot.classList.remove('active'));
            if(dots[index]) dots[index].classList.add('active');
        });

        const data = [
            {name:'Ahmet Y.',title:'Mükemmel İşçilik',text:'Ürün kalitesi ve detaylara verilen önem gerçekten üst düzey.'},
            {name:'Elif K.',title:'Profesyonel Hizmet',text:'İletişimden teslimata kadar her şey çok düzenli.'},
            {name:'Mehmet A.',title:'Kaliteli Yaklaşım',text:'Beklentimizin üzerinde bir hizmet aldık.'},
            {name:'Zeynep T.',title:'Güvenilir',text:'Her aşamada bilgilendirildik, çok memnun kaldık.'}
        ];

        let i=0;

        function card(c,comments){
             return `
             <div class="profile">
                <h3>${c.name}</h3>
            </div>
            <div class="quote">“</div>
                <h4>${c.title}</h4>
                <p>${c.text}</p>
            <div class="comments ${comments}">${comments==='prev'?'Prev':'Next'}</div>`;
        }

        function render(){
            document.getElementById('card1').innerHTML=card(data[i%data.length],'prev');
            document.getElementById('card2').innerHTML=card(data[(i+1)%data.length],'next');
            document.querySelector('.prev').onclick=()=>{i=(i-1+data.length)%data.length;render();};
            document.querySelector('.next').onclick=()=>{i=(i+1)%data.length;render();};
        }
        
        render();
