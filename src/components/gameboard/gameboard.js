import { useState, useEffect } from "react";
import UsersAndCount from "../../common/usersAndCount";
import "./gameboard.styles.scss";

function GameBoard() {
    // set up use state variables
  const [userName, setUserName] = useState("");
  const handleInputChange = (value) => {
    setUserName(value);
  };
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count % 2 ===  0) {
        // attempt to populate an open square
        let checkboxChecked = 10
        for (let i = 0; i < checkboxChecked; i++) {
          // have the computer pick a random square
          let randomSquareNumber = (Math.floor(Math.random() * 8));
          // find the associated td and populate it
          const tds = document.querySelectorAll('td')
          if (tds[randomSquareNumber].innerText === 'Open') {
            tds[randomSquareNumber].innerText = "O"
            tds[randomSquareNumber].className = tds[randomSquareNumber].className + " omarked"
            validationCheck("THE COMPUTER");
            break;
          }
          i++;
        }
        setCount(count + 1)
    }
  });

  // const incrementCount = () => {
  //   setCount(count + 1);
  // }

  let clickTest = (event) => {
    const clickedElement = event?.target;
    if (
      clickedElement &&
      clickedElement !== undefined &&
      clickedElement === event.currentTarget
    ) {
      if (clickedElement.innerText === "Open") {
          clickedElement.innerText = "X";
          clickedElement.className = clickedElement.className + " xmarked"
        setCount(count + 1)
      } else {
        alert("THIS TILE HAS ALREADY BEEN PLAYED");
      }
      validationCheck();
    }
  };

  let validationCheck = (winner = userName) => {
    let tableRows = document.querySelectorAll("td");
    let validationArray = [];
    tableRows.forEach((cell) => {
      let cellInfo = {
        name: cell.className,
        value: cell.value,
        mark: cell.innerText,
      };
      validationArray.push(cellInfo);
    });
    // first three ifs are for straight down wins
    if (
      validationArray[0]?.mark !== "Open" &&
      validationArray[0]?.mark === validationArray[3]?.mark &&
      validationArray[3]?.mark === validationArray[6]?.mark
    ) {
      alert(winner + " HAS WON THE GAME!");
      resetTheGame();
    } else if (
      validationArray[1]?.mark !== "Open" &&
      validationArray[1]?.mark === validationArray[4]?.mark &&
      validationArray[4]?.mark === validationArray[7]?.mark
    ) {
        alert(winner + " HAS WON THE GAME!");
        resetTheGame();
    } else if (
      validationArray[2]?.mark !== "Open" &&
      validationArray[2]?.mark === validationArray[5]?.mark &&
      validationArray[5]?.mark === validationArray[8]?.mark
    ) {
        alert(winner + " HAS WON THE GAME!");
        resetTheGame();
    } // next three are for straight across
    else if (
      validationArray[0]?.mark !== "Open" &&
      validationArray[0]?.mark === validationArray[1]?.mark &&
      validationArray[1]?.mark === validationArray[2]?.mark
    ) {
        alert(winner + " HAS WON THE GAME!");
        resetTheGame();
    } else if (
      validationArray[3]?.mark !== "Open" &&
      validationArray[3]?.mark === validationArray[4]?.mark &&
      validationArray[4]?.mark === validationArray[5]?.mark
    ) {
        alert(winner + " HAS WON THE GAME!");
        resetTheGame();
    } else if (
      validationArray[6]?.mark !== "Open" &&
      validationArray[6]?.mark === validationArray[7]?.mark &&
      validationArray[7]?.mark === validationArray[8]?.mark
    ) {
        alert(winner + " HAS WON THE GAME!");
        resetTheGame();
    } // final two are for the crosses
    else if (
      validationArray[0]?.mark !== "Open" &&
      validationArray[0]?.mark === validationArray[4]?.mark &&
      validationArray[4]?.mark === validationArray[8]?.mark
    ) {
        alert(winner + " HAS WON THE GAME!");
        resetTheGame();
    } else if (
      validationArray[2]?.mark !== "Open" &&
      validationArray[2]?.mark === validationArray[4]?.mark &&
      validationArray[4]?.mark === validationArray[6]?.mark
    ) {
        alert(winner + " HAS WON THE GAME!");
        resetTheGame();
    }
  };

  let resetTheGame = () => {
    let tableRows = document.querySelectorAll("td");
    tableRows.forEach((cell) => {
      cell.innerText = "Open";
      cell.className = cell.className.split(" ")[0]
    });
    setCount(1)
  };

  const setupboard = () => {
    return (
      <div>
        <div>
          <h3>Tik Tak Toe</h3>
          <button onClick={resetTheGame}>Reset the Game</button>
        </div>
        <div>
          <table className="game-table">
            <tbody>
              <tr className="rowA">
                <td className="A1" value="0" onClick={clickTest}>
                  Open
                </td>
                <td className="A2" value="1" onClick={clickTest}>
                  Open
                </td>
                <td className="A3" value="2" onClick={clickTest}>
                  Open
                </td>
              </tr>
              <tr className="rowB">
                <td className="B1" value="3" onClick={clickTest}>
                  Open
                </td>
                <td className="B2" value="4" onClick={clickTest}>
                  Open
                </td>
                <td className="B3" value="5" onClick={clickTest}>
                  Open
                </td>
              </tr>
              <tr className="rowC">
                <td className="C1" value="6" onClick={clickTest}>
                  Open
                </td>
                <td className="C2" value="7" onClick={clickTest}>
                  Open
                </td>
                <td className="C3" value="8" onClick={clickTest}>
                  Open
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <UsersAndCount onInputChange={handleInputChange} numberOfUsers={1} />
      </div>
    );
  };

//   useEffect(() => {
//     if (count % 2 ===  0) {
//         console.log('COUNT IS EVEN: ', count)
//     }
//   }, [count]);

//   const incrementCount = () => {
//     setCount(count + 1);
//   }

  let html = setupboard();
  return html;
}

export default GameBoard;
