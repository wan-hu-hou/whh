import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// 测试用例："renders without crashing"（渲染无崩溃）
it('renders without crashing', () => {
  const div = document.createElement('div'); // 创建一个虚拟DOM元素
  const root = createRoot(div);
  root.render(<App />);
  root.unmount();
});
// 测试套件："Addition"（用于归类相关测试用例）
describe('Addition', () => {
  // 测试用例："knows that 2 and 2 make 4"（验证2+2=4）
  it('knows that 2 and 2 make 4', () => {
    // 断言：期望2+2的结果等于4（toBe是Jest中的匹配器，用于严格相等比较）
    expect(2 + 2).toBe(4);
  });
});
