function RD(angle){
    return angle * 3.14 / 180;
}

var c = 0.551915024494;
var setOfCurves1 = [], setOfCurves2 = [], setOfCurves3 = [], setOfCurves2 = [], setOfCurves2 = [];
var numPetal = 3;


var Py31 = 3/4;
var Px31 = 0;
var Py32 = 1/4;
var Px32 = 0;
var Py33 = 0;
var Px33 = -2/4;
var Py34 = 0;
var Px34 = -1;

var R11 = 1/2*1/4;
var r = 7/8;
/*  ==============================  */

var additionalmodule11 = [
    {x: 0,      y: 1},
    {x: -c,    y: 1},
    {x: -1,    y: c},
    {x: -1,    y: 0}
];
var additionalmodule12 = [
    {x: 0*r,    y: 1*r},
    {x: -c*r,    y: 1*r},
    {x: -1*r,    y: c*r},
    {x: -1*r,    y: 0*r}
];

var k = (4/3)*Math.tan(Math.PI/16);
var c41 = [
    {x: 0,      y: 1},
    {x: -k,    y: 1},
    {x: -Math.sqrt(1+Math.pow(k, 2))*Math.cos(Math.PI/2-2*(Math.PI/4)/3),    y: Math.sqrt(1+Math.pow(k, 2))*Math.sin(Math.PI/2-2*(Math.PI/4)/3)},
    {x: -Math.cos(RD(45)),    y: Math.sin(RD(45))}
];

var additionalmodule61 = [
    {x: 0,      y: 2},
    {x: -1/4,   y: 2-1/4}
];

var additionalmodule62 = [
    {x: 0,      y: 2-1/4},
    {x: -1/2*1/4,   y: 2-1/4-1/2*1/4}
];



var mm0 = [
    {x: 0,    y: 1},
    {x: 0,    y: 1+1/8}
];

// var mm1 = [
//     {x: 0,    y: 1+1/8},
//     {x: 0,    y: 1+1/2+1/4},
//     {x: -1/2,    y: 2},
//     {x: -1,    y: 2}
// ];

var mm1 = [
    {x: 0,    y: 1+1/8},
    {x: 0,    y: 1+1/2+1/4},
    {x: -1/2,    y: 2},
    {x: -1,    y: 2}
];

var mm2 = [
    {x: -1,    y: 2},
    {x: -2,    y: 2}
];

// var mm20101 = [
//     {x: -1+0,    y: 1+1/2+1/8},
//     {x: -1+0,    y: 1+1/2+1/4},
//     {x: -1-1/8,    y: 2},
//     {x: -1-1/2-1/4,    y: 2}
// ];

var mm20101 = [
    {x: -1+mm1[0].x/2,    y: 1+mm1[0].y/2},
    {x: -1+mm1[1].x/2,    y: 1+mm1[1].y/2},
    {x: -1+mm1[2].x/2,    y: 1+mm1[2].y/2},
    {x: -1+mm1[3].x/2,    y: 1+mm1[3].y/2}
];
var mm20102 = [
    {x: mm1[3].x,    y: mm1[3].y},
    {x: -1/4+mm1[3].x,    y: mm1[3].y}
];
var mm20103 = [
    {x: mm20101[3].x,    y: mm20101[3].y},
    {x: -1/2+mm20101[3].x,    y: mm20101[3].y}
];
var mm20104 = [
    {x: -1+1/8*3/4+0,    y: 1+1/2},
    {x: -1+1/8*3/4+0,    y: 2},
    {x: -1+1/8*3/4-(1/4+1/8),    y: 2}
];

var mm20105 = [
    {x: -1-1/8*3/4+additionalmodule11[0].x*1/8*3/4,    y: 1+1/2+1/8*3/4+additionalmodule11[0].y*1/8*3/4},
    {x: -1-1/8*3/4+additionalmodule11[1].x*1/8*3/4,    y: 1+1/2+1/8*3/4+additionalmodule11[1].y*1/8*3/4},
    {x: -1-1/8*3/4+additionalmodule11[2].x*1/8*3/4,    y: 1+1/2+1/8*3/4+additionalmodule11[2].y*1/8*3/4},
    {x: -1-1/8*3/4+additionalmodule11[3].x*1/8*3/4,    y: 1+1/2+1/8*3/4+additionalmodule11[3].y*1/8*3/4}
];

