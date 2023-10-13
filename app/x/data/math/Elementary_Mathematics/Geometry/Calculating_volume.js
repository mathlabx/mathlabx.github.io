/*
计算体积

输入：(立方体，球体，圆柱体，圆锥体，金字塔，圆环)
输出：[题干，答案]
*/

$X.math.Elementary_Mathematics.Geometry.volume = function (cube, sphere, cylinder, cone, pyramid, torus) {
    // 创建一个数组，包含可选的立体形状
    var shapes = [];

    if (cube) shapes.push({ name: "Cube", hasVolume: true });
    //if (cuboid) shapes.push({ name: "Cuboid", hasVolume: true });
    if (sphere) shapes.push({ name: "Sphere", hasVolume: true });
    if (hemisphere) shapes.push({ name: "Hemisphere", hasVolume: true });
    if (cylinder) shapes.push({ name: "Cylinder", hasVolume: true });
    if (cone) shapes.push({ name: "Cone", hasVolume: true });
    if (squarepyramid) shapes.push({ name: "Squarepyramid", hasVolume: true });
    if (rectangularpyramid) shapes.push({ name: "Rectangularpyramid", hasVolume: true });
    if (triangularpyramid) shapes.push({ name: "Triangularpyramid", hasVolume: true });
    if (ellipsoid) shapes.push({ name: "Ellipsoid", hasVolume: true });
    if (torus) shapes.push({ name: "Torus", hasVolume: true });

    // 生成不重复的立体形状列表
    var uniqueShapes = [];
    while (uniqueShapes.length < shapes.length) {
        var randomIndex = Math.floor(Math.random() * shapes.length);
        if (uniqueShapes.indexOf(shapes[randomIndex]) === -1) {
            uniqueShapes.push(shapes[randomIndex]);
        }
    }

    // 随机选择一个可选的立体形状
    var randomShape = uniqueShapes.pop();

    // 定义立体形状的数据
    var shapeData = null;

    // 为选定的立体形状提供具体的数据
    if (randomShape.name === "Cube") {
        // 立方体的数据设置示例
        var sideLength = Math.random() * 10 + 1;
        shapeData = { sideLength: sideLength };
    }
    // 添加其他立体形状的数据设置
    else if (randomShape.name === "Sphere") {
        // 球体的数据设置示例
        var radius = Math.random() * 10 + 1;
        shapeData = { radius: radius };
    } else if (randomShape.name === "Cylinder") {
        // 圆柱体的数据设置示例
        var radius = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { radius: radius, height: height };
    } else if (randomShape.name === "Cone") {
        // 圆锥体的数据设置示例
        var radius = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { radius: radius, height: height };
    } else if (randomShape.name === "Triangularpyramid") {
        // 金字塔的数据设置示例
        var baseLength = Math.random() * 10 + 1;
        var baseWidth = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { baseLength: baseLength, baseWidth: baseWidth, height: height };
    } else if (randomShape.name === "Rectangularpyramid") {
        // 金字塔的数据设置示例
        var baseLength = Math.random() * 10 + 1;
        var baseWidth = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { baseLength: baseLength, baseWidth: baseWidth, height: height };
    } else if (randomShape.name === "Squarepyramid") {
        // 金字塔的数据设置示例
        var baseSide = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { baseSide: baseSide, height: height };
    } else if (randomShape.name === "Ellipsoid") {
        // 金字塔的数据设置示例
        var length = Math.random() * 10 + 1;
        var width = Math.random() * 10 + 1;
        var height = Math.random() * 10 + 1;
        shapeData = { length: length, width: width, height: height };
    } else if (randomShape.name === "Torus") {
        // 圆环的数据设置示例
        var majorRadius = Math.random() * 10 + 1;
        var minorRadius = Math.random() * 5 + 1;
        shapeData = { majorRadius: majorRadius, minorRadius: minorRadius };
    }
    // 添加其他立体形状的数据设置
    // ...

    // 创建题干，包括数据说明
    var dataDescription = Object.entries(shapeData).map(([key, value]) => `${key}: ${value} cm`).join(', ');
    var question = `Calculate the volume of a ${randomShape.name} with data: ${dataDescription}.`;

    // 计算体积的具体逻辑
    var answer = "";

    if (randomShape.hasVolume) {
        // 添加体积计算逻辑
        if (randomShape.name === "Cube") {
            // 立方体的体积计算逻辑示例
            var volume = shapeData.sideLength * shapeData.sideLength * shapeData.sideLength;
            answer = `Given a cube with side length ${shapeData.sideLength} cm, calculate the volume. Volume: ${volume.toFixed(2)} cm^3`;
        }else if (randomShape.name === "Cuboid") {
            // 立方体的体积计算逻辑示例
            var volume = shapeData.baseLength * shapeData.baseWidth * shapeData.height;
            answer = `Given a cuboid with base length ${shapeData.baseLength} cm, base width ${shapeData.baseWidth} cm and height ${shapeData.height} cm, calculate the volume. Volume: ${volume.toFixed(2)} cm^3`;
        }else if (randomShape.name === "Sphere") {
            // 立方体的体积计算逻辑示例
            var volume = (4 * Math.Pi * shapeData.radius * shapeData.radius)/3;
            answer = `Given a sphere with radius ${shapeData.radius} cm, calculate the volume. Volume: ${volume.toFixed(2)} cm^3`;
        }else if (randomShape.name === "Hemisphere") {
            // 立方体的体积计算逻辑示例
            var volume = (4 * Math.Pi * shapeData.radius * shapeData.radius)/6;
            answer = `Given a hemisphere with radius ${shapeData.radius} cm, calculate the volume. Volume: ${volume.toFixed(2)} cm^3`;
        }else if (randomShape.name === "Cylinder") {
            // 立方体的体积计算逻辑示例
            var volume = Math.Pi * shapeData.radius * shapeData.radius * shapeData.height;
            answer = `Given a cylinder with base radius ${shapeData.raidus} cm and height ${shapeData.height} cm, calculate the volume. Volume: ${volume.toFixed(2)} cm^3`;
        }else if (randomShape.name === "Cone") {
            // 立方体的体积计算逻辑示例
            var volume = (Math.Pi * shapeData.radius * shapeData.radius * shapeData.height)/3;
            answer = `Given a cone with base radius ${shapeData.raidus} cm and height ${shapeData.height} cm, calculate the volume. Volume: ${volume.toFixed(2)} cm^3`;
        }
        // 添加其他立体形状的体积计算逻辑
        // ...
    }

    return [question, answer];
}
