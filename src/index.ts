import EnterOnViewport from './EnterOnViewport'
// const {default:alex} = await import('./Console');

(() => {
    document.body.addEventListener('elementOnViewport', (ev)=> {
        import('./Console').then(({default:alex}) => {
            console.log('ev', ev)
            alex()
        })
        
    })
    
    console.log(document.querySelectorAll('.sub-content'))
    new EnterOnViewport('.sub-content')
    
})()