function Popup2(props: any){
    return (
    <div className='popup-boxzap'>
        <div className='boxzap'>
            <button className='botaofecha' onClick={props.handleClose} >X</button>
        {props.content}
        </div>
    </div>
    )

}
export { Popup2};