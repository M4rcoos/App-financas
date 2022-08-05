import React from 'react'
//importando todos os componentes de styles e atribuindo o valor ="C"
import * as C from "./styles"

export const Header = () => {
  return (
    <C.Container>
<C.Header>
        <C.title>Controle Financeiro</C.title>
    </C.Header>
    </C.Container>
    
  )
}

export default Header