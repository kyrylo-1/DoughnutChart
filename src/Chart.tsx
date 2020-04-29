import React from 'react';
import { VictoryPie, VictoryLabel, VictoryLegend } from 'victory';

const data = [
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 40 },
    { x: 'Birds', y: 55 }
];

const colors = ['#004EA4', '#1F78B4', '#A6CEE3'];

const size = 120;

export const Chart = () => {
    return (
        <div className='Box'>
            <div className='center'>
                <svg
                    width={size}
                    height={size}
                    style={{ border: '1px solid red', position: 'absolute', transform: 'translate(-50%, 10%)' }}
                >
                    <VictoryPie
                        standalone={false}
                        width={size * 1}
                        height={size * 1}
                        innerRadius={25}
                        colorScale={colors}
                        data={data}
                        style={{ labels: { fontSize: 12, fill: 'blue' } }}
                        // padding={{}}
                        // labelRadius={50}
                        // labels={() => null}
                    />
                    {/* <VictoryLabel textAnchor='middle' x={size / 2} y={size / 2} text='Portfolio' style={{ fontSize: '8' }} /> */}
                </svg>
            </div>
        </div>
    );
};
