
const box = document.getElementById('searchDiv')
const btn = document.getElementById('searchIcon')
const input = document.getElementById('input')
btn.addEventListener('click' , () => {
    input.classList.remove('locked')
    box.classList.toggle('active')
    btn.classList.toggle('active')
    input.classList.toggle('active')
    
    document.body.classList.toggle('darkmode')

    if(box.classList.contains('active')) {
        input.focus()
        
    }else{
        input.blur()
    }
})