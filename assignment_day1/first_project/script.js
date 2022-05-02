let row, col;

    row = prompt("Enter No. of rows");
    col = prompt("Enter No. of columns");


//creatring grid
let rowsint = ``;
for(let i = 0;i<row;i++)
{
    let cols = ``;
    for(let j = 0;j<col;j++)
    {
        if((i+j)%2 == 0)
        {
            cols +=
                    `<td class="cell whitecell"><img src="images/run.png" class="cell-img"></img></td>`
        }
        else
        {
            cols +=
            `<td class="cell blackcell"><img src="images/run.png" class="cell-img"></img></td>
            `
        }
    }
    
    rowsint = rowsint + `<tr>` + cols + `</tr>`;
}
let grid = document.getElementById('grid');
grid.innerHTML = rowsint;

var num = parseInt((row*col)/2);

//dummy matrix

let arr = [];

    // creating two dimensional array
    // for (let i = 0; i< row; i++) {
    //     for(let j = 0; j< col; j++) {
    //         arr[i] = [];
    //     }
    // }

    // inserting elements to array
    for (let i = 0; i< row; i++) {
        for(let j = 0; j< col; j++) {
            arr[i] = arr[i] || [];
            arr[i][j] = 0;
        }
    }

//keeping count of apple
var count = 0;

//creating random
while(num--)
{
    let r = Math.floor((Math.random() * row) + 1);
    let c = Math.floor((Math.random() * col) + 1);
    if(r == 1 && c == 1)
    continue;
    if(arr[r-1][c-1] == 0)
    {
        grid.rows[r-1].cells[c-1].innerHTML = `<td class="cell whitecell"><img src="images/apple.jpg" class="cells-img"></img></td>`;
        count += 1;
        arr[r-1][c-1] = 1;
    }
}


var steps = 0;

let m = 0, n = 0;
var direction = "steady";
var interval;

showgrid();

let startbtn = document.getElementById('start');
startbtn.addEventListener('click', function(){
    interval = setInterval(movement, 500);
});

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if(interval)
        clearInterval(interval);

    if(key == "ArrowRight")
        direction = "right";
    else if(key == "ArrowLeft")
        direction = "left";
    else if(key == "ArrowUp")
        direction = "up";
    else if(key == "ArrowDown")
        direction = "down";

    interval = setInterval(movement, 500);
});

function movement()
{
    startbtn.style.display = "none";
    if(count == 0)
    {
        alert(`Game Over. Steps taken are ${steps}`);
        // window.location.href('http://127.0.0.1:5500/');
        
    }
    steps++;
    if(arr[m][n] == 1)
    {
        arr[m][n] = 0;
        count--;
    }
    if(direction === "steady")
    {
        n = n+1;
        direction = "right";
    }
    else if(direction === "right")
    {
        if(n == col-1)
        {
            direction = "left";
            n = n - 1;
        }
        else
        {
            n = n + 1;
        }
    }
    else if(direction == "left")
    {
        if(n == 0)
        {
            direction = "right";
            n = n + 1;
        }
        else
        {
            n = n - 1;
        }
    }
    else if(direction == "up")
    {
        if(m == 0)
        {
            direction = "down";
            m = m + 1;
        }
        else
        {
            m = m - 1;
        }
    }
    else if(direction == "down")
    {
        if(m == row - 1)
        {
            direction = "up";
            m = m - 1;
        }
        else
        {
            m = m + 1;
        }
    }
    if(count == 0)
    {
        alert(`Game Over. Steps taken are ${steps}`);
    }
    showgrid();
}

//showing table
function showgrid()
{
    for(let i = 0;i<row;i++)
    {
        for(let j = 0;j<col;j++)
        {
            if(i == m && j == n)
            {
                grid.rows[i].cells[j].innerHTML = `<td class="cell blackcell"><img src="images/run.png" class="cells-img"></img></td>`;
                
            }
            else
            {
                if(arr[i][j] == 1)
                {
                    grid.rows[i].cells[j].innerHTML = `<td class="cell whitecell"><img src="images/apple.jpg" class="cells-img"></img></td>`;
                }
                else
                {
                    if((i+j)%2 == 0)
                    {
                        grid.rows[i].cells[j].innerHTML = `<td class="cell whitecell"><img src="images/run.png" class="cell-img"></img></td>`;
                    }
                    else
                    {
                        grid.rows[i].cells[j].innerHTML = `<td class="cell blackcell"><img src="images/run.png" class="cell-img"></img></td>`
                    }
                }
            }
        }
    }
}