const glove = document.querySelector('.infinity') 
const snapBanner = document.querySelector('.snap')
glove.addEventListener('click', snapDat)

function snapDat() {
  glove.className = 'hide'
  snapBanner.className ="snap"
  setTimeout(()=> {
    glove.className = 'infinity'
    snapBanner.className = 'hide'
  }, 1500)
}