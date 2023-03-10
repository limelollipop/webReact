import { useEffect, useRef } from 'react';

function Layout(props) {
	// props는 부모로부터 전달받은 인수값

	const frame = useRef(null);
	/* useRef 사용법
	1. 리액트로부터 useRef를 import한다
	2. 변수에 useRef의 초기값을 설정해 담는다
	3. 우리가 참조하고자 하는곳에 ref={변수}를 쓴다
	useRef는 current라는 공간 안에 해당값을 저장한다
	*/
	// console.log(frame);

	useEffect(() => {
		frame.current.classList.add('on');
		// useRef는 current라는 공간 안에 해당 값을 저장하므로 frame에만 접근하는 것이 아닌 current 안까지 가야 정확하게 대상을 참조할 수 있다
	}, {});

	return (
		<section className={`content ${props.name}`} ref={frame}>
			{/* class 이름이 2가지, 하나는 content공동 클래스,
      다른 하나는 부모 props로 받은 값을 전달해서 생성되는
      서브클래스인데 공통클래스는 문자열, 서브클래스는 매개변수이기때문에 변수처리 ${}로 변수임을 알려야한다
      그리고 변수와 문자열을 혼합해서 작성하기위해 백틱으로 감쌈 */}
			<figure></figure>
			<div className='inner'>
				<h1>{props.name}</h1>
				{/* props에서 넘기는 값을 그대로 사용해도 되는 값이기때문에
        클래스에도 이곳에도 적용
        문자열과 혼용하지않아 ${}없이 매개변수로 인식가능 */}
				{props.children}
				{/* 부모컴포넌트에서 <Layout></Layout>사이의 모든 내용들을 한번에 children으로 받아서 적용하는 것 */}
			</div>
		</section>
	);
}

export default Layout;

/*
먼저 리액트가 render할 때 코드가 어떻게 컴파일하는지 알면 이해할 수 있다

React.createElement(Component,props,...children)를 이용해서 반환한다

props는 객체형태로 children까지 전달한다
여는태그와 닫는태그가 있는 JSX 표현에서 두 태그 사이의 내용은 props.children이라는 특수한 prop으로 넘겨집니다.(출처 리액트공식노트)

어떤 컴포넌트들은 어떤 자식 element가 들어올지 예상이 안되는 경우가 비일비재하다
이런 경우, 같은 레아이웃 안에 다른 내용을 보여줘야 할 경우
(gallery의 경우 사진이, community의 경우 table 태그 등)
children을 사용하면 효율적으로 Layout.js라는 컴포넌트를 재사용할 수 있다 → props.childre을 사용하는 이점
*/
