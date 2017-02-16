window.onload = function() {


    var app;
    var page = 1;
    $(window).scroll(function(ev) {
        var  sm = $(this).scrollTop() + $(window).height(); 
        var  dsm = $(document).height();
        // alert(sm);
        console.log(dsm);
        if (sm == dsm) {
            $.ajax({
                type: "get",
                url: "https://route.showapi.com/255-1?page=" + (++page) + "&showapi_appid=31976&showapi_sign=07286aedccaf4f5d9cd3c9e92e6fe036",
                dataType: "json",
                success: function(json) {
                    for (var i = 0; i < json.showapi_res_body.pagebean.contentlist.length; i++) {
                        app.loadMore(json.showapi_res_body.pagebean.contentlist[i]);
                    }
                    console.log(json.showapi_res_body.pagebean.contentlist);
                },
                error: function(e) {
                    console.log(e);
                }
            });


        }
    });
    $.ajax({
        type: "get",
        url: "https://route.showapi.com/255-1?page=&showapi_appid=31976&showapi_sign=07286aedccaf4f5d9cd3c9e92e6fe036",
        dataType: "json",
        success: function(json) {
            for (var i = 0; i < json.showapi_res_body.pagebean.contentlist.length; i++) {
                app.loadMore(json.showapi_res_body.pagebean.contentlist[i]);
            }
            console.log(json.showapi_res_body.pagebean.contentlist);
        },
        error: function(e) {
            console.log(e);
        }
    });

    app = new Vue({
        el: '#app',
        data: {
            items: [],
        },
        methods: {
            loadMore: function(moreData) {

                this.items.push(moreData);
            }
        }
    });

    var oa = document.querySelectorAll(".nav-a");
    var ocontainer = document.querySelectorAll(".swiper-slide .container");
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        onSlideChangeStart: function() {
                var myswi = swiper.realIndex;
                // alert(myswi)
                for (var m = 0; m < oa.length; m++) {
                    oa[m].style.background = "#ED4040";
                    oa[myswi].style.background = "#A0032D";
                }
                for (var n = 0; n < ocontainer.length; n++) {
                    ocontainer[n].style.display = "none";
                    ocontainer[myswi].style.display = "block";
                }
            }
            // freeMode: true
    });

    // $('.a1').click(function() {
    //     swiper.slideTo(0, 1000, false); //切换到第一个slide，速度为1秒
    // })
    // $('.a2').click(function() {
    //     swiper.slideTo(1, 1000, false); //切换到第一个slide，速度为1秒
    // })
    // $('.a3').click(function() {
    //     swiper.slideTo(2, 1000, false); //切换到第一个slide，速度为1秒
    // })
    // $('.a4').click(function() {
    //         swiper.slideTo(3, 1000, false); //切换到第一个slide，速度为1秒
    //     })
    // 导航条
    var oslide = document.querySelectorAll(".swiper-slide");

    for (var i = 0; i < oa.length; i++) {
        oa[i].num = i;
        oa[i].onclick = function() {
            for (var j = 0; j < oa.length; j++) {
                oa[j].style.background = "#ED4040";
                // oslide[j].style.display = "none";
            }
            this.style.background = "#A0032D";
            swiper.slideTo(this.num, 1000, false);
            // odiv[this.num].style.display = "block";
        }

    }


    $.ajax({
        type: "get",
        url: "https://route.showapi.com/255-1?page=&showapi_appid=31976&showapi_sign=07286aedccaf4f5d9cd3c9e92e6fe036",
        dataType: "json",
        success: function(json) {
            for (var i = 0; i < json.showapi_res_body.pagebean.contentlist.length; i++) {
                vvideo.loadMore(json.showapi_res_body.pagebean.contentlist[i]);
            }
            console.log(json.showapi_res_body.pagebean.contentlist);
        },
        error: function(e) {
            console.log(e);
        }
    });



    var vvideo = new Vue({
        el: '#vvideo',
        data: {
            items: [],
        },
        methods: {
            loadMore: function(moreData) {

                this.items.push(moreData);
            }
        }
    });

}