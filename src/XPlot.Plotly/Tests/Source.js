﻿var trace1 = {
    x: [1, 1.75, 2.5],
    y: [1, 1, 1],
    type: 'scatter',
    mode: 'text',
    text: ['A', 'A+B', 'B'],
    textfont: {
        color: 'black',
        size: 18,
        family: 'Arial'
    }
};

var layout = {
    title: 'Venn Diagram with Circle Shapes',
    xaxis: {
        showticklabels: false,
        autotick: false,
        showgrid: false,
        zeroline: false
    },
    yaxis: {
        showticklabels: false,
        autotick: false,
        showgrid: false,
        zeroline: false
    },
    shapes: [{
        opacity: 0.3,
        xref: 'x',
        yref: 'y',
        fillcolor: 'blue',
        x0: 0,
        y0: 0,
        x1: 2,
        y1: 2,
        type: 'circle',
        line: {
            color: 'blue'
        }
    }, {
        opacity: 0.3,
        xref: 'x',
        yref: 'y',
        fillcolor: 'gray',
        x0: 1.5,
        y0: 0,
        x1: 3.5,
        y1: 2,
        type: 'circle',
        line: {
            color: 'gray'
        }
    }],
    margin: {
        l: 20,
        r: 20,
        b: 100
    },
    height: 500,
    width: 500
};

var data = [trace1];

Plotly.newPlot('myDiv', data, layout);
