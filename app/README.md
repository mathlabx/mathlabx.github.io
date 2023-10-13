# 使用介绍

### 欢迎回来Devin，这里是使用文档。

## 文件建构

```
app/
├── index.js         #在此配置索引
├── 应用1/           #示例应用
│   ├── script.js     #每一个应用的所有逻辑，函数。。。
│   └── index.html    #应用html，直接复制就可以，每一个应用都一样
├── 应用2/           #示例应用
│   ├── script.js     #每一个应用的所有逻辑，函数。。。
│   └── index.html    #应用html，直接复制就可以，每一个应用都一样
├── 应用3/           #示例应用
│   ├── script.js     #每一个应用的所有逻辑，函数。。。
│   └── index.html    #应用html，直接复制就可以，每一个应用都一样
├── 应用n../           #示例应用
│   ├── script.js     #每一个应用的所有逻辑，函数。。。
│   └── index.html    #应用html，直接复制就可以，每一个应用都一样
```

## 配置应用索引

到本仓库的的根目录的`index.js`里面配置。

```javascript
APP.apps = [{
    title: "APP1", /*应用名称*/
    description: "LALALALALALALALALALALALALALALALALALALA", /*应用介绍*/
    img: "https://app.mathscichem.com/static/img/app/x.png", /*应用图标图片url*/
    full_line: true, /*应用是否占整行（F）*/
    hot: true, /*应用热门标志（F）*/
    url: "https://app.mathscichem.com/app/(该应用的文件夹名称)/" /*应用URL*/
}, {
    title: "APP2",
    description: "LALALALALALALALALALALALALALALALALALALA",
    img: "https://app.mathscichem.com/static/img/app/x.png",
    full_line: true,
    hot: true,
    url: "https://app.mathscichem.com/app/(该应用的文件夹名称)/"
}, {
    title: "APP3",
    description: "LALALALALALALALALALALALALALALALALALALA",
    img: "https://app.mathscichem.com/static/img/app/x.png",
    full_line: true,
    hot: true,
    url: "https://app.mathscichem.com/app/(该应用的文件夹名称)/"
}, {
    title: "APPn...",
    description: "LALALALALALALALALALALALALALALALALALALA",
    img: "https://app.mathscichem.com/static/img/app/x.png",
    full_line: true,
    hot: true,
    url: "https://app.mathscichem.com/app/(该应用的文件夹名称)/"
}];
```

## 创建新应用/使用 Operate 函数

- newInput(words)：这个函数创建了一个包含输入框、标签和提交按钮的区域，用于用户输入一元二次方程的系数。参数 words 是一个数组，包含了输入框旁边的标签文字（例如 "a"、"b"、"c"）。

- newStart(start)：该函数用于创建一个新的区域，用于显示一些提示或起始信息。参数 start 是要显示的文本内容。

- newStep(step)：这个函数用于显示计算过程中的步骤或数学表达式的结果。它使用 KaTeX 渲染数学公式以确保美观的数学显示。参数 step 是要显示的数学表达式。

- newSolution(solution)：类似于 newStep，这个函数用于显示数学解或公式的结果，也使用 KaTeX 渲染。参数 solution 是要显示的数学公式或解。

- newGraph(f)：该函数创建一个区域，用于绘制一元二次方程的图形。它使用了一个名为 initializeDesmos 的辅助函数，以及一个参数 f，它表示要绘制的方程。

- newRestart()：这个函数创建一个 "重置" 按钮，允许用户清除之前的计算结果并重新开始计算。

## 示例应用

__请前往 `./Quadratic_Equation_Calculator/script.js` 里面查看示例应用__

## 需要学习

需要学习Latex，网上就可以搜到教程，然后Quadratic_Equation_Calculator里面我就用了Latex可以参考。可汗数学(Khan Academy)就是用的Latex。
