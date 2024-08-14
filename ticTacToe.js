const gameSquares = document.querySelectorAll(".gameSquares");

function createBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i][j] = "";
        }
    }
    return board;
};

function playGame() {
    const board = createBoard();

    const player1 = {
        name: "Player 1",
        marker: "X",
    };

    const player2 = {
        name: "Player 2",
        marker: "O",
    };

    board[0][2] = player1.marker;
    board[1][0] = player1.marker;
    board[2][0] = player1.marker;
    board[0][0] = player2.marker;
    board[1][1] = player2.marker;
    board[2][2] = player2.marker;

    const firstRow = board[0];
    const secondRow = board[1];
    const thirdRow = board[2];
    const firstColumn = [board[0][0], board[1][0], board[2][0]];
    const secondColumn = [board[0][1], board[1][1], board[2][1]];
    const thirdColumn = [board[0][2], board[1][2], board[2][2]];
    const firstDiagonal = [board[0][0], board[1][1], board[2][2]];
    const secondDiagonal = [board[0][2], board[1][1], board[2][0]];

    // Log the board and rows
    // console.log("Board:", board);
    console.log("First Row:", firstRow);
    console.log("Second Row:", secondRow);
    console.log("Third Row:", thirdRow);

    // console.log("First Column:", firstColumn);
    // console.log("Second Column:", secondColumn);
    // console.log("Third Column:", thirdColumn);

    // console.log("First Diagonal:", firstDiagonal);
    // console.log("Second Diagonal:", secondDiagonal);

    if (firstRow.every(m => m === "X") === true ||
        secondRow.every(m => m === "X") === true ||
        thirdRow.every(m => m === "X") === true ||
        firstColumn.every(m => m === "X") === true ||
        secondColumn.every(m => m === "X") === true ||
        thirdColumn.every(m => m === "X") === true ||
        firstDiagonal.every(m => m === "X") === true ||
        secondDiagonal.every(m => m === "X") === true) {
        console.log("Player 1 Wins!");
    } else if (firstRow.every(m => m === "X") === true ||
        secondRow.every(m => m === "O") === true ||
        thirdRow.every(m => m === "O") === true ||
        firstColumn.every(m => m === "O") === true ||
        secondColumn.every(m => m === "O") === true ||
        thirdColumn.every(m => m === "O") === true ||
        firstDiagonal.every(m => m === "O") === true ||
        secondDiagonal.every(m => m === "O") === true) {
        console.log("Player 2 Wins!");
    } else if (thirdRow.every(m => m === "O") === true) {
        console.log("Player2 Wins!");
    } else {
        console.log("It's Draw");
    }
};

resetButton.addEventListener("click", function () {
    gameSquares.forEach(div => {
        div.textContent = "";
    });
});

playGame();








