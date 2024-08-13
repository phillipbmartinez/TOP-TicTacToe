function createBoard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i][j] = "[]"
        };
    };
    console.log(board);
    return board;
};

const board = createBoard();

const player1 = {
    name: "Player 1",
    marker: "[X]",
};

const player2 = {
    name: "Player 2",
    marker: "[O]",
};

board[0][1] = "[X]"
console.log(board[1][2]);
console.log(board);

