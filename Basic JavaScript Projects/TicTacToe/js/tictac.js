
let activePlayer = 'X';
let selectSquares = [];

function placeXOrO(squareNumber) {

    if (!selectSquares.some(element => element.includes (squareNumber))) {
        let select =  document.getElementById(squareNumber);

        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        selectSquares.push(squareNumber + activePlayer);
        checkWinconditions();

        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        Audio('./media/place.mp3');

        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000)
        }
        return true;

    }

    function computersTurn() {
        let success = false;
        let pickASquare;

        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));

            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);

                success: true;
            };

            
        }

        function checkwinConditions() { 
            if (arrayIncludes ('0X', '1X', '2X')) { drawWinLine (50, 100, 558, 100); } 
            else if (arrayIncludes ('3X', '4X', '5X')) { drawWinLine (50, 304, 558, 304); } 
            else if (arrayIncludes ('6X', '7X', '8X')) { drawWinLine (50, 508, 558, 508); } 
            else if (arrayIncludes ('0X', '3X', '6X')) { drawWinLine (100, 50, 100, 558); } 
            else if (arrayIncludes ('1X', '4X', '7X'))  { drawWinLine (304, 50, 304, 558); } 
            else if (arrayIncludes ('2X', '5X', '8X')) { drawWinLine (508, 50, 508, 558); }  
            else if (arrayIncludes ('6X', '4x', '2X')) { drawWinLine (100, 508, 510, 90); }  
            else if (arrayIncludes ('0X', '4X', '8X')) { drawWinLine (100, 100, 520, 520); } 
            else if (arrayIncludes ('0O', '1O', '2O')) { drawWinLine (50, 100, 558, 100); }  
            else if (arrayIncludes ('3O', '4O', '5O')) { drawWinLine (50, 304, 558, 304); } 
            else if (arrayIncludes ('6O', '7O', '8O')) { drawWinLine (50, 508, 558, 508); } 
            else if (arrayIncludes ('0O', '3O', '6O')) { drawWinLine (100, 50, 100, 558); } 
            else if (arrayIncludes ('1O', '4O', '7O')) { drawWinLine (304, 50, 304, 558); } 
            else if (arrayIncludes ('2O', '5O', '8O')) { drawWinLine (508, 50, 508, 558); }  
            else if (arrayIncludes ('6O', '4O', '2O')) { drawWinLine (100, 508, 510, 90); } 
            else if (arrayIncludes ('0O', '4O', '8O')) { drawWinLine (100, 100, 520, 520); }
            
         else if (selectedsquares.length >= 9) {audio('./media/tie.mp3'); 
         setTimeout(function () { resetGame(); }, 1000); 
        }  
        function arrayIncludes (squareA, squareB, squareC) { 
            const a = selectedSquares.includes (squareA); 
            const b = selectedSquares.includes (squareB); 
            const c = selectedSquares.includes (squareC); 
            
            if (a === true && b === true && C === true) { return true; } 
        } 
        }
         
    }

    
}




