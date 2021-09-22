import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const TabsConteiner = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
    
`;

export const TabListConteiner = styled(TabList)`
    list-style-type: none;
    display:flex;
    border-bottom: 1px solid #ccc;

`;

TabListConteiner.tabsRole = 'TabList';


export const TabConteiner = styled(Tab)`
    margin-bottom: -1px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &.is-selected{
        border-bottom: 1px solid white;
    }
`;

TabConteiner.tabsRole = 'Tab';

export const TabPanelConteiner = styled(TabPanel)`
  padding: 16px;
  border: 1px solid #ccc;
  border-top: 1px solid white;
  display: none;
  &.is-selected {
    display: block;
  }
`;

export const ListaConteiner = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
