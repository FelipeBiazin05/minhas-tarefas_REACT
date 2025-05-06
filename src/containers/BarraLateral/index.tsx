import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Procurar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluidas" contador={3} />
        <FiltroCard legenda="urgentes" contador={2} />
        <FiltroCard legenda="importantes" contador={7} />
        <FiltroCard legenda="normal" contador={4} />
        <FiltroCard legenda="todas" contador={17} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
