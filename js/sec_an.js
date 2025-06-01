// 複数要素の取得
var sections = document.querySelectorAll('.ly_secTtl');

// タイムラインとスクロールトリガーの設定
sections.forEach((section,index) => {
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: section,
            start: 'top 70%',
            toggleActions: "play none restart none",
        }
    })


// セクション内の各要素の取得
// スコープを明確にするために必要な工程
var jpTtl = section.querySelectorAll('.bl_secTtl_jp');
var enTtl = section.querySelectorAll('.bl_secTtl_en');

tl.fromTo(jpTtl,
{
    autoAlpha: 0,
    x: -50,
},
{
    autoAlpha: 1,
    x: 0,
    ease: 'Power2.easeOut',
    duration: 0.8,
    stagger: 0.2,
})
.from(enTtl,
{
    autoAlpha: 0,
    x: -50,
},
{
    autoAlpha: 1,
    x: 0,
    ease: 'Power2.easeOut',
    duration: 0.8,
    stagger: 0.2,
})

});