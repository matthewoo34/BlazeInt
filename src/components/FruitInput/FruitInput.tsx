import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { fruits } from '../../App';
import { FruitInputStyles } from './FruitInputStyles';
export interface FruitInputProps {
    setAppleCount: Dispatch<SetStateAction<number>>;
    setGrapeCount: Dispatch<SetStateAction<number>>;
    setPeachCount: Dispatch<SetStateAction<number>>;
}


export const FruitInput = (props: FruitInputProps) => {

    const preventNonIntegerValue = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }

    const setFruitValue = (value: string, fruitName: string) => {
        switch (fruitName) {
            case 'Grape':
                props.setGrapeCount(parseInt(value));
                break;
            case 'Apple':
                props.setAppleCount(parseInt(value));
                break;
            case 'Peach':
                props.setPeachCount(parseInt(value));
                break;
            default:
                break;
        }
    }

    return (
        <div style={FruitInputStyles.container}>
            {
                fruits.map((fruit) => {
                    return (
                        <div style={FruitInputStyles.fruitColumnContainer}>
                            <div style={FruitInputStyles.title}>
                                {fruit.name}
                            </div>
                            <div style={FruitInputStyles.imgContainer}>
                                <img
                                    style={FruitInputStyles.img}
                                    src={fruit.imgSrc} />

                            </div>
                            <div>
                                ${fruit.price}
                            </div>

                            <div>
                                No. of purchase:
                            </div>
                            <input
                                defaultValue={0}
                                onKeyPress={preventNonIntegerValue}
                                onChange={(event) => setFruitValue(event.target.value, fruit.name)}
                            />
                        </div>
                    )
                })
            }
        </div >
    );
}