var mm20106 = [
    {x: -1-1/8*3/4+additionalmodule11[0].x*1/8*3/4,    y: 1+1/2+1/8*3/4-additionalmodule11[0].y*1/8*3/4},
    {x: -1-1/8*3/4+additionalmodule11[1].x*1/8*3/4,    y: 1+1/2+1/8*3/4-additionalmodule11[1].y*1/8*3/4},
    {x: -1-1/8*3/4+additionalmodule11[2].x*1/8*3/4,    y: 1+1/2+1/8*3/4-additionalmodule11[2].y*1/8*3/4},
    {x: -1-1/8*3/4+additionalmodule11[3].x*1/8*3/4,    y: 1+1/2+1/8*3/4-additionalmodule11[3].y*1/8*3/4}
];
var mm20107 = [
    {x: -1-1/8*3/4-additionalmodule11[0].x*1/8*3/4,    y: 1+1/2+1/8*3/4-additionalmodule11[0].y*1/8*3/4},
    {x: -1-1/8*3/4-additionalmodule11[1].x*1/8*3/4,    y: 1+1/2+1/8*3/4-additionalmodule11[1].y*1/8*3/4},
    {x: -1-1/8*3/4-additionalmodule11[2].x*1/8*3/4,    y: 1+1/2+1/8*3/4-additionalmodule11[2].y*1/8*3/4},
    {x: -1-1/8*3/4-additionalmodule11[3].x*1/8*3/4,    y: 1+1/2+1/8*3/4-additionalmodule11[3].y*1/8*3/4}
];

var mm20108 = [
    {x: 0,    y: 2},
    {x: -1/4,    y: 2-1/4}
];

var mm20108_1 = [
    {x: mm20108[0].x*3/4,    y: 1/4+1/8+mm20108[0].y*3/4},
    {x: mm20108[1].x*3/4,    y: 1/4+1/8+mm20108[1].y*3/4}
];

var mm20109 = [
    {x: 1/4+1/4+1/8+mm20101[0].x,    y: -1/2-1/8+mm20101[0].y},
    {x: 1/4+1/4+1/8+mm20101[1].x,    y: -1/2-1/8+mm20101[1].y},
    {x: 1/4+1/4+1/8+mm20101[2].x,    y: -1/2-1/8+mm20101[2].y},
    {x: 1/4+1/4+1/8+mm20101[3].x,    y: -1/2-1/8+mm20101[3].y}
];
var mm20110 = [
    {x: mm20109[3].x,    y: mm20109[3].y},
    {x: -1/2+mm20109[3].x,    y: mm20109[3].y}
];

var mm20111 = [
    {x: 1/4+mm20101[0].x*3/4,    y: -1/2+1/4+mm20101[0].y*3/4},
    {x: 1/4+mm20101[1].x*3/4,    y: -1/2+1/4+mm20101[1].y*3/4},
    {x: 1/4+mm20101[2].x*3/4,    y: -1/2+1/4+mm20101[2].y*3/4},
    {x: 1/4+mm20101[3].x*3/4,    y: -1/2+1/4+mm20101[3].y*3/4}
];
var mm20112 = [
    {x: mm20110[0].x,    y: mm20110[0].y-1/8},
    {x: mm20110[1].x+1/8,    y: mm20110[1].y-1/8}
];

//=================================//

var mm20114 = [
    {x: -1+mm20101[0].x*1/2,    y: 1+mm20101[0].y*1/2},
    {x: -1+mm20101[1].x*1/2,    y: 1+mm20101[1].y*1/2},
    {x: -1+mm20101[2].x*1/2,    y: 1+mm20101[2].y*1/2},
    {x: -1+mm20101[3].x*1/2,    y: 1+mm20101[3].y*1/2}
];

var mm20115 = [
    {x: -1+mm20104[0].x*1/2,    y: 1+mm20104[0].y*1/2},
    {x: -1+mm20104[1].x*1/2,    y: 1+mm20104[1].y*1/2},
    {x: -1+mm20104[2].x*1/2,    y: 1+mm20104[2].y*1/2}
];

