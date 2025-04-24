import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Procurar" />
      <S.Filtros>
        <FiltroCard legenda="Pendentes" contador={1} />
        <FiltroCard legenda="Concluidas" contador={3} />
        <FiltroCard legenda="Urgentes" contador={2} />
        <FiltroCard legenda="Importantes" contador={7} />
        <FiltroCard legenda="Normal" contador={4} />
        <FiltroCard legenda="Todas" contador={17} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
