import Counter from '@/pages/Counter'
import Qiita from '@/pages/Qiita'
import Graph from '@/pages/Graph'

export const routes = [
  { path: '/counter', component: Counter },
  { path: '/qiita', component: Qiita },
  { path: '/graph', component: Graph },
]
