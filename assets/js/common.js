$(function () {
    /*
     *
     *이미지 스케일
     *
     */
    $('.sc-intro .img').each(function (idx, ele) {
        scaleVal = $(this).data('scale')
        gsap.to(ele, {
            scrollTrigger: {
                trigger: '.sc-intro .title-area',
                start: '0% 100%',
                end: '100% 0%',
                // markers: true,
                scrub: 1
            },
            scale: scaleVal
        })
    })




    /*
     *
     * intro2 고정모션 timeline
     *
     */

    gsap.set('.sc-intro2 .headline2,.sc-intro2  .headline3', {
        visibility: 'hidden'
    }) //setting
    gsap.set('.sticky-trigger .scroll-img2,.sticky-trigger .scroll-img3 ', {
        visibility: 'hidden'
    })

    const intro2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-intro .sticky-trigger',
            start: '20% 100%',
            end: '100% 100%',
            // markers: true,
            scrub: 1
        },
    })

    intro2
        .to('.sc-intro2 .headline1', {
            scale: 1.3
        })
        .addLabel('a')
        .set('.sc-intro2 .headline1', {
            visibility: 'hidden'
        }, 'a')
        .set('.sc-intro2 .headline2', {
            visibility: 'visible'
        }, 'a')

        .set('.sticky-trigger .scroll-img1', {
            visibility: 'hidden'
        })
        .set('.sticky-trigger .scroll-img2', {
            visibility: 'visible'
        })



        .to('.sc-intro2 .headline2', {
            scale: 1.3
        })
        .set('.sc-intro2 .headline2', {
            visibility: 'hidden'
        })
        .set('.sc-intro2 .headline3', {
            visibility: 'visible'
        })

        .set('.sticky-trigger .scroll-img2', {
            visibility: 'hidden'
        })
        .set('.sticky-trigger .scroll-img3', {
            visibility: 'visible'
        })

        .to('.sc-intro2 .headline3', {
            scale: 1.3
        })
        .to('.sticky-trigger .scroll-img3', {
            scale: 0
        })




    /*
     * slide고정모션
     *
     * 
     */
    const slidePin = gsap.timeline({
        scrollTrigger: {
            trigger: '.sc-slide',
            start: '0% -100%',
            end: '100% 100%',
            markers: true,
            scrub: 1
        },
    })

    slidePin
        .addLabel('a')
        .to('.sc-slide .slide-01 img', {
            scale: 1.3
        }, 'a')
        .to('.sc-slide .slide-02', {
            top: '90px'
        }, 'a')

        .addLabel('b')
        .to('.sc-slide .slide-02 img', {
            scale: 1.3
        },'b')
        .to('.sc-slide .slide-03', {
            top: '170px'
        },'b')

        .addLabel('c')
        .to('.sc-slide .slide-03 img', {
            scale: 1.3
        },'c')
        .to('.sc-slide .slide-04', {
            top: '250px'
        },'c')

        .to('.sc-slide .slide-04 img', {
            scale: 1.3
        })

/*
*
*
*
*
*/ 














})
