// A147 · as const: a lista e a união saem do mesmo lugar

const DIAS = ['seg', 'ter', 'qua', 'qui', 'sex'] as const
type Dia = (typeof DIAS)[number] // 'seg' | 'ter' | 'qua' | 'qui' | 'sex'

const temAula: Dia[] = ['seg', 'qua', 'sex']

for (const dia of DIAS) {
  const marca = temAula.includes(dia) ? 'aula' : '-'
  console.log(`${dia}: ${marca}`)
}
