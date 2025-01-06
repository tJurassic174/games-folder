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
        // // have the computer pick a random square
        // let randomSquare = (Math.floor(Math.random() * 8) + 1);
        // console.log('RANDOM RANDOM: ', randomSquare)
        // // find the associated td
        // const tds = document.querySelectorAll('td')
        // console.log(tds[randomSquare])
        // if (tds[randomSquare].innerText === "Open") {
        //     tds[randomSquare].innerText = "O"
        //     setCount(count + 1)
        // } else {
            // populateRandomSquare()
        // }
        // let selectedSquare = populateRandomSquare()
        // if (selectedSquare.innerText === "Open") {
        //     selectedSquare.innerText = "O"
            // setCount(count + 1)
        // }

        let test = populateRandomSquare()
        console.log(test)
        test.innerText = "O"
        console.log(test)
        setCount(count + 1)
    }
  }, [count]);

  // populates a square to choose for the computer
  function populateRandomSquare() {
        let randomSquareNumber = (Math.floor(Math.random() * 8));
        console.log('RANDOM RANDOM: ', randomSquareNumber)
        // find the associated td
        const tds = document.querySelectorAll('td')
        // console.log(tds[randomSquareNumber])
        if (tds[randomSquareNumber].innerHTML !== "Open") {
            randomSquareNumber = populateRandomSquare()
        }
        return tds[randomSquareNumber]
  }

  const incrementCount = () => {
    setCount(count + 1);
  }

  let clickTest = (event) => {
    const clickedElement = event?.target;
    if (
      clickedElement &&
      clickedElement !== undefined &&
      clickedElement === event.currentTarget
    ) {
      if (clickedElement.innerText === "Open") {
          clickedElement.innerText = "X";
        setCount(count + 1)
      } else {
        alert("THIS TILE HAS ALREADY BEEN PLAYED");
      }
      validationCheck();
    }
    // validationCheck()
  };

  let validationCheck = () => {
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
      alert(userName + " HAS WON THE GAME!");
      resetTheGame();
    } else if (
      validationArray[1]?.mark !== "Open" &&
      validationArray[1]?.mark === validationArray[4]?.mark &&
      validationArray[4]?.mark === validationArray[7]?.mark
    ) {
        alert(userName + " HAS WON THE GAME!");
        resetTheGame();
    } else if (
      validationArray[2]?.mark !== "Open" &&
      validationArray[2]?.mark === validationArray[5]?.mark &&
      validationArray[5]?.mark === validationArray[8]?.mark
    ) {
        alert(userName + " HAS WON THE GAME!");
        resetTheGame();
    } // next three are for straight across
    else if (
      validationArray[0]?.mark !== "Open" &&
      validationArray[0]?.mark === validationArray[1]?.mark &&
      validationArray[1]?.mark === validationArray[2]?.mark
    ) {
        alert(userName + " HAS WON THE GAME!");
        resetTheGame();
    } else if (
      validationArray[3]?.mark !== "Open" &&
      validationArray[3]?.mark === validationArray[4]?.mark &&
      validationArray[4]?.mark === validationArray[5]?.mark
    ) {
        alert(userName + " HAS WON THE GAME!");
        resetTheGame();
    } else if (
      validationArray[6]?.mark !== "Open" &&
      validationArray[6]?.mark === validationArray[7]?.mark &&
      validationArray[7]?.mark === validationArray[8]?.mark
    ) {
        alert(userName + " HAS WON THE GAME!");
        resetTheGame();
    } // final two are for the crosses
    else if (
      validationArray[0]?.mark !== "Open" &&
      validationArray[0]?.mark === validationArray[4]?.mark &&
      validationArray[4]?.mark === validationArray[8]?.mark
    ) {
        alert(userName + " HAS WON THE GAME!");
        resetTheGame();
    } else if (
      validationArray[2]?.mark !== "Open" &&
      validationArray[2]?.mark === validationArray[4]?.mark &&
      validationArray[4]?.mark === validationArray[6]?.mark
    ) {
        alert(userName + " HAS WON THE GAME!");
        resetTheGame();
    }
  };

  let resetTheGame = () => {
    let tableRows = document.querySelectorAll("td");
    tableRows.forEach((cell) => {
      cell.innerText = "Open";
    });
    setCount(1)
  };

  const setupboard = () => {
    return (
      <div>
        <div>
          <h3>Tik Tak Toe</h3>
          <button onClick={incrementCount}>count test</button>
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