var mm20116 = [
    {x: -1-1/2+additionalmodule11[0].x*1/8*3/4*1/2,    y: 1+1/2+1/4+additionalmodule11[0].y*1/8*3/4*1/2},
    {x: -1-1/2+additionalmodule11[1].x*1/8*3/4*1/2,    y: 1+1/2+1/4+additionalmodule11[1].y*1/8*3/4*1/2},
    {x: -1-1/2+additionalmodule11[2].x*1/8*3/4*1/2,    y: 1+1/2+1/4+additionalmodule11[2].y*1/8*3/4*1/2},
    {x: -1-1/2+additionalmodule11[3].x*1/8*3/4*1/2,    y: 1+1/2+1/4+additionalmodule11[3].y*1/8*3/4*1/2}
];

var mm20117 = [
    {x: -1-1/2+additionalmodule11[0].x*1/8*3/4*1/2,    y: 1+1/2+1/4-additionalmodule11[0].y*1/8*3/4*1/2},
    {x: -1-1/2+additionalmodule11[1].x*1/8*3/4*1/2,    y: 1+1/2+1/4-additionalmodule11[1].y*1/8*3/4*1/2},
    {x: -1-1/2+additionalmodule11[2].x*1/8*3/4*1/2,    y: 1+1/2+1/4-additionalmodule11[2].y*1/8*3/4*1/2},
    {x: -1-1/2+additionalmodule11[3].x*1/8*3/4*1/2,    y: 1+1/2+1/4-additionalmodule11[3].y*1/8*3/4*1/2}
];
var mm20118 = [
    {x: -1-1/2-additionalmodule11[0].x*1/8*3/4*1/2,    y: 1+1/2+1/4-additionalmodule11[0].y*1/8*3/4*1/2},
    {x: -1-1/2-additionalmodule11[1].x*1/8*3/4*1/2,    y: 1+1/2+1/4-additionalmodule11[1].y*1/8*3/4*1/2},
    {x: -1-1/2-additionalmodule11[2].x*1/8*3/4*1/2,    y: 1+1/2+1/4-additionalmodule11[2].y*1/8*3/4*1/2},
    {x: -1-1/2-additionalmodule11[3].x*1/8*3/4*1/2,    y: 1+1/2+1/4-additionalmodule11[3].y*1/8*3/4*1/2}
];


var mm20119 = [
    {x: mm20114[3].x,    y: mm20114[3].y},
    {x: -2,    y: mm20114[3].y}
];

var mm20120 = [
    {x: mm20115[2].x,    y: mm20115[2].y},
    {x: mm20101[3].x,    y:  mm20101[3].y}
];

var mm20121 = [
    {x: -1,    y: 1+1/4+1/8},
    {x: -1-1/8*3/4,    y: 1+1/4+1/8},
    {x: -1-1/8*3/4,    y: 1+1/2}
];

var mm20122 = [
    {x: -1+1/4+additionalmodule11[0].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4+additionalmodule11[0].y*1/8*3/4},
    {x: -1+1/4+additionalmodule11[1].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4+additionalmodule11[1].y*1/8*3/4},
    {x: -1+1/4+additionalmodule11[2].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4+additionalmodule11[2].y*1/8*3/4},
    {x: -1+1/4+additionalmodule11[3].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4+additionalmodule11[3].y*1/8*3/4}
];

var mm20123 = [
    {x: -1+1/4+additionalmodule11[0].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4-additionalmodule11[0].y*1/8*3/4},
    {x: -1+1/4+additionalmodule11[1].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4-additionalmodule11[1].y*1/8*3/4},
    {x: -1+1/4+additionalmodule11[2].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4-additionalmodule11[2].y*1/8*3/4},
    {x: -1+1/4+additionalmodule11[3].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4-additionalmodule11[3].y*1/8*3/4}
];
var mm20124 = [
    {x: -1+1/4-additionalmodule11[0].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4-additionalmodule11[0].y*1/8*3/4},
    {x: -1+1/4-additionalmodule11[1].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4-additionalmodule11[1].y*1/8*3/4},
    {x: -1+1/4-additionalmodule11[2].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4-additionalmodule11[2].y*1/8*3/4},
    {x: -1+1/4-additionalmodule11[3].x*1/8*3/4,    y: 1+1/2+1/4+1/8*3/4-additionalmodule11[3].y*1/8*3/4}
];

