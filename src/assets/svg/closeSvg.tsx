import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export const ClosetSvg: React.FC = () => {
    return (
        <Svg
            width={16}
            height={16}
            fill="none"
        >
            <G>
                <Path
                    d="M12.035 4.507l.036-.036-.036-.035-.471-.471-.035-.036-.036.036L8 7.458 4.507 3.965l-.036-.036-.035.036-.471.471-.036.035.036.036L7.458 8l-3.493 3.493-.036.036.036.035.471.471.035.036.036-.036L8 8.542l3.493 3.493.036.036.035-.036.471-.471.036-.035-.036-.036L8.542 8l3.493-3.493z"
                    fill="#333"
                    stroke="#333"
                    strokeWidth={0.1}
                />
            </G>
        </Svg>
    );
}