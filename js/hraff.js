var links= document.querySelectorAll('nav.mobile a');
document.querySelector('#burger').addEventListener('touchend', openMenu);


    function openMenu(){
        
        document.querySelector('html').classList.toggle('menu-open');
        for (var i =0; i<links.length;i++)
            {
                if (document.querySelector('html').classList.contains('menu-open'))
                    {
                        links[i].style.transitionDelay = i*0.25 +'s';
                    }
                else{
                    links[i].style.transitionDelay = '0s'; 
                }
            }
        
    }