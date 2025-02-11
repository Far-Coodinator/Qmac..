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