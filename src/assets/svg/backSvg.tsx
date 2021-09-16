import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export const BackSvg: React.FC = () => {
    return (
        <Svg
            width={17}
            height={17}
            fill="none"
        >
            <G>
                <Path
                    d="M16.045 9.115H2.207l5.93 6.462-.75.923-7.342-8 7.342-8 .75.923-5.93 6.462h13.838v1.23z"
                    fill="#333"
                />
            </G>
        </Svg>
    );
}