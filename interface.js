document.addEventListener('DOMContentLoaded', () => {
     let squares = document.querySelectorAll('.square');
     squares.forEach(square => {
          square.addEventListener('click', handleClick);
     });
});

function handleClick(event) {
     let square = event.target;
     console.log(square);
     let position = square.id;
     console.log(position);

     if (handleMove(position)) {
          setTimeout(() => {
               alert('O jogo acabou!!!');
          }, 10);
     }

     updateSquares();
}

function updateSquares() {
     let squares = document.querySelectorAll('.square');

     squares.forEach(square => {
          let position = square.id;
          let symbol = board[position];

          if (symbol != '') {
               square.innerHTML = `<div class='${symbol}'></div>`;
          }
     });
}
