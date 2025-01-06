import { useNavigate } from 'react-router-dom';
import './headerAndLib.styles.scss'

// this will involve the header column as well as transitions
const HeaderAndLibrary = () => {

    const navigate = useNavigate();

    const routeChange = (pathName) => {
        // let path = "tiktaktoe"
        // navigate(path)
        navigate(`/${pathName}`)
    }

    return (
        <div>
            <h2>Tim's Games</h2>
            <div className="game-selection">
                <button className="gameBtn" onClick={() => routeChange("")}>HOME</button>
                <button className="gameBtn" onClick={() => routeChange("tiktaktoe")}>TIK TAK TOE</button>
                <button className="gameBtn">CHECKERS</button>
            </div>
        </div>
    );

}
export default HeaderAndLibrary;