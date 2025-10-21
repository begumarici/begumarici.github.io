const translations = {
    en: {
        greeting: "Hello",
        sectionTitle: "A Bit About Me",
        description: "I'm a new graduated computer engineer passionate about iOS development. I love creating beautiful and functional mobile applications that provide great user experiences. In my free time, I enjoy exploring new technologies and working on personal projects to enhance my skills.",
        resume: "Resume",
        footer: "Made with"
    },
    tr: {
        greeting: "Merhaba",
        sectionTitle: "Hakkımda",
        description: "Ben Begüm. Yeni mezun bir bilgisayar mühendisiyim ve iOS geliştirme alanına ilgi duyuyor, bu alanda çalışmalar yapıyorum. Yaratıcı ve kullanıcı dostu mobil uygulamalar geliştiriyorum. Yeni teknolojiler öğrenmekten ve bunları projelerimde uygulamaktan büyük keyif alıyorum.",
        resume: "Özgeçmiş",
        footer: "Made with"
    }
};

const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');

        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelector('.greeting').textContent = translations[lang].greeting;
        document.querySelector('.section-title').textContent = translations[lang].sectionTitle;
        document.querySelector('.description').textContent = translations[lang].description;
        document.querySelector('.btn-resume').textContent = translations[lang].resume;
        document.querySelector('footer p').innerHTML = `© 2025 · ${translations[lang].footer} ☕`;
    });
});
