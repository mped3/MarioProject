// sonic movement
let sonic = document.querySelector('.sonic')
let moveBy = 40;

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
    // case 'ArrowLeft':
    //         sonic.style.left = parseInt(sonic.style.left) - moveBy + 'px'; break
    case 'ArrowRight':
                sonic.style.left = parseInt(sonic.style.left) + moveBy + 'px'; break
   }
    });
// need a border for sonic so he doesn't move past game obstacles and ground
// find a way to get buttons continous press forward to move continousl forward and sonic jump up to collect coins 
// find a way to create a coin bounce out of blocks to gentrate points 
// if mushroom hit game over, try again on click 
// need to impliment player 2, maybe after 3 game overs 
// you win if you collect 20 coins, player 2 gets a try if player 2 gets < 20 then you lose 