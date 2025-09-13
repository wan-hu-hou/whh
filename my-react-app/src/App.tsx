import React, { Component } from "react";

// 定义组件状态（State）的类型接口
interface State {
  count: number;
}

// 定义App组件（基于类的组件，区别于步骤23中的函数组件）
class App extends Component<{}, State> {
  // 构造函数（初始化props和state）
  constructor(props: {}) {
    super(props); // 调用父类Component的构造函数
    // 初始化状态：计数初始值为0
    this.state = {
      count: 0,
    };
  }

  // 生成计数增加函数的工厂函数（接收增加量，返回一个修改state的函数）
  makeIncrementer = (amount: number) => () =>
    this.setState((prevState: State) => ({
      // 使用函数式setState，确保获取最新的前一次状态（prevState）
      count: prevState.count + amount,
    }));

  // 绑定增加量为1的计数函数（点击按钮时调用）
  increment = this.makeIncrementer(1);

  // 渲染UI（React组件的核心方法，返回JSX）
  render() {
    return (
      <div>
        {/* 显示当前计数 */}
        <p>Count: {this.state.count}</p>
        {/* 点击按钮触发increment函数，修改count状态 */}
        <button className="increment" onClick={this.increment}>
          Increment count
        </button>
      </div>
    );
  }
}

export default App;