import styled from 'styled-components/native';
import { SearchSvg } from '../../assets/svg/seachSvg';
import { theme } from '../../styles/theme';

export const Container = styled.View`
    width: 100%;
    height: 48px;
    border: 2px solid rgba(51, 51, 51, 0.2);
    border-radius: 3px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const ContainerInput = styled.View`
    width: 85%;
    height: 100%;
`;

export const InputText = styled.TextInput`
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 0 20px;
    color: ${theme.colors.secondary};
`;

export const SearchIcon = styled(SearchSvg)`
`;

export const ButtonSearch = styled.TouchableOpacity`
    margin-right: 15px;
    justify-content: center;
    align-items: center;
`;