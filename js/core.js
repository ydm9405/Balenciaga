var tabBtn = null;
var tabPage = null;
var xxxBtn = null;
var xxxPage = null;

$(document).ready(function(){
    init();
    sideTabRePos(tabBtn,tabPage);
    sideTabRePos(xxxBtn,xxxPage);
    $('.lostPop').click(function(){
        $('div#popupLost').addClass('active');
    })
    $('div#popupLost .btn_close').click(function(){
        $('div#popupLost').removeClass('active');
    })

    $('div.subrab > input').click(function(){
        $('header aside#cartSidePanelEmpty').addClass('active')
    })
    $('header aside#cartSidePanelEmpty input.btn_close').click(function(){
        $('header aside#cartSidePanelEmpty').removeClass('active')
    })
    $('header aside#cartSidePanelEmpty input:nth(1)').click(function(){
        $('header aside#cartSidePanelEmpty').removeClass('active')
    })

    $('input.callB').click(function(){
        $('header aside#cartSidePanel').addClass('active')
    })
    $('header aside#cartSidePanel input.btn_close').click(function(){
        $('header aside#cartSidePanel').removeClass('active')
    })
    $('header aside#cartSidePanel input:nth(1)').click(function(){
        $('header aside#cartSidePanel').removeClass('active')
    })

    $('footer div.newsLetter fieldset input').click(function(){
        $('footer').addClass('active')
    })

    $('footer > div').click(function(){
        $('footer > div').removeClass('active')
        $(this).addClass('active')
    })
});

function init(){
    tabBtn = $('.reposBtn li a');
    tabPage = $('.reposPanel');
    xxxBtn = $('.policyContainer aside ul li a');
    xxxPage = $('.policyPanel');
}

function sideTabRePos(btn,target){
    $(btn).click(function(){
        var activeTab = $(this).attr('data-tabName');
        $(target).removeClass('active');
        $("#" + activeTab).addClass('active');
    });

    $('section.policyContainer ul li a').click(function(){
        $('section.policyContainer ul li a').removeClass('active');
        $(this).addClass('active');
    });
    
    $('ul.reposBtn li a').click(function(){
        $('ul.reposBtn li a').removeClass('active');
        $(this).addClass('active')
    });
}
