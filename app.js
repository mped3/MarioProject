let sonic = document.querySelector('.sonic')
let move = 10;

window.addEventListener('load', () =>{
sonic.style.position = 'absolute';
sonic.style.top = 0;
sonic.style.left = 0;
});
window.addEventListener('keyup', (e) =>{
   switch (e.key){
    case 'ArrowUp':
        circle.style.left = parseInt(circle.style.left) - moveBy + 'px'; break
    case 'ArrowDown':
        circle.style.left = parseInt(circle.style.left) - moveBy + 'px'; break
    case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px'; break
   }
    });
