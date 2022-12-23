import Layout from '../common/Layout';

function Community() {
	return (
		<Layout name={'Community'}>
			{/* 부모에서 자식으로 props로 넘길 속성과 값을 지정한 것
			name={'Community'} 자체가 props인 것 */}
			<p>Commuity Content</p>
		</Layout>
	);
}

export default Community;
