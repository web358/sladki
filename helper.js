let cards = document.querySelectorAll('.card')  
   function show_hide(id) {
       cards.forEach(x => {
          x.style.display = x.getAttribute('id') == id ? 'block' : 'none';
        });
        
      }
let navs = document.querySelectorAll('a')
navs.forEach(x => { 
    Array(6).fill().forEach(() => {
      let bubbleDiv = document.createElement('span')
      bubbleDiv.innerHTML = `<img class="playStars" src="public/images/3.png">`
      bubbleDiv.className = 'bubble2'
        x.appendChild(bubbleDiv)
        let bubbleDiv2 = document.createElement('div')
      bubbleDiv2.innerHTML = `<img class="playStars" src="public/images/2.png">`
      bubbleDiv2.className = 'bubble3'
        x.appendChild(bubbleDiv2)
    })
    let bubbleDiv3 = document.createElement('p')
    bubbleDiv3.innerHTML = `Свържете се с нас още днес!`
    bubbleDiv3.className = 'bubble4'
      x.appendChild(bubbleDiv3)
  
    x.addEventListener('click', () => {
      x.querySelectorAll('.bubble2').forEach(x => x.classList.add('anim'))
      setTimeout(function(){
        x.querySelectorAll('.bubble2').forEach(x => x.classList.remove('anim'))
      },1000)
  }) 
  x.addEventListener('click', () => {
    x.querySelectorAll('.bubble3').forEach(x => x.classList.add('anim'))
    setTimeout(function(){
      x.querySelectorAll('.bubble3').forEach(x => x.classList.remove('anim'))
    },1000)
}) 
x.addEventListener('click', () => {
  x.querySelectorAll('.bubble4').forEach(x => x.classList.add('anim2'))
  setTimeout(function(){
    x.querySelectorAll('.bubble4').forEach(x => x.classList.remove('anim2'))
  },1000)
})
  })

  function show_all(){
    const cards = document.querySelectorAll('.card');
    cards.forEach(x => x.style.display = 'block')
}
  