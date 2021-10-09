(function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.lineWidth=3;
    var d = 300;
    //=============
    //
    //=============
    var Initialization = (function(){
        var angle = 0;
        var coor = { x: 0, y: 0 };

        function setEvents() {
            //
            $('#choose_single').change(function() {
                $('#group_rotation').attr('style', 'display: none;');
                if (this.checked) {
                    $("#choose_pattern").attr('checked', false);
                    $("#choose_frame").attr('checked', false);
                    $('#group_pattern').attr('style', 'display: none;');
                    $('#group_rotation').removeAttr('style');
                }
            });
            //
            $('#choose_pattern').change(function() {
                $('#group_pattern').attr('style', 'display: none;');
                if (this.checked) {
                    $("#choose_single").attr('checked', false);
                    $("#choose_frame").attr('checked', false);
                    $('#group_pattern').removeAttr('style');
                    $('#group_rotation').attr('style', 'display: none;');
                }
            });
            //
            $('#choose_frame').change(function() {
                $('#group_pattern').attr('style', 'display: none;');
                if (this.checked) {
                    $("#choose_single").attr('checked', false);
                    $("#choose_pattern").attr('checked', false);
                    $('#group_pattern').removeAttr('style');
                    $('#group_rotation').attr('style', 'display: none;');
                }
            });
        
            $('#clear_button').on('mousedown', function(e) {
                clear();
                var str = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>';
                $('#svg_source_textarea').html(str);
            });
            //
            $('#export_pdf_button').on('mousedown', function(e) {
                // only jpeg is supported by jsPDF
                var imgData = c.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save('Khme-Ornament-' + (new Date().getTime()) + '.pdf');
            });
            //
            $('#export_image_button').on('mousedown', function(e) {
                html2canvas(c, {
                    onrendered: function(canvas) {
                        var a = document.createElement('a');
                        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
                        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                        a.download = 'Khme-Ornament-' + (new Date().getTime()) + '.jpg';
                        a.click();
                    }
                });
            });
            //
            $('#export_svg_button').on('mousedown', function(e) {
                var can = document.getElementById('myCanvas');
                var ctx = can.getContext('2d');
                var a = document.createElement('a');
                a.href = can.toDataURL();
                a.download = 'Khme-Ornament-' + (new Date().getTime()) + '.png';
                a.click();
        
                // var c2s = new C2S(500, 500);
                // var svg = document.getElementById("svg");
        
                // if (svg.children.length > 0) {
                //     svg.removeChild(svg.children[0]);
                // }
                // var example = C2S_EXAMPLES[ctx];
                // example(c2s);
        
                // svg.appendChild(c2s.getSvg());
                
                if ($('#svg_source_editor').attr('style') === undefined) {
                    $('#svg_source_editor').attr('style', 'display: block;');
                } else {
                    $('#svg_source_editor').removeAttr('style');
                }
            });
            //
            $('#tool_source_cancel').on('mousedown', function(e) {
                $('#svg_source_editor').removeAttr('style');
            });
            //
            $('#tool_source_save').on('mousedown', function(e) {
                var str = $('#svg_source_textarea').text();
                var blob = new Blob([str], { type: "text/plain;charset=utf-8" });
                saveAs(blob, 'Khme-Ornament-' + (new Date().getTime()) + '.svg');
            });
            //
            $('#generate_button').on('mousedown', function(e) {
                clear();
                d = parseInt($('#choose_size').val());
                var x = parseInt($('#choose_position_x').val());
                var y = parseInt($('#choose_position_y').val());
                var row = parseInt($('#choose_row').val());
                var column = parseInt($('#choose_column').val());
                var smooth = parseInt($('#choose_smooth').val());
                var color = $('#choose_color').val();
                if ($('#showgrid').prop('checked') === true) {
                    drawGrid();
                }
                ctx.strokeStyle = color;

                if ($('#choose_pattern').prop('checked') === true) {
                    var angle = 45;
                    var n = row,
                        m = column;
                    for (var j = 0; j < n; j++) {
                        for (var i = -1; i < m; i++) {
                            if (i != -1) {
                                if (j == 0) {
                                    Ornament.createOrnamentSingleEdge(3, 135, 
                                        { x: 6 * i * d + coor.x + x, y: 6 * j * d + coor.y + y }, smooth);
                                } else if (j == n - 1) {
                                    Ornament.createOrnamentSingleEdge(3, 315, 
                                        { x: 6 * i * d + coor.x + x, y: 6 * j * d + coor.y + y }, smooth);
                                } else {
                                    Ornament.createOrnamentSingle(4, 45, 
                                        { x: 6 * i * d + coor.x + x, y: 6 * j * d + coor.y + y }, smooth);
                                }
                            }
        
                            if (j != n - 1) {
                                if (i == -1) {
                                    Ornament.createOrnamentSingleEdge(3, 45, 
                                        { x: 6 * i * d + coor.x + x + 3 * d, y: 6 * j * d + coor.y + y + 3 * d }, smooth);
                                } else if (i == m - 1) {
                                    Ornament.createOrnamentSingleEdge(3, 225, 
                                        { x: 6 * i * d + coor.x + x + 3 * d, y: 6 * j * d + coor.y + y + 3 * d }, smooth);
                                } else {
                                    Ornament.createOrnamentSingle(4, 45, 
                                        { x: 6 * i * d + coor.x + x + 3 * d, y: 6 * j * d + coor.y + y + 3 * d }, smooth);
                                }
                            }
                        }
                    }
                } else if ($('#choose_frame').prop('checked') === true) {
                    var ang = 0;
                    var n = row,
                        m = column;
                    for (var j = 0; j < n; j++) {
                        for (var i = 0; i < m; i++) {
                            if (j == 0) {
                                Ornament.createOrnamentSingleEdge(3, 135, 
                                    { x: 6 * i * d + coor.x + x, y: 6 * j * d + coor.y + y }, smooth);
                            } else if(j == n - 1) {
                                Ornament.createOrnamentSingleEdge(3, 315, 
                                    { x: 6 * i * d + coor.x + x, y: 6 * j * d + coor.y + y }, smooth);
                            }

                            if(j === 0 && (i >= 0 && i < m - 1)) {
                                Ornament.createOrnamentSingleEdge(3, 315, 
                                    { x: 6 * i * d + coor.x + x + 3 * d, y: 6 * j * d + coor.y + y + 3 * d }, smooth);
                            } else if(j === n - 1 && (i >= 0 && i < m - 1)) {
                                Ornament.createOrnamentSingleEdge(3, 135, 
                                    { x: 6 * i * d + coor.x + x + 3 * d, y: 6 * j * d + coor.y + y + -3 * d }, smooth);
                            }

                            if(i === 0 && (j > 0 && j < n - 1)) {
                                Ornament.createOrnamentSingleEdge(3, 225, 
                                    { x: 6 * i * d + coor.x + x, y: 6 * j * d + coor.y + y }, smooth);
                            } else if(i === m - 1 && (j > 0 && j < n - 1)) {
                                Ornament.createOrnamentSingleEdge(3, 45, 
                                    { x: 6 * i * d + coor.x + x, y: 6 * j * d + coor.y + y }, smooth);
                            }

                            if(i === 0 && j < n - 1) {
                                Ornament.createOrnamentSingleEdge(3, 45, 
                                    { x: 6 * i * d + coor.x + x + -3 * d, y: 6 * j * d + coor.y + y + 3 * d }, smooth);
                            } else if(i === m - 1 && j < n - 1) {
                                Ornament.createOrnamentSingleEdge(3, 225, 
                                    { x: 6 * i * d + coor.x + x + 3 * d, y: 6 * j * d + coor.y + y + 3 * d }, smooth);
                            }
                        }
                    }
                } else {
                    var angle = parseInt($('#choose_rotation').val());
                    Ornament.createOrnamentSingle(4, angle, { x: coor.x + x, y: coor.y + y }, smooth);
                }
            });
        }

        function getRandomRGBColor() {
            var r = 255 * Math.random() | 0,
                g = 255 * Math.random() | 0,
                b = 255 * Math.random() | 0;
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        }

        function drawGrid() {
            ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
            for (var i = 0; i <= 1000; i += 500 / 8) {
                ctx.setLineDash([5, 1]);
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(1000, i);
                ctx.stroke();
            }
            for (var i = 0; i <= 1000; i += 500 / 8) {
                ctx.setLineDash([5, 1]);
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, 1000);
                ctx.stroke();
            }
        
            ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
            for (var i = 0; i <= 1000; i += 500 / 1) {
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(1000, i);
                ctx.stroke();
            }
            for (var i = 0; i <= 1000; i += 500 / 1) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, 1000);
                ctx.stroke();
            }
        }

        function clear() {
            ctx.clearRect(0, 0, 1000, 1000);
        }

        function convertDEGtoRAD(angle) {
            return angle * 3.14 / 180;
        }

        $("#choose_single").attr('checked', true);
        setEvents();
    }());

    var Ornament = (function(){
        var cloneSource = [];
        var Ornament = {};

        function convertDEGtoRAD(angle) {
            return angle * 3.14 / 180;
        }

        function getRotatedPoints(x, y, angle) {
            return {
                x: x * Math.cos(angle) - y * Math.sin(angle),
                y: x * Math.sin(angle) + y * Math.cos(angle)
            };
        }

        function getRotatedPointsByReflection(x, y, angle) {
            return {
                x: x * Math.cos(angle) + y * Math.sin(angle),
                y: x * Math.sin(angle) - y * Math.cos(angle)
            };
        }

        function generateSVG(source, coor, translate, scale, rotation, reflection, smooth) {
            var str = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
            for (var i = 0; i < source.length; i++) {
                str += '<svg x="0" y="0" width="' + (6*scale.x + coor.x + translate.x )+ '" height="' + (6*scale.y + coor.y + translate.y)+ '">';
            //     // for (var j = 0; j < source[i].length; j++) {
            //     // console.log(source[i][0]);
                if (source[i].length === 4) {
                    str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ')" d="M' + scale.x * source[i][0].x + ',' + scale.y * source[i][0].y + ' C' + scale.x * source[i][1].x + ',' + scale.y * source[i][1].y + ' ' + scale.x * source[i][2].x + ',' + scale.y * source[i][2].y + ' ' + scale.x * source[i][3].x + ',' + scale.y * source[i][3].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ')" d="M' + scale.x * source[i][0].x + ',' + -1*scale.y * source[i][0].y + ' C' + scale.x * source[i][1].x + ',' + -1*scale.y * source[i][1].y + ' ' + scale.x * source[i][2].x + ',' + -1*scale.y * source[i][2].y + ' ' + scale.x * source[i][3].x + ',' + -1*scale.y * source[i][3].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ')" d="M' + -1*scale.x * source[i][0].x + ',' + scale.y * source[i][0].y + ' C' + -1*scale.x * source[i][1].x + ',' + scale.y * source[i][1].y + ' ' + -1*scale.x * source[i][2].x + ',' + scale.y * source[i][2].y + ' ' + -1*scale.x * source[i][3].x + ',' + scale.y * source[i][3].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ')" d="M' + -1*scale.x * source[i][0].x + ',' +  -1*scale.y * source[i][0].y + ' C' + -1*scale.x * source[i][1].x + ',' + -1*scale.y * source[i][1].y + ' ' + -1*scale.x * source[i][2].x + ',' + -1*scale.y * source[i][2].y + ' ' + -1*scale.x * source[i][3].x + ',' + -1*scale.y * source[i][3].y + '" style="stroke:#660000; fill:none;" />';
                    
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ')" d="M' + scale.x * source[i][0].x + ',' + scale.y * source[i][0].y + ' C' + scale.x * source[i][1].x + ',' + scale.y * source[i][1].y + ' ' + scale.x * source[i][2].x + ',' + scale.y * source[i][2].y + ' ' + scale.x * source[i][3].x + ',' + scale.y * source[i][3].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ')" d="M' + scale.x * source[i][0].x + ',' + -1*scale.y * source[i][0].y + ' C' + scale.x * source[i][1].x + ',' + -1*scale.y * source[i][1].y + ' ' + scale.x * source[i][2].x + ',' + -1*scale.y * source[i][2].y + ' ' + scale.x * source[i][3].x + ',' + -1*scale.y * source[i][3].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ')" d="M' + -1*scale.x * source[i][0].x + ',' + scale.y * source[i][0].y + ' C' + -1*scale.x * source[i][1].x + ',' + scale.y * source[i][1].y + ' ' + -1*scale.x * source[i][2].x + ',' + scale.y * source[i][2].y + ' ' + -1*scale.x * source[i][3].x + ',' + scale.y * source[i][3].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ')" d="M' + -1*scale.x * source[i][0].x + ',' +  -1*scale.y * source[i][0].y + ' C' + -1*scale.x * source[i][1].x + ',' + -1*scale.y * source[i][1].y + ' ' + -1*scale.x * source[i][2].x + ',' + -1*scale.y * source[i][2].y + ' ' + -1*scale.x * source[i][3].x + ',' + -1*scale.y * source[i][3].y + '" style="stroke:#660000; fill:none;" />';
                
                } else if(source[i].length === 3) {
                    str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ')" d="M' + scale.x * source[i][0].x + ',' + scale.y * source[i][0].y + ' Q' + scale.x * source[i][1].x + ',' + scale.y * source[i][1].y + ' ' + scale.x * source[i][2].x + ',' + scale.y * source[i][2].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ')" d="M' + scale.x * source[i][0].x + ',' + -1*scale.y * source[i][0].y + ' Q' + scale.x * source[i][1].x + ',' + -1*scale.y * source[i][1].y + ' ' + scale.x * source[i][2].x + ',' + -1*scale.y * source[i][2].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ')" d="M' + -1*scale.x * source[i][0].x + ',' + scale.y * source[i][0].y + ' Q' + -1*scale.x * source[i][1].x + ',' + scale.y * source[i][1].y + ' ' + -1*scale.x * source[i][2].x + ',' + scale.y * source[i][2].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ')" d="M' + -1*scale.x * source[i][0].x + ',' + -1*scale.y * source[i][0].y + ' Q' + -1*scale.x * source[i][1].x + ',' + -1*scale.y * source[i][1].y + ' ' + -1*scale.x * source[i][2].x + ',' + -1*scale.y * source[i][2].y + '" style="stroke:#660000; fill:none;" />';
                    
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ')" d="M' + scale.x * source[i][0].x + ',' + scale.y * source[i][0].y + ' Q' + scale.x * source[i][1].x + ',' + scale.y * source[i][1].y + ' ' + scale.x * source[i][2].x + ',' + scale.y * source[i][2].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ')" d="M' + scale.x * source[i][0].x + ',' + -1*scale.y * source[i][0].y + ' Q' + scale.x * source[i][1].x + ',' + -1*scale.y * source[i][1].y + ' ' + scale.x * source[i][2].x + ',' + -1*scale.y * source[i][2].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ')" d="M' + -1*scale.x * source[i][0].x + ',' + scale.y * source[i][0].y + ' Q' + -1*scale.x * source[i][1].x + ',' + scale.y * source[i][1].y + ' ' + -1*scale.x * source[i][2].x + ',' + scale.y * source[i][2].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<path transform="translate(' + (2*scale.x + coor.x + translate.x) + ' ' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ')" d="M' + -1*scale.x * source[i][0].x + ',' + -1*scale.y * source[i][0].y + ' Q' + -1*scale.x * source[i][1].x + ',' + -1*scale.y * source[i][1].y + ' ' + -1*scale.x * source[i][2].x + ',' + -1*scale.y * source[i][2].y + '" style="stroke:#660000; fill:none;" />';
                } else if(source[i].length === 2) {
                    str += '<line transform="translate(' + (2*scale.x + coor.x + translate.x) + ',' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ' 0 0)" x1="' + scale.x * source[i][0].x + '" y1="' + scale.y * source[i][0].y + '" x2="' + scale.x * source[i][1].x + '" y2="' + scale.y * source[i][1].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<line transform="translate(' + (2*scale.x + coor.x + translate.x) + ',' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ' 0 0)" x1="' + scale.x * source[i][0].x + '" y1="' + -1*scale.y * source[i][0].y + '" x2="' + scale.x * source[i][1].x + '" y2="' + -1*scale.y * source[i][1].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<line transform="translate(' + (2*scale.x + coor.x + translate.x) + ',' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ' 0 0)" x1="' + -1*scale.x * source[i][0].x + '" y1="' + scale.y * source[i][0].y + '" x2="' + -1*scale.x * source[i][1].x + '" y2="' + scale.y * source[i][1].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<line transform="translate(' + (2*scale.x + coor.x + translate.x) + ',' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (rotation * 180 / 3.14) + ' 0 0)" x1="' + -1*scale.x * source[i][0].x + '" y1="' + -1*scale.y * source[i][0].y + '" x2="' + -1*scale.x * source[i][1].x + '" y2="' + -1*scale.y * source[i][1].y + '" style="stroke:#660000; fill:none;" />';
                
            //         str += '<line transform="translate(' + (2*scale.x + coor.x + translate.x) + ',' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ' 0 0)" x1="' + scale.x * source[i][0].x + '" y1="' + scale.y * source[i][0].y + '" x2="' + scale.x * source[i][1].x + '" y2="' + scale.y * source[i][1].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<line transform="translate(' + (2*scale.x + coor.x + translate.x) + ',' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ' 0 0)" x1="' + scale.x * source[i][0].x + '" y1="' + -1*scale.y * source[i][0].y + '" x2="' + scale.x * source[i][1].x + '" y2="' + -1*scale.y * source[i][1].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<line transform="translate(' + (2*scale.x + coor.x + translate.x) + ',' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ' 0 0)" x1="' + -1*scale.x * source[i][0].x + '" y1="' + scale.y * source[i][0].y + '" x2="' + -1*scale.x * source[i][1].x + '" y2="' + scale.y * source[i][1].y + '" style="stroke:#660000; fill:none;" />';
            //         str += '<line transform="translate(' + (2*scale.x + coor.x + translate.x) + ',' + (2*scale.y + coor.y + translate.y) + ') rotate(' + (90*rotation * 180 / 3.14) + ' 0 0)" x1="' + -1*scale.x * source[i][0].x + '" y1="' + -1*scale.y * source[i][0].y + '" x2="' + -1*scale.x * source[i][1].x + '" y2="' + -1*scale.y * source[i][1].y + '" style="stroke:#660000; fill:none;" />';
                }
            //     // }
                str += '</svg>';
            }
            str += '</svg>';
            $('#svg_source_textarea').html(str);
        }
        
        Ornament.createOrnamentSingle = function(numberPetal, angle, pos, smooth) {
            for (var i = 0; i < numberPetal; i++) {
                drawOrnament(setOfCurves2, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, 
                    { x: d, y: d }, convertDEGtoRAD(90 * i + angle), true, true, false, smooth);
                drawOrnament(setOfCurves3, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, 
                    { x: d, y: d }, convertDEGtoRAD(90 * i + angle), true, true, false, smooth);
                drawOrnament(setOfCurves3, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, 
                    { x: 7/8*d, y: 7/8*d }, convertDEGtoRAD(90 * i + angle), true, true, false, smooth);

                if(typeof setOfCurves4 !== "undefined") {
                    drawOrnament(setOfCurves4, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, { x: d, y: d }, convertDEGtoRAD(90 * i + angle), true, true, false, smooth);
                    drawOrnament(setOfCurves4, {x: pos.x, y: pos.y}, { x: 1/4*d, y: -1/4*d }, { x: 3/4*d, y: 3/4*d }, convertDEGtoRAD(90 * i + angle), true, true, false, smooth);
                    // drawOrnament(setOfCurves4, {x: pos.x, y: pos.y}, { x: -(Math.cos(convertDEGtoRAD(45)))*d+1/32*d, y: (Math.cos(convertDEGtoRAD(45)))*d-1/32*d }, { x: 3/4*1/2*d, y: 3/4*1/2*d }, convertDEGtoRAD(90 * i + angle - 45), true, true, false, smooth);
                    // drawOrnament(setOfCurves4, {x: pos.x, y: pos.y}, { x: -(Math.cos(convertDEGtoRAD(45)))*d+1/32*d, y: (Math.cos(convertDEGtoRAD(45)))*d-1/32*d }, { x: 3/4*1/2*d, y: 3/4*1/2*d }, convertDEGtoRAD(90 * i + angle + 45), true, true, false, smooth);
                    // drawOrnament(setOfCurves4, {x: pos.x, y: pos.y}, { x: -(1/2+1/8+1/16)*d, y: (1/2+1/8+1/16)*d }, { x: 3/4*1/2*d, y: 3/4*1/2*d }, convertDEGtoRAD(90 * i + angle + 45), true, true, false, smooth);
                }
            }
            
            if(typeof setCenter === "function") {
                var numberPetals = parseInt($('#choose_numberofpetals').val());
                console.log(numberPetals);
                setCenter(numberPetals);
                
                console.log(typeof setOfCurves5);
                console.log(typeof setOfCurves1);
                if(typeof setOfCurves5 !== "undefined") {
                    for(var i = 0; i < 8; i++) {
                        drawOrnament(setOfCurves5, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, { x: d, y: d }, convertDEGtoRAD(45 * i + angle - 45/2-45/2), false, true, true, smooth);
                        drawOrnament(setOfCurves5, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, { x: d, y: d }, convertDEGtoRAD(45 * i + angle + 45/2-45/2), false, true, true, smooth);
                    }
                } else if(typeof setOfCurves1 !== "undefined") {
                    for(var i = 0; i < 10; i++) {
                        console.log('here');
                        drawOrnament(setOfCurves1, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, 
                            { x: 7/8*d, y: 7/8*d }, convertDEGtoRAD(360/numberPetals * i + angle), false, true, true, smooth);
                    }
                }
            }
        
        };
        
        Ornament.createOrnamentSingleEdge = function(numberPetal, angle, pos, smooth) {
            var isPattern = true, first = true, second = true, third = true;
            for (var i = 0; i < numberPetal; i++) {
                if(i == 0) {
                    first = false;
                    second = true;
                    third = false;
                } if(i == 1) {
                    first = true;
                    second = true;
                    third = false;
                } if(i == 2) {
                    first = true;
                    second = false;
                    third = false;
                }
                drawOrnament(setOfCurves2, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, 
                    { x: d, y: d }, convertDEGtoRAD(90 * i + angle), first, second, third, smooth);
                drawOrnament(setOfCurves3, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, 
                    { x: d, y: d }, convertDEGtoRAD(90 * i + angle), first, second, third, smooth);
                drawOrnament(setOfCurves3, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, 
                    { x: 7/8*d, y: 7/8*d }, convertDEGtoRAD(90 * i + angle), first, second, third, smooth);
                
                if(typeof setOfCurves4 !== "undefined") {
                    drawOrnament(setOfCurves4, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, { x: d, y: d }, convertDEGtoRAD(90 * i + angle), first, second, third, smooth);
                    drawOrnament(setOfCurves4, {x: pos.x, y: pos.y}, { x: 1/4*d, y: -1/4*d }, { x: 3/4*d, y: 3/4*d }, convertDEGtoRAD(90 * i + angle), first, second, third, smooth);
                    // drawOrnament(setOfCurves4, {x: pos.x, y: pos.y}, { x: -(Math.cos(convertDEGtoRAD(45)))*d+1/32*d, y: (Math.cos(convertDEGtoRAD(45)))*d-1/32*d }, { x: 3/4*1/2*d, y: 3/4*1/2*d }, convertDEGtoRAD(90 * i + angle - 45), true, true, false, smooth);
                    // drawOrnament(setOfCurves4, {x: pos.x, y: pos.y}, { x: -(Math.cos(convertDEGtoRAD(45)))*d+1/32*d, y: (Math.cos(convertDEGtoRAD(45)))*d-1/32*d }, { x: 3/4*1/2*d, y: 3/4*1/2*d }, convertDEGtoRAD(90 * i + angle + 45), true, true, false, smooth);
                    // drawOrnament(setOfCurves4, {x: pos.x, y: pos.y}, { x: -(1/2+1/8+1/16)*d, y: (1/2+1/8+1/16)*d }, { x: 3/4*1/2*d, y: 3/4*1/2*d }, convertDEGtoRAD(90 * i + angle + 45), true, true, false, smooth);
                }
            }

            if(typeof setCenter === "function") {
                $('#choose_numberofpetals').val(4);
                var numberPetals = parseInt($('#choose_numberofpetals').val());
                setCenter(numberPetals);
                
                if(typeof setOfCurves5 !== "undefined") {
                    for(var i = 0; i < 4; i++) {
                        drawOrnament(setOfCurves5, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, { x: d, y: d }, convertDEGtoRAD(45 * i + angle - 45/2-45/2), false, true, true, smooth);
                        drawOrnament(setOfCurves5, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, { x: d, y: d }, convertDEGtoRAD(45 * i + angle + 45/2-45/2), false, true, true, smooth);
                    }
                } else if(typeof setOfCurves1 !== "undefined") {
                    for(var i = 0; i < 2; i++) {
                        drawOrnament(setOfCurves1, {x: pos.x, y: pos.y}, { x: 0, y: 0 }, 
                            { x: 7/8*d, y: 7/8*d }, convertDEGtoRAD(360/numberPetals * i + angle), false, true, true, smooth);
                    }
                }
            }
        }

        function drawOrnament(source, coor, translate, scale, rotation, reflection, onlyReflection, reflective, smooth) {
            if (smooth == 1) {
                smooth = 0.07;
            } else if (smooth == 2) {
                smooth = 0.05;
            } else if (smooth == 3) {
                smooth = 0.03;
            } else if (smooth == 4) {
                smooth = 0.01;
            } else {
                smooth = 0.009;
            }
        
            cloneSource = [];
            for (var k = 0; k < source.length; k++) {
                cloneSource[k] = [];
                for (var i = 0; i <= 1; i += smooth) {
                    var p = BezierCurve.generatePoints(source[k], i);
                    var point = {
                        x: coor.x + translate.x + scale.x * (p.x),
                        y: coor.y + translate.y + scale.y * (p.y)
                    };
                    cloneSource[k].push(point);
                }
            }
            
            if(onlyReflection) {
                var newAngle = -rotation;
                for(var l = 0; l < cloneSource.length; l++) {
                    var position = {
                        x: coor.x - getRotatedPoints(coor.x - cloneSource[l][0].x, coor.y - cloneSource[l][0].y, newAngle).x,
                        y: coor.y + getRotatedPoints(coor.x - cloneSource[l][0].x, coor.y - cloneSource[l][0].y, newAngle).y
                    };
                    ctx.beginPath();
                    ctx.moveTo(position.x, position.y);
                    for (var k = 1; k < cloneSource[l].length; k++) {
                        var position = {
                            x: coor.x - getRotatedPoints(coor.x - cloneSource[l][k].x, coor.y - cloneSource[l][k].y, newAngle).x,
                            y: coor.y + getRotatedPoints(coor.x - cloneSource[l][k].x, coor.y - cloneSource[l][k].y, newAngle).y
                        };
                        ctx.lineTo(position.x, position.y);
                    }
                    ctx.stroke();
                }
            }
            
            if (reflective) {
                var newAngle = -rotation + convertDEGtoRAD(180);
                for(var l = 0; l < cloneSource.length; l++) {
                    var position = {
                        x: coor.x - getRotatedPointsByReflection(coor.x - cloneSource[l][0].x, coor.y - cloneSource[l][0].y, newAngle).x,
                        y: coor.y + getRotatedPointsByReflection(coor.x - cloneSource[l][0].x, coor.y - cloneSource[l][0].y, newAngle).y
                    };
                    ctx.beginPath();
                    ctx.moveTo(position.x, position.y);
                    for (var k = 1; k < cloneSource[l].length; k++) {
                        var position = {
                            x: coor.x - getRotatedPointsByReflection(coor.x - cloneSource[l][k].x, coor.y - cloneSource[l][k].y, newAngle).x,
                            y: coor.y + getRotatedPointsByReflection(coor.x - cloneSource[l][k].x, coor.y - cloneSource[l][k].y, newAngle).y
                        };
                        ctx.lineTo(position.x, position.y);
                    }
                    ctx.stroke();
                }
            }
        
            if (reflection) {
                var newAngle = -rotation + convertDEGtoRAD(270);
                for(var l = 0; l < cloneSource.length; l++) {
                    var position = {
                        x: coor.x - getRotatedPointsByReflection(coor.x - cloneSource[l][0].x, coor.y - cloneSource[l][0].y, newAngle).x,
                        y: coor.y + getRotatedPointsByReflection(coor.x - cloneSource[l][0].x, coor.y - cloneSource[l][0].y, newAngle).y
                    };
                    ctx.beginPath();
                    ctx.moveTo(position.x, position.y);
                    for (var k = 1; k < cloneSource[l].length; k++) {
                        var position = {
                            x: coor.x - getRotatedPointsByReflection(coor.x - cloneSource[l][k].x, coor.y - cloneSource[l][k].y, newAngle).x,
                            y: coor.y + getRotatedPointsByReflection(coor.x - cloneSource[l][k].x, coor.y - cloneSource[l][k].y, newAngle).y
                        };
                        ctx.lineTo(position.x, position.y);
                    }
                    ctx.stroke();
                }
            }

            //generateSVG(source, coor, translate, scale, rotation, reflection, smooth);
        }
        
        function drawCircle(position, radius, angle, number) {
            for (var i = 0; i < number; i++) {
                ctx.beginPath();
                // ctx.arc(position.x, position.y, radius, i*Math.PI/4-Math.PI/2+convertDEGtoRAD(angle), i*Math.PI/4-Math.PI/4+convertDEGtoRAD(angle), false);
                // ctx.arc(position.x, position.y, radius, -(i*Math.PI/4+Math.PI/2+Math.PI/4)+convertDEGtoRAD(angle), -(i*Math.PI/4+Math.PI/2)+convertDEGtoRAD(angle), false);
                ctx.arc(position.x, position.y, radius, -Math.PI/2-Math.PI/4+i*Math.PI/4, -Math.PI/2+i*Math.PI/4, false);
                // ctx.arc(position.x, position.y, radius, (-i*Math.PI/4+Math.PI/2+Math.PI/4)+convertDEGtoRAD(angle), (-i*Math.PI/4+Math.PI/2)+convertDEGtoRAD(angle), false);
                ctx.stroke();
            }
        }

        return Ornament;
    }());


    //=============
    //
    //=============
    var BezierCurve = (function(){
        var factorial = [];
        var BezierCurve = {};

        function getFactorial(n) {
            if (n == 0 || n == 1)
                return 1;
            if (factorial[n] > 0)
                return factorial[n];
            return factorial[n] = getFactorial(n - 1) * n;
        }

        BezierCurve.generatePoints = function(points, t) {
            var pFinal = { x: 0, y: 0 };
            for (var i = 0; i < points.length; i++) {
                pFinal.x += (getFactorial(points.length - 1) / ((getFactorial(i)) * (getFactorial(points.length - 1 - i)))) * 
                            Math.pow(1 - t, points.length - 1 - i) * Math.pow(t, i) * points[i].x;
                pFinal.y += (getFactorial(points.length - 1) / ((getFactorial(i)) * (getFactorial(points.length - 1 - i)))) * 
                            Math.pow(1 - t, points.length - 1 - i) * Math.pow(t, i) * points[i].y;
            }
            return pFinal;
        };

        return BezierCurve;
    }());
}());