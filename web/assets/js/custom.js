    // Preloader

    $(window).load(function () {
        $("#loader .icon").fadeOut();
        $("#loader").fadeOut("slow");
    });

    //---------------------------------------------------------------- 

    jQuery(document).ready(function () {


        // Image resize on viewport

        $(".header-img").height($(window).height());

        $(window).resize(function () {
            $(".header-img").height($(window).height());
        });

        //----------------------------------------------------------------    

        // Skills progress bar

        $(".progress .progress-bar").appear(function () {
            $('.progress .progress-bar').progressbar();
        });

        // Smooth Page Scrolling requires - Jquery Easing

        jQuery('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        //---------------------------------------------------------------- 

        // Portfolio sorting

        jQuery('#portfolio-items').mixItUp();

        //---------------------------------------------------------------- 

        // Milestone counter

        jQuery('.counter').counterUp({
            delay: 10,
            time: 3000
        });

        //---------------------------------------------------------------- 

        // Reviews slider

        jQuery("#reviews-slider").owlCarousel({
            items: 2,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [600, 1],
            itemsMobile: [479, 1],
            slideSpeed: 800,
            mouseDrag: false,
            pagination: false,
            navigation: true,
            navigationText: [
                "<span class='ti-angle-left'></span>",
                "<span class='ti-angle-right'></span>"
            ],
            autoPlay: false
        });

        //---------------------------------------------------------------- 

        // Reviews slider

        jQuery("#brands-slider").owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [600, 2],
            itemsMobile: [479, 1],
            slideSpeed: 400,
            mouseDrag: false,
            pagination: false,
            autoPlay: true
        });

        //----------------------------------------------------------------     

        // Animation reveal on scroll

        new WOW().init();

        //----------------------------------------------------------------  

        // Smooth Page Scrolling requires - Jquery Easing

        jQuery('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        //---------------------------------------------------------------- 

        // Highlight top nav as scrolling occurs

        jQuery('body').scrollspy({
            target: '.navbar-static-top'
        })

        //----------------------------------------------------------------      

        // Closes Responsive Menu on Menu Item Click

        jQuery('.navbar-collapse ul li a').click(function () {
            $('.navbar-toggle:visible').click();
        });

        //---------------------------------------------------------------- 

        // Sticky Navigation

        jQuery(function () {
            $('#navigation').height($("#nav").height());
            $('#nav').affix({
                offset: {
                    top: $('#nav').offset().top - 15
                }
            });
        });

        //---------------------------------------------------------------- 

        // Scroll to top

        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }

        });

        //----------------------------------------------------------------     

        // Contact Form

        jQuery('.form-horizontal').on('submit', function () {

            var form = $(this);
            $.ajax({
                url: form.attr('action'),
                method: form.attr('method'),
                data: form.serialize(),
                success: function (result) {
                    if (result == 'success') {
                        $('.send-success').fadeIn().delay(4000).fadeOut();;
                    } else {
                        $('.send-error').fadeIn().delay(4000).fadeOut();;
                    }
                    $('.form-horizontal').trigger("reset");
                }
            });

            // Prevents default submission of the form after clicking on the submit button. 
            return false;
        });

        //----------------------------------------------------------------                          
        // 切换相框图片
        jQuery('#changeImg').bind('click', function (event) {
            if (jQuery('#cent_img').attr("src") == "./assets/img/像框内图片2.jpg") {
                jQuery('#cent_img').attr("src", "./assets/img/像框内图片1.jpg")
            } else {
                jQuery('#cent_img').attr("src", "./assets/img/像框内图片2.jpg")
            }

        });

        // 详情
        jQuery('.img-overlay').each(function (i) {
            $(this).bind('click', function (event) {
                if (i == 0) {
                    jQuery('#detimg').attr("src", "./assets/img/图片1-8/图片1.jpg")
                    jQuery('#detname').text("Rosalind Elsie Franklin")
                    jQuery('#detcont').html(`In May 1952, the British physical chemist and crystallographer obtained the first crystal diffraction image of DNA, 'photo 51', by X-ray crystallography. She did not, however, publish her findings. Franklin's personality was one of academic rigor and willingness to share the results of her work. <strong>At this time, James Watson and Francis Crick were also working on the structure of DNA at Cambridge University, and Wilkins showed them the photograph without Franklin's knowledge</strong>. From the photograph, they deduced the double-helix structure of DNA. They reported this discovery in the 25 May 1953 issue of the British journal Nature and were awarded the 1962 Nobel Prize in Physiology. This was a milestone in biology and the beginning of the era of molecular biology.`)
                } else if (i == 1) {
                    jQuery('#detimg').attr("src", "./assets/img/图片1-8/图片2.jpg")
                    jQuery('#detname').text("Joan Ruth Bader Ginsburg")
                    jQuery('#detcont').html("Contribution An American jurist who was nominated by then-President Bill Clinton to serve on the United States Supreme Court until his death, she was the second female Supreme Court justice after Sandra Day O'Connor and the first Jewish American justice. In 1960, Supreme Court Justice Felix Frankfurter turned down a clerkship for Ginsburg because of her gender, despite being highly recommended by a professor at Harvard Law School. In 1973, she became general counsel for the program. By 1974, the Feminist Project and related projects of the League had been involved in more than 300 sex discrimination cases, and as a lead litigator for the Feminist Project. <strong>Ginsburg did not ask the court to eliminate all sex discrimination immediately, but rather to set a targeted approach to specific discriminatory statutes and to build on each success.</strong>")
                }else if (i == 2) {
                    jQuery('#detimg').attr("src", "./assets/img/图片1-8/图片3.jpeg")
                    jQuery('#detname').text("Chizuko Ueno")
                    jQuery('#detcont').html("Japanese sociologist. Ueno is a leading Japanese feminist who has studied theories of women's liberation, a renowned sociologist, a pioneer, leader, and theorist in the field of feminology and gender studies in Japan. A pioneer of the Japanese women's movement, Chizuko Ueno, an honorary professor at the University of Tokyo, addressed the 2019 Tohoku University induction ceremony, where she attacked gender discrimination in Japanese society and reminded everyone that 'a society that does not reward you fairly even if you work hard is waiting for you', a speech that sparked strong reactions and lively discussions in Japan and around the world. Her lectures have generated strong reactions and discussions in Japan and around the world.<strong> Ms. Ueno has a profound understanding of feminism: the root of feminism is freedom, and the goal of the feminist struggle is to broaden women's freedom of choice.</strong>")
                }else if (i == 3) {
                    jQuery('#detimg').attr("src", "./assets/img/图片1-8/图片4.jpg")
                    jQuery('#detname').text("Hedy Lamarr")
                    jQuery('#detcont').html("In 1941, Hedy Lamarr and composer George Antheil finally completed their research and patented their 'frequency hopping' device design. 'In 1941, Hedy Lamarr and composer George Antheil finally completed their research and patented their design for a 'frequency hopping' device, which is the 'spread spectrum communication technology' of the 21st century. It was this invention that earned her the title of 'Mother of Wi-Fi'. Some 20 years after the patent lapsed, the circuit diagrams that Lamar and Antheil had drawn up for the frequency hopping system were made public. Other engineers were able to study and research the design, which eventually formed the backbone of wireless communication networks such as Bluetooth, Wi-Fi, and CDMA.<strong> But Lamar and Antheil never received the recognition they deserved for this invention, and Lamar's beauty and scandal caused people to overlook her intellectual achievements.'</strong>")
                }else if (i == 4) {
                    jQuery('#detimg').attr("src", "./assets/img/图片1-8/图片5.jpg")
                    jQuery('#detname').text("Minnie Vautrin ")
                    jQuery('#detcont').html("In 1919, Ms. Weitering was recruited to work at the Jinling Women's College of Arts and Sciences in Nanjing.<strong>During the Nanking Massacre, she volunteered to form a stay-behind committee with the faculty and staff of the college and served as acting director. During the Nanking Massacre, she actively rescued Chinese refugees fought to prevent Japanese troops from breaking into the refugee shelter, and used the College to protect tens of thousands of Chinese women and children refugees.</strong>  As a result, she was widely acclaimed by the Chinese public, especially the people of Nanjing, and was awarded the Order of Brilliant Jade by the National Government in 1938. Her diary from 12 August 1937 to April 1940 contains a detailed account of Nanking under Japanese occupation and is a first-hand account of the Nanjing Massacre.")
                }else if (i == 5) {
                    jQuery('#detimg').attr("src", "./assets/img/图片1-8/图片6.png")
                    jQuery('#detname').text("Bertha Ben")
                    jQuery('#detcont').html("She was the first driver in the world to drive an automobile. When her husband Karl Benz, the founder of Mercedes Benz, first invented the automobile, people generally did not have a favorable opinion of it, and Bertha Benz, in an attempt to make the public aware of its practicality, drove it 107 kilometers in early August 1888, accompanied on this long journey by her two sons, aged 15 and 13, but without her husband s guidance. This trip helped to fundamentally dispel the doubts of customers about the car and greatly improved the economic situation of the Bentz company. She also invented the world's first brake pads and there is now a Bertha Benz Memorial Road in Germany.<strong> It is fair to say that without Bertha's brave and daring attempt, the car would have been introduced much later, and perhaps by others.</strong>")
                }else if (i == 6) {
                    jQuery('#detimg').attr("src", "./assets/img/图片1-8/图片7.png")
                    jQuery('#detname').text("Ada Lovelace")
                    jQuery('#detcont').html("In 1833, she met Charles Babbage, an inventor and mechanical engineer, and became a close friend. Babbage developed the concept of a differential and analytical machine with all the basic elements of a modern computer, and the analytical machine is considered to be the prototype of an early computer. Lovelace was very interested in this analytical machine and studied it intensely, writing an algorithm for the machine in 1842, which was published in a British scientific journal in 1843. This was regarded by later generations as the first algorithm, the earliest computer program. To commemorate her pioneering contribution to the field of computing, the US Department of Defence Named the high-level programming language, which took 20 years to develop, Ada in 1980.<strong> Her contribution to computer science went unnoticed at the time and was not discovered until after her death. Today, Ada Lovelace is a symbol of outstanding women in science and technology.</strong>")
                }else if (i == 7) {
                    jQuery('#detimg').attr("src", "./assets/img/图片1-8/图片8.jpg")
                    jQuery('#detname').text("Xia Peisu")
                    jQuery('#detcont').html("A pioneer of computer science in China, she participated in the establishment of China's computer research institute, and in 1960 she presided over the development of China's first electronic computer, and in 1964 she began to make systematic and creative achievements in the research and design of high-speed computers. As a pioneer of computer science in China, she dedicated her life to the cause of computing in China, developing the first electronic computer, driving the establishment and development of the whole discipline, and training numerous scientific talents, with many achievements.<strong>As a result, Xia Pesu is also known as the 'Mother of Chinese Computers'.</strong> ")
                }
            })
        })
    });