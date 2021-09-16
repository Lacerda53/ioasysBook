import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding-top: ${Platform.OS === 'ios' ? '40px' : '0px'};
`;

export const Header = styled.View`
    padding: 30px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SearchContainer = styled.View`
    width: 90%;
    padding: 0 20px 30px 20px;
    flex-direction: row;
    align-items: center;
`;

export const ButtonFilter = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    justify-content: center;
    margin-left: 10px;
    align-items: center;
`;