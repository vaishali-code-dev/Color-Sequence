export const Box = ({customClassName, onClick, id}) => {
   return(
<div className={`box ${customClassName}`} id={id} onClick={onClick}></div>
   ) 
}