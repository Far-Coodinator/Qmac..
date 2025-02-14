$('#nav-bar .myOwn-slid-nav-door').on('click',function(){
    $(this).toggleClass('myOwn-open-nav')
    $('.myOwn-sliding-nav-link').toggleClass('active')
})


// footer contact link 
$('#footer .myOwn-contact-link').on('click',function(){
    const contactId = this.id
    callBlock(contactId)
})



function callBlock(id){
    $('.alert-box').css('display','flex')
    const personName = $('.myOwn-alert-personName')
    const personposition = $('.myOwn-alert-position')
    const callButton = $('.myOwn-call-button')
    const whatsAppButton = $('.myOwn-whatsApp-button')
    switch (id) {
        case "gm":
            personName.text('Mr.Jhon Methew')
            personposition.text('Genral Manger of Qmac international cleaning and trading company')
            callButton.attr('href','tel:+97447586943')
            whatsAppButton.attr('href','https://wa.me/+97474020623')
            break;
        case "hr":
            personName.text('Mr.Michel')
            personposition.text('Human Resourse Manager of Qmac international cleaning and trading company')
            callButton.attr('href','tel:+97447586943')
            whatsAppButton.attr('href','https://wa.me/+97474020623')
            break;
        case "om":
            personName.text('Mr.Dhanoge Mogan')
            personposition.text('Operation Manager of Qmac international cleaning and trading company')
            callButton.attr('href','tel:+97447586943')
            whatsAppButton.attr('href','https://wa.me/+97474020623')
        
    }


    
}



// dark mode
let dark = false
$('.myOwn-darkMode').on('click',()=>{
    $('.myOwn-hero-middleBox').toggleClass('myOwn-dark-color-light-opacity')
    if(!dark){
        $('html').attr('data-bs-theme','dark')
        dark = true
    } 
    else{
        $('html').attr('data-bs-theme','light')
        dark = false
    }
    
})


// page render 
const sections = $('.myOwn-pageRender')
console.log(sections.length)
document.addEventListener('DOMContentLoaded',()=>{

    let page = 1
    function lazyload(){
        const {scrollTop,clientHeight,scrollHeight} = document.documentElement;
        if(scrollTop + clientHeight >= scrollHeight-1){
            setTimeout(()=>{
                loadNextPage(page)
                page += 1
            },)
        }
    }

    function loadNextPage(sectionNumber) {
        let section = $(sections[sectionNumber - 1]); // Ensure it's a jQuery object
        if (sectionNumber-1 <= sections.length) { // Check if element exist
            $(sections[sectionNumber - 1]).css('display','block').css('margin-top','4px').css('opacity','1')
            console.log('done')
        } else {
            $('body').css('padding-bottom','5vh')
        }
    }
    

    document.addEventListener('scroll',lazyload);
})