var mm20125 = [
    {x: -1/8*3/4+additionalmodule11[0].x*1/8*3/4,    y: 1+1/8*3/4+additionalmodule11[0].y*1/8*3/4},
    {x: -1/8*3/4+additionalmodule11[1].x*1/8*3/4,    y: 1+1/8*3/4+additionalmodule11[1].y*1/8*3/4},
    {x: -1/8*3/4+additionalmodule11[2].x*1/8*3/4,    y: 1+1/8*3/4+additionalmodule11[2].y*1/8*3/4},
    {x: -1/8*3/4+additionalmodule11[3].x*1/8*3/4,    y: 1+1/8*3/4+additionalmodule11[3].y*1/8*3/4}
];

var mm20126 = [
    {x: -1/8*3/4+additionalmodule11[0].x*1/8*3/4,    y: 1+1/8*3/4-additionalmodule11[0].y*1/8*3/4},
    {x: -1/8*3/4+additionalmodule11[1].x*1/8*3/4,    y: 1+1/8*3/4-additionalmodule11[1].y*1/8*3/4},
    {x: -1/8*3/4+additionalmodule11[2].x*1/8*3/4,    y: 1+1/8*3/4-additionalmodule11[2].y*1/8*3/4},
    {x: -1/8*3/4+additionalmodule11[3].x*1/8*3/4,    y: 1+1/8*3/4-additionalmodule11[3].y*1/8*3/4}
];
var mm20127 = [
    {x: -1/8*3/4-additionalmodule11[0].x*1/8*3/4,    y: 1+1/8*3/4-additionalmodule11[0].y*1/8*3/4},
    {x: -1/8*3/4-additionalmodule11[1].x*1/8*3/4,    y: 1+1/8*3/4-additionalmodule11[1].y*1/8*3/4},
    {x: -1/8*3/4-additionalmodule11[2].x*1/8*3/4,    y: 1+1/8*3/4-additionalmodule11[2].y*1/8*3/4},
    {x: -1/8*3/4-additionalmodule11[3].x*1/8*3/4,    y: 1+1/8*3/4-additionalmodule11[3].y*1/8*3/4}
];

var mm20128 = [
    {x: -1/4+additionalmodule11[0].x*1/8*3/4,    y: 1+1/2+additionalmodule11[0].y*1/8*3/4},
    {x: -1/4+additionalmodule11[1].x*1/8*3/4,    y: 1+1/2+additionalmodule11[1].y*1/8*3/4},
    {x: -1/4+additionalmodule11[2].x*1/8*3/4,    y: 1+1/2+additionalmodule11[2].y*1/8*3/4},
    {x: -1/4+additionalmodule11[3].x*1/8*3/4,    y: 1+1/2+additionalmodule11[3].y*1/8*3/4}
];

var mm20129 = [
    {x: -1/4+additionalmodule11[0].x*1/8*3/4,    y: 1+1/2-additionalmodule11[0].y*1/8*3/4},
    {x: -1/4+additionalmodule11[1].x*1/8*3/4,    y: 1+1/2-additionalmodule11[1].y*1/8*3/4},
    {x: -1/4+additionalmodule11[2].x*1/8*3/4,    y: 1+1/2-additionalmodule11[2].y*1/8*3/4},
    {x: -1/4+additionalmodule11[3].x*1/8*3/4,    y: 1+1/2-additionalmodule11[3].y*1/8*3/4}
];
var mm20130 = [
    {x: -1/4-additionalmodule11[0].x*1/8*3/4,    y: 1+1/2-additionalmodule11[0].y*1/8*3/4},
    {x: -1/4-additionalmodule11[1].x*1/8*3/4,    y: 1+1/2-additionalmodule11[1].y*1/8*3/4},
    {x: -1/4-additionalmodule11[2].x*1/8*3/4,    y: 1+1/2-additionalmodule11[2].y*1/8*3/4},
    {x: -1/4-additionalmodule11[3].x*1/8*3/4,    y: 1+1/2-additionalmodule11[3].y*1/8*3/4}
];


var mm20131 = [
    {x: -1/4,    y: 1+1/2+1/8*3/4},
    {x: -1/4,    y: 1+1/2+1/4},
    {x: -1/4-1/8,    y: 1+1/2+1/4+1/4*3/4},
    {x: -1+1/4,    y: 1+1/2+1/4+1/4*3/4}
];

var mm20132 = [
    {x: -1/4,    y: 1+1/2+1/8*3/4},
    {x: -1/4,    y: 1+1/2+1/4},
    {x: -1/4-1/8,    y: 2},
    {x: -1,    y: 2}
];

var mm20133 = [
    {x: -1/2-1/4-1/8*3/4,    y: 1+1/2+1/4+1/8*3/4},
    {x: -1/2-1/4-1/8*3/4,    y: 2},
    {x: -1,    y: 2}
];

var mm20134 = [
    {x: 0,    y: 1+1/8*3/4},
    {x: 0,    y: 1+1/4},
    {x: 0,    y: 1+1/2},
    {x: -1/4,    y: 1+1/2+1/4}
];

var mm20135 = [
    {x: -1/4+1/8*3/4,    y: 1+1/2},
    {x: -1/4+1/8*3/4,    y: 1+1/2+1/8},
    {x: -1/4,        y: 1+1/2+1/4}
];

var mm20136 = [
    {x: -1/2-1/4-1/8*3/4,    y: 1+1/2},
    {x: -1/2-1/4-1/8*3/4,    y: 1+1/2+1/8},
    {x: -1/2-1/4+1/8*3/4,    y: 1+1/2+1/4},
    {x: -1/2-1/4+1/8*3/4,        y: 1+1/2+1/4+1/8*3/4}
];

var mm20137 = [
    {x: -1/2-1/4,    y: 1+1/4+1/8},
    {x: -1/2-1/4-1/8*3/4,    y: 1+1/4+1/8},
    {x: -1/2-1/4-1/8*3/4,    y: 1+1/2}
];

setOfCurves3.push(c41);//c25
setOfCurves2.push(mm20101);//c25
setOfCurves2.push(mm20106, mm20107);//c23
setOfCurves2.push(mm20108, mm20108_1);//c61, c62
setOfCurves2.push(mm20109, mm20110);//c51
setOfCurves2.push(mm20111, mm20112);//c52
setOfCurves2.push(mm20114);//c21
setOfCurves2.push(mm20115);//c26
setOfCurves2.push(mm20116, mm20117, mm20118);//c22
setOfCurves2.push(mm20119, mm20120);//c25
setOfCurves2.push(mm20121);//c24
setOfCurves2.push(mm20122, mm20123, mm20124);//c32
setOfCurves2.push(mm20126, mm20127);//c35
setOfCurves2.push(mm20128, mm20129, mm20130);//c37
setOfCurves2.push(mm20131);//c39
setOfCurves2.push(mm20132);//c310
setOfCurves2.push(mm20133);//c31
setOfCurves2.push(mm20134);//c36
setOfCurves2.push(mm20135);//c38
setOfCurves2.push(mm20136);//c33
setOfCurves2.push(mm20137);//c34

function setCenter(numberPetal) {
    r = 1;
    var Py11 = r*1*Math.cos(RD((360/numberPetal)/2));
    var Px11 = r*1*Math.sin(RD((360/numberPetal)/2));
    var Py12 = r*1/4*1*Math.cos(RD((360/numberPetal)/2));
    var Px12 = r*1/4*1*Math.sin(RD((360/numberPetal)/2));

    var Py21 = r*1*Math.cos(RD((360/numberPetal)/2));
    var Px21 = r*1*Math.sin(RD((360/numberPetal)/2));
    var Py22 = r*1/2*1*Math.cos(RD((360/numberPetal)/2));
    var Px22 = r*1/2*1*Math.sin(RD((360/numberPetal)/2));
    var mainmodule11 = [
        {x: -Px11,    y: Py11},
        {x: -Px12,    y: Py12},
        {x: Px12,    y: Py12},
        {x: Px11,    y: Py11}
    ];
    var mainmodule12 = [
        {x: -0,    y: Py21},
        {x: -0,    y: Py22},
        {x: -Px22,    y: Py22},
        {x: -Px21,    y: Py21}
    ];
    setOfCurves1 = [];
    setOfCurves1.push(mainmodule11, mainmodule12);//c11, c12
}