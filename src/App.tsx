import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Calculation } from './components/Calculation/Calculation';
import { FruitInput } from './components/FruitInput/FruitInput';

export type FruitListItem = {
	name: 'Grape' | 'Apple' | 'Peach';
	imgSrc: string;
	price: number;
}

export const fruits: FruitListItem[] = [
	{
		name: 'Grape',
		imgSrc: 'https://mpng.subpng.com/20190409/yqc/kisspng-grape-berries-wine-food-fruit-5cac3c41390387.9656089915547914892335.jpg',
		price: 5,
	},
	{
		name: 'Apple',
		imgSrc: 'https://mpng.subpng.com/20190115/rxy/kisspng-clip-art-drawing-portable-network-graphics-image-c-other-club-penguin-cutouts-5c3d8227646a92.3012681215475348874113.jpg',
		price: 3,
	},
	{
		name: 'Peach',
		imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiEbuaMFVkQgUjG8jy7Wmap6g-Dsn4QxiyA&usqp=CAU',
		price: 7,
	},
]

function App() {
	const [appleCount, setAppleCount] = useState(0);
	const [grapeCount, setGrapeCount] = useState(0);
	const [peachCount, setPeachCount] = useState(0);

	return (
		<div className="App">
			<h1>
				Blaze Market
			</h1>
			<FruitInput
				setAppleCount={setAppleCount}
				setGrapeCount={setGrapeCount}
				setPeachCount={setPeachCount} />
			<Calculation
				fruitTotal={[['peaches', peachCount], ['grapes', grapeCount], ['apples', appleCount]]} />
		</div>
	);
}

export default App;
