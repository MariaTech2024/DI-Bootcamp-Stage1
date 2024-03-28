const colors = [
    'red', 'orangered', 'orange',
    'yellow', 'yellowgreen', 'lightgreen',
    'green', 'turquoise', 'cyan',
    'lightskyblue', 'dodgerblue', 'blue',
    'darkblue', 'indigo', 'darkmagenta',
    'violet', 'lightpink', 'lightgrey',
    'grey', 'black', 'white'
]

const colorPadsContainer = document.querySelector('.color_container')
const clearBtn = document.querySelector('.btn')

const drawingPanel = document.querySelector('.grid_panel')

let selectedColor = null
let isMouseDown = false

// Create the color pallette
for (let i = 0; i < 21; i++) {
    let color = colors[i]
    let colorPad = document.createElement('div')
    colorPad.classList.add('color_pad')
    colorPad.style.backgroundColor = color
    colorPadsContainer.appendChild(colorPad)
    colorPad.addEventListener('click', (e) => {
        selectedColor = color
        clearBtn.style.backgroundColor = color
        clearBtn.style.textShadow = '1px 1px 1px #fff'
    })
}

// Grid for drawing
for (let i = 0; i < 24*60; i++) {
    let zone = document.createElement('div')
    zone.classList.add('draw')
    drawingPanel.appendChild(zone)    
}

const drawColor = (e) => {
    if ((e.type == 'click' || isMouseDown) && null !== selectedColor) {
        document.elementFromPoint(e.pageX, e.pageY).style.backgroundColor = selectedColor
    }
}

// Stop drawing
document.body.addEventListener('mouseup', () => isMouseDown = false)
document.body.addEventListener('dragend', () => isMouseDown = false)

// Clear the selected color and the drawing grid
clearBtn.addEventListener('click', () => {
    selectedColor = null
    clearBtn.style.backgroundColor = ''
    clearBtn.style.textShadow = 'none';
    drawingPanel.querySelectorAll('.draw').forEach(d => d.style.backgroundColor = '#fff')
    }
)

drawingPanel.addEventListener('mousedown', (e) => isMouseDown = true)
drawingPanel.addEventListener('mousemove', drawColor)
drawingPanel.addEventListener('click', drawColor)