//https://reffect.co.jp/react/react-test
import { render, screen } from '@testing-library/react';
import App from './App';

/**test関数はJestの関数でテストを実行する際に必ず利用する関数
* 【第一引数】テストがどのような内容かの簡単な説明
* 【第二引数】テストの具体的な内容
*/
test('renders learn react link', () => {
  render(<App />);
  // eslint-disable-next-line testing-library/no-debugging-utils
  //screen.debug(); //コンポーネントの<body>の中身

  //getByText:文字列検索（iは大文字小文字区別なし）
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();   //ドキュメント内に存在しているかチェック。

  //queryByText
  // const element = screen.queryByText(/earn react/i);
  // expect(element).toBeInTheDocument();
});

//describe(関数のブロック化)
describe('simple tests', () => {
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('two minus one is one', () => {
    expect(2 - 1).toBe(1);
  });
});
