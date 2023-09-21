function Quadratic_Equation_Calculator() {
    // 提示用户输入一元二次方程的系数
    Operate.newStart("请输入一元二次方程的系数：");
  
    // 创建输入框用于输入系数
    Operate.newInput(["a", "b", "c"]).then((coefficients) => {
      // 解构系数
      const [a, b, c] = coefficients.map(Number);
  
      // 计算一元二次方程的解
      const discriminant = b * b - 4 * a * c;
      let solutions = [];
  
      if (discriminant > 0) {
        // 两个实根
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        solutions = [`实根1：x = ${x1.toFixed(2)}`, `实根2：x = ${x2.toFixed(2)}`];
      } else if (discriminant === 0) {
        // 一个实根
        const x = -b / (2 * a);
        solutions = [`实根：x = ${x.toFixed(2)}`];
      } else {
        // 无实根
        solutions = ["无实根"];
      }
  
      // 显示计算结果
      Operate.newSolution("方程解：");
      solutions.forEach((solution) => {
        Operate.newStep(solution);
      });
  
      // 绘制方程的图形
      Operate.newSolution("方程图形：");
      const equation = `y = ${a}x^2 + ${b}x + ${c}`;
      Operate.newGraph(equation);
    });
  }
  
  // 在页面加载时初始化
  window.addEventListener("load", function () {
    Quadratic_Equation_Calculator();
  });
  