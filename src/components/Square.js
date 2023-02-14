const Square = (props) => {
    const squareStyle={
        float:'left',
        fontSize:"60px",
        border:"2px double purple",
        width:"100px",
        height:"100px",
        marginRight:"-1px",
        marginTop:"-1px",
        padding:'0px',
        textAlign:"center"
    }
    return(
        <button style={squareStyle} onClick={()=>props.handleMove(props.el, props.index)}>
            {props.el}
        </button>
    )
}
export default Square;