import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export const LogoutSvg: React.FC = () => {
    return (
        <Svg
            width={16}
            height={16}
            fill="none"
        >
            <G>
                <Path
                    d="M11 4l4 4m0 0l-4 4m4-4H4.5M6.5 1H3a2 2 0 00-2 2v10a2 2 0 002 2h3.5"
                    stroke="#333"
                    strokeLinejoin="round"
                />
            </G>
        </Svg>
    );
}