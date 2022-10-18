import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Calculation } from '../components/Calculation/Calculation';

test('Test buying 1 grapes, 0 apples, and 1 peaches', async () => {
    // ARRANGE
    render(<Calculation fruitTotal={[['grapes', 1], ['apples', 0], ['peaches', 1]]} />)

    // ASSERT
    expect(screen.getByRole('totalDisplay')).toHaveTextContent('12');
})

test('Test buying 1 grapes, 1 apples, and 1 peaches', async () => {
    // ARRANGE
    render(<Calculation fruitTotal={[['peaches', 1], ['grapes', 1], ['apples', 1]]} />)

    // ASSERT
    expect(screen.getByRole('totalDisplay')).toHaveTextContent('15');
})


test('Test buying 2 grapes, 2 apples, and 1 peaches', async () => {
    // ARRANGE
    render(<Calculation fruitTotal={[['peaches', 1], ['grapes', 2], ['apples', 2]]} />)

    // ASSERT
    expect(screen.getByRole('totalDisplay')).toHaveTextContent('16.8');
})

test('Test buying 3 grapes, 5 apples, and 2 peaches', async () => {
    // ARRANGE
    render(<Calculation fruitTotal={[['grapes', 3], ['apples', 5], ['peaches', 2]]} />)

    // ASSERT
    expect(screen.getByRole('totalDisplay')).toHaveTextContent('36');
})

test('Test buying 7 grapes, 7 apples, and 7 peaches', async () => {
    // ARRANGE
    render(<Calculation fruitTotal={[['peaches', 7], ['grapes', 7], ['apples', 7]]} />)

    // ASSERT
    expect(screen.getByRole('totalDisplay')).toHaveTextContent('85.8');
})