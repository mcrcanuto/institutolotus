import "../../css/pop.css"


function Popup(props: any){
    return (
    <div className='popup-box'>
        <div className='box'>
            <button className='btn-close' onClick={props.handleClose} >X</button>
        {props.content}
        </div>
    </div>
    )

}



function Popup2(props: any){
    return (
    <div className='popup-box2'>
        <div className='box2'>
            <button className='btn-close2' onClick={props.handleClose} >X</button>
        {props.content}
        </div>
    </div>
    )

}

export {Popup, Popup2};