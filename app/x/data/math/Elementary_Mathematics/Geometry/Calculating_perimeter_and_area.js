/*
计算周长和面积

输入：布尔值，只随机生成true的(三角形，圆形，矩形，平行四边形，五边形，六边形，七边形，八边形，椭圆形，菱形，梯形，半圆形)
输出：[题干，答案]

示例1：输入：(true，圆形，矩形，平行四边形，五边形，六边形，七边形，八边形，椭圆形，菱形，梯形，半圆形)
输出：[（英文）已知直角三角形的两个边长是。。。请计算周长/面积, 周长或面积](切记每次只要求面积或周长)

其他形状可能有区别比如矩形，多边形，梯形，圆形等它们给的题干参数肯定都不一样，但是最终都是计算周长或面积

周长或面积也是随机，抽取的，比如这次只要求用户计算周长，下次可能只要求计算面积
*/

$X.math.Elementary_Mathematics.Geometry.perimeter_and_area = function (
    square, triangle, circle, rectangle, parallelogram,
    pentagon, hexagon, heptagon, octagon, oval,
    rhombus, trapezoid, semicircle
) {
    // 创建一个数组，包含可选的形状
    var shapes = [];

    if (square) shapes.push({ name: "Square", hasPerimeter: true, hasArea: true });
    if (triangle) shapes.push({ name: "Triangle", hasPerimeter: true, hasArea: true });
    if (circle) shapes.push({ name: "Circle", hasPerimeter: true, hasArea: true });
    if (rectangle) shapes.push({ name: "Rectangle", hasPerimeter: true, hasArea: true });
    if (parallelogram) shapes.push({ name: "Parallelogram", hasPerimeter: true, hasArea: true });
    if (pentagon) shapes.push({ name: "Pentagon", hasPerimeter: true, hasArea: true });
    if (hexagon) shapes.push({ name: "Hexagon", hasPerimeter: true, hasArea: true });
    if (heptagon) shapes.push({ name: "Heptagon", hasPerimeter: true, hasArea: true });
    if (octagon) shapes.push({ name: "Octagon", hasPerimeter: true, hasArea: true });
    if (oval) shapes.push({ name: "Oval", hasPerimeter: true, hasArea: true });
    if (rhombus) shapes.push({ name: "Rhombus", hasPerimeter: true, hasArea: true });
    if (trapezoid) shapes.push({ name: "Trapezoid", hasPerimeter: true, hasArea: true });
    if (semicircle) shapes.push({ name: "Semicircle", hasPerimeter: true, hasArea: true });

    // 随机选择一个可选的形状
    var randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    // 定义形状的数据
    var shapeData = null;

    // 为选定的形状提供具体的数据
    if (randomShape.name === "Triangle") {
        var base = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { base: base, height: height };
    } else if(randomShape.name === "Square"){
         var side = Math.random() * 10 +1;
        shapeData = { side: side };
    }else if (randomShape.name === "Circle") {
        var radius = Math.random() * 10 + 1;
        shapeData = { radius: radius };
    } else if (randomShape.name === "Rectangle") {
        var length = Math.random() * 10 + 1;
        var width = Math.random() * 10 + 1;
        shapeData = { length: length, width: width };
    }
    // 添加其他形状的数据设置
    // ...
    else if (randomShape.name === "Pentagon") {
        // 五边形的数据设置示例
        var apothem = Math.random() * 10 +1;
        var side = Math.random() * 10 + 1;
        shapeData = { side: side, apothem: apothem };
    } else if (randomShape.name === "Hexagon") {
        // 六边形的数据设置示例
        var apothem = Math.random() * 10 +1;
        var side = Math.random() * 10 + 1;
        shapeData = { side: side, apothem: apothem };
    } else if (randomShape.name === "Heptagon") {
        // 七边形的数据设置示例
        var apothem = Math.random() * 10 +1;
        var side = Math.random() * 10 + 1;
        shapeData = { side: side, apothem: apothem };
    } else if (randomShape.name === "Octagon") {
        // 八边形的数据设置示例
        var apothem = Math.random() * 10 +1;
        var side = Math.random() * 10 + 1;
        shapeData = { side: side, apothem: apothem };
    }else if (randomShape.name === "Oval") {
        // 椭圆形的数据设置示例
        var longRadius = Math.random() * 10 + 1;
        var shortRadius = Math.random() * 10 + 1;
        shapeData = { longRadius: longRadius, shortRadius: shortRadius };
    }else if (randomShape.name === "Rhombus") {
        // 菱形的数据设置示例
        var side = Math.random() * 10 + 1;
        var diagona1 = Math.random() * 10 + 1;
        var diagona2 = Math.random() * 10 + 1;
        shapeData = { side: side, diagonal1: diagonal1, diagonal2: diagonal2 };
    }else if (randomShape.name === "Trapezoid") {
        // 梯形的数据设置示例
        var side1 = Math.random() * 10 + 1;
        var side2 = Math.random() * 10 + 1;
        var side3 = Math.random() * 10 + 1;
        var side4 = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { side1: side1, side2: side2, side3: side3, side4: side4, height: height };
    }else if (randomShape.name === "SemiCircle") {
        // 七边形的数据设置示例
        var radius = Math.random() * 10 + 1;
        shapeData = { radius: radius };
    }

    // 添加其他形状的数据设置
    // ...

    // 随机选择计算周长或面积
    var calculatePerimeter = Math.random() < 0.5;

    // 计算周长和面积的具体逻辑
    var question, answer;
    if (calculatePerimeter) {
        if (randomShape.hasPerimeter) {
            var perimeter = 0;
            if (randomShape.name === "Triangle") {
                perimeter = randomShape.hasArea ?
                    shapeData.base + shapeData.height + Math.sqrt(shapeData.base ** 2 + shapeData.height ** 2) :
                    shapeData.base + shapeData.height + Math.random() * 10 + 1;
            } else if (randomShape.name === "Square"){
                 perimeter = 4 * shapeData.side;   
            }else if (randomShape.name === "Circle") {
                perimeter = 2 * Math.PI * shapeData.radius;
            } else if (randomShape.name === "Rectangle") {
                perimeter = 2 * (shapeData.length + shapeData.width);
            }else if (randomShape.name === "Pentagon") {
                perimeter = 5 * shapeData.side;
            }else if (randomShape.name === "Hexagon") {
                perimeter = 6 * shapeData.side;
            }else if (randomShape.name === "Heptagon") {
                perimeter = 7 * shapeData.side;
            }else if (randomShape.name === "Octagon") {
                perimeter = 8 * shapeData.side;
            }else if (randomShape.name === "Oval") {
                perimeter = Math.Pi * (shapeData.longRadius + shapeData.shortRadius);
            }else if (randomShape.name === "Rhombus") {
                perimeter = 4 * shapeData.side;
            }else if (randomShape.name === "SemiCircle") {
                perimeter = Math.Pi * shapeData.radius;
            }
            // 添加其他形状的周长计算逻辑
            // ...

            question = `Given a ${randomShape.name} with `;
            for (const key in shapeData) {
                if (shapeData.hasOwnProperty(key)) {
                    question += `${key}: ${shapeData[key]} cm, `;
                }
            }
            question = question.slice(0, -2); // 去掉最后的逗号和空格
            question += `, calculate the perimeter.`;
            answer = `Perimeter: ${perimeter.toFixed(2)} cm`;
        } else {
            // 如果该形状不支持周长计算，则重新选择计算面积
            calculatePerimeter = false;
        }
    }

    if (!calculatePerimeter) {
        if (randomShape.hasArea) {
            var area = 0;
            if (randomShape.name === "Triangle") {
                area = randomShape.hasPerimeter ?
                    (0.5 * shapeData.base * shapeData.height) :
                    (0.5 * shapeData.base * shapeData.height) + Math.random() * 10 + 1;
            } else if(randomShape.name === "Square"){
                area = shapeData.side * shapeData.side;   
            }else if (randomShape.name === "Circle") {
                area = Math.PI * shapeData.radius ** 2;
            } else if (randomShape.name === "Rectangle") {
                area = shapeData.length * shapeData.width;
            }else if (randomShape.name === "Pentagon") {
                area = (shapeData.apothem * 5 * shapeData.side)/2;
            }else if (randomShape.name === "Hexagon") {
                area = (shapeData.apothem * 6 * shapeData.side)/2;
            }else if (randomShape.name === "Heptagon") {
                area = (shapeData.apothem * 7 * shapeData.side)/2;
            }else if (randomShape.name === "Octagon") {
                area = (shapeData.apothem * 8 * shapeData.side)/2;
            }else if (randomShape.name === "Oval") {
                area = Math.Pi * shapeData.longRadius * shapeData.shortRadius;
            }else if (randomShape.name === "Rhombus") {
                perimeter = (shapeData.diagonal1 * dhapeData.diagonal2)/2;
            }else if (randomShape.name === "SemiCircle") {
                perimeter = (Math.Pi * shapeData.radius * shapeData.radius)/2;
            }
            // 添加其他形状的面积计算逻辑
            // ...

            question = `Given a ${randomShape.name} with `;
            for (const key in shapeData) {
                if (shapeData.hasOwnProperty(key)) {
                    question += `${key}: ${shapeData[key]} cm, `;
                }
            }
            question = question.slice(0, -2); // 去掉最后的逗号和空格
            question += `, calculate the area.`;
            answer = `Area: ${area.toFixed(2)} cm^2`;
        } else {
            // 如果该形状不支持面积计算，则重新选择计算周长
            calculatePerimeter = true;
            var perimeter = 0;
            if (randomShape.name === "Triangle") {
                perimeter = randomShape.hasArea ?
                    shapeData.base + shapeData.height + Math.sqrt(shapeData.base ** 2 + shapeData.height ** 2) :
                    shapeData.base + shapeData.height + Math.random() * 10 + 1;
            } else if (randomShape.name === "Circle") {
                perimeter = 2 * Math.PI * shapeData.radius;
            } else if (randomShape.name === "Rectangle") {
                perimeter = 2 * (shapeData.length + shapeData.width);
            }
            // 添加其他形状的周长计算逻辑
            // ...

            question = `Given a ${randomShape.name} with `;
            for (const key in shapeData) {
                if (shapeData.hasOwnProperty(key)) {
                    question += `${key}: ${shapeData[key]} cm, `;
                }
            }
            question = question.slice(0, -2); // 去掉最后的逗号和空格
            question += `, calculate the perimeter.`;
            answer = `Perimeter: ${perimeter.toFixed(2)} cm`;
        }
    }

    return [question, answer];
};
