
const app = Vue.createApp({
    data() {
        return {
            showName:true,
            title: 'Mert Omgen',
            Age: '26',
            x: 0,
            y: 0,
            books: [
                {title:"Tanrı'nın Formülü",author:"Jose Rodrigues dos Santos",link:"https://www.amazon.com.tr/S%C3%BCleyman%C4%B1n-Anahtar%C4%B1-Jose-Rodrigues-Santos/dp/6053435341",isFav:true},
                {title:"Süleyman'ın Anahtarı",author:"Jose Rodrigues dos Santos",link:"https://www.amazon.com/Tanrinin-Formulu-Rodrigues-Santos-Demirkan/dp/6053432105",isFav:false},
                {title:"Da Vinci Şifresi",author:"Dan Brown",link:"https://www.amazon.com.tr/Vinci-%C5%9Eifresi-Dan-Brown/dp/9752104037",isFav:false},
                {title:"Hobbit",author:"John Ronald Reuel Tolkien",link:"https://www.amazon.com.tr/Hobbit-J-R-R-Tolkien/dp/9752733735",isFav:true}
            ]
            
        }
    },
    methods: {
/*
Template içerisinde bir fonksiyonu çalıştırmak istediğimizde bu methodu ya direkt template içerisinde fonksiyonu ilgili eventın
içerisine yazarak yapabiliriz. (Örnek: <button v-on:click="Age++">Increase</button>) Ya da bu fonksiyonu js ile Vue instance yarattığımız
scope içerisinde "methods" propertysini çağırıp o property içerisinde de ilgili fonksiyonu yazabiliriz. "methods" property değerleri içerisinde 
yazdığımız fonksiyondan eğer yarattığımız fieldlara ulaşmak istiyorsak bunun için öncelikle başında 'this' keywordünü kullanmamız gerekir.
'this' keywordü ile componentin kendisini refere ederiz ve içerisindeki field değerlerine ulaşabiliriz.
*/
        changeTitle(name) {
            this.title = name
        },

        showNameFunction() {
            this.showName = !this.showName
        },
        eventFire(e,data) {
            console.log(e,e.type);
            if (data) {
                console.log(data);
            }
        },
        eventMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        changeFav(book) {
           book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book)=>book.isFav)
        }
    }
})

app.mount('#app')