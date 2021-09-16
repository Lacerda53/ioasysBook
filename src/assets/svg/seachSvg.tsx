import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export const SearchSvg: React.FC = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
        >
            <G>
                <Path
                    d="M9.5 4a6.5 6.5 0 014.932 10.734l5.644 5.644-.707.707-5.644-5.645A6.5 6.5 0 119.5 4zm0 1a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
                    fill="#333"
                />
            </G>
        </Svg>
    );
}