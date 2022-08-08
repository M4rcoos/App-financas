import React from "react";
//importando todos os componentes de styles e atribuindo o valor ="C"
import * as C from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Header = () => {
    return (
        <C.Container>
            <C.Header>
                <C.title>
                    <FiChevronLeft color="#32CD32" />
                    M|<C.titleMidiun>finanças</C.titleMidiun>
                    <FiChevronRight color="#32CD32" />
                </C.title>
            </C.Header>
        </C.Container>
    );
};

export default Header;
