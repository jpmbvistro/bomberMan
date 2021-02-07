
document.addEventListener('keydown', logKey);
let sprite = document.querySelector('img')

function logKey(key){
  switch (`${key.code}`) {
    case 'ArrowRight':
      sprite.style.transform= 'translateX(100%)'
      console.log("Right");
      break;
    case 'ArrowLeft':
      sprite.style.transform= 'translateX(-100%)'
      console.log("Left");
      break;
    case 'ArrowUp':
      sprite.style.transform= 'translateY(-100%)'
      console.log("Up");
      break;
    case 'ArrowDown':
      sprite.style.transform= 'translateY(100%)'
      console.log("Down");
      break;
    default:
  }
}
