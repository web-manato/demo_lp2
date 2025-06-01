//タイムラインを使用してアニメーションを適用
var tl = gsap.timeline();

tl.from('.bl_kv_copy , .bl_kv_copy2',{
    autoAlpha: 0,
    y: 10,
    stagger: 0.3,
})
.from('.bl_kv_img_txt',{
    delay: 0.3,
    rotation: 40,
    autoAlpha: 0,
    scale: 1.4,
    ease: "power2.out",
    duration: 0.2,
})
.from('.bl_kv_txt, .bl_kv_cta',{
    delay: 0.5,
    autoAlpha: 0,
    stagger: 0.3,
})