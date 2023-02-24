let sonic = document.querySelector('.sonic')
let moveBy = 10;

window.addEventListener('load', () =>{
sonic.style.position = 'absolute';
sonic.style.top = 0;
sonic.style.left = 0;
});
window.addEventListener('keyup', (e) =>{
   switch (e.key){
    case 'ArrowUp':
        sonic.style.top = parseInt(sonic.style.top) - moveBy + 'px'; break
    case 'ArrowDown':
        sonic.style.top = parseInt(sonic.style.top) + moveBy + 'px'; break
    case 'ArrowLeft':
            sonic.style.left = parseInt(sonic.style.left) - moveBy + 'px'; break
    case 'ArrowRight':
                sonic.style.left = parseInt(sonic.style.left) + moveBy + 'px'; break
   }
    });
