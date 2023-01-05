const buyBtns = document.querySelectorAll('.js-buy-tickets')
        const modal = document.querySelector('.js-modal')
        const close = document.querySelector('.js-modal-close')
        const modalCotainer = document.querySelector('.js-modal-container')
        function hideBuyTickets() {
            modal.classList.remove('open')
        }

        function showBuyTickets() {
                modal.classList.add('open')
            }
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets)
        }

        close.addEventListener('click', hideBuyTickets)
        modal.addEventListener('click', hideBuyTickets)
        modalCotainer.addEventListener('click', function(event) {
            event.stopPropagation()
        })
        
        const menu = document.querySelector('.js-icon-menu')
        const header = document.querySelector('.js-header')

        const headerHeight = header.clientHeight;
        menu.onclick = function() {
            var isClose = header.clientHeight === headerHeight;
            if(isClose) {
                header.style.height = 'auto';
            } else {
                header.style.height = '46px';
            }
        }

        var menuItems = document.querySelectorAll('.nav li a[href*="#"]')
        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];

            menuItem.onclick = function(event) {
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
                if (isParentMenu) {
                    event.preventDefault()
                } else {
                    header.style.height = null
                }
                
            }
        }
        
        