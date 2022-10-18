import React, { useEffect, useMemo, useState } from 'react';
import { FruitListItem, fruits } from '../../App';

export interface CalculationProps {
    fruitTotal: any[];
}


export const Calculation = (props: CalculationProps) => {
    const grapePrice = fruits[0].price;
    const applePrice = fruits[1].price;
    const peachPrice = fruits[2].price;

    const [grapeCount, setGrapeCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [peachCount, setPeachCount] = useState(0);

    const appleDiscount = .8;
    const numOfBuyToGetOneFree = 1;

    useEffect(() => {
        const fruitMap = new Map();
        props.fruitTotal.forEach((item, index) => {
            fruitMap.set(item[0], item[1]);
        });
        setGrapeCount(fruitMap.get('grapes'));
        setAppleCount(fruitMap.get('apples'));
        setPeachCount(fruitMap.get('peaches'));
    }, [props.fruitTotal])

    const calTotal = (): number => {
        const total = calAppleTotal() + calGrapeTotal() + calPeachTotal();
        return total; //Price should return to 
    };

    const calAppleTotal = (): number => {
        const total = appleCount * applePrice;

        //have Discount
        if (appleCount > 1) {// 2 or above
            return total * appleDiscount;
        }
        return total; //withoutDiscount
    }

    const calGrapeTotal = (): number => {
        const totalNumOfItemReceiving = 1 + numOfBuyToGetOneFree;
        if (grapeCount > 1) {
            return (grapeCount % (totalNumOfItemReceiving) + grapeCount) / (totalNumOfItemReceiving) * grapePrice; //adjust the count to always be divided by a dividable of totalNumOfItemReceiving 
        }
        return grapeCount * grapePrice;
    }

    const calPeachTotal = () => {
        return peachCount * peachPrice; //direct calculation
    }

    return (
        <div>
            SubTotal:
            <ul>
                <li>Apple price: {calAppleTotal()}</li>
                <li>Grape price: {calGrapeTotal()}</li>
                <li>Peach price: {calPeachTotal()}</li>
            </ul>
            <div role='totalDisplay'>Total price: {calTotal()}</div>
        </div >
    );
}

