import PropTypes from 'prop-types'
import Button from "./Button"


const Header = ({title, onClick, visibility}) => {

    // const onClick = () => {console.log("Click")}
    
    return (
        <header className="flexy" style={{borderBottom:"black thin dotted"}}>
            <h1>{title}</h1>
            <Button color="green" text={visibility ? "Свернуть":"Добавить"} onClick={onClick}/>
        </header>
    )
}
Header.defaultProps = {
    title:"Мои задания"
}
Header.propTypes = {
    title: PropTypes.string,
}
// const headingStyle = {
//     color:"green", backgroundColor: "yellow", textAlign: "center", padding: "20px", border:"thin black solid"
// }
export default Header
 