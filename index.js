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
    // $('.alert-box').css('display','block')
    $('.alert-box').css('display','flex')
    switch (id) {
        case "gm":
            $('.myOwn-alert-personName').text('Mr.Jhon Methew')
            $('.myOwn-alert-position').text('Genral Manger of Qmac international cleaning and trading company')
            console.log('execute -1 ')
            break;
        case "hr":
            $('.myOwn-alert-personName').text('Mr.Michel')
            $('.myOwn-alert-position').text('Human Resourse Manager of Qmac international cleaning and trading company')
            console.log('execute -2')
            break;
        case "om":
            $('.myOwn-alert-personName').text('Mr.Dhanoge Mogan')
            $('.myOwn-alert-position').text('Operation Manager of Qmac international cleaning and trading company')
            console.log('execute -3')

        
    }


    
}