import EnterOnViewport from './EnterOnViewport'

(() => {
    document.body.addEventListener('elementOnViewport', (ev)=> {
        console.log('ev', ev)
    })
    
    console.log(document.querySelectorAll('.sub-content'))
    new EnterOnViewport('.sub-content')
    
})()