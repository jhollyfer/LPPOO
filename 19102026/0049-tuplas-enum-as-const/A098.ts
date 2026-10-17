// A098 · enum Turno

enum Turno {
  Manha = 'manhã',
  Tarde = 'tarde',
  Noite = 'noite',
}

function horario(t: Turno): string {
  switch (t) {
    case Turno.Manha:
      return '07:00'
    case Turno.Tarde:
      return '13:00'
    case Turno.Noite:
      return '19:00'
  }
}

const meuTurno: Turno = Turno.Noite
console.log(`Turno da ${meuTurno} começa às ${horario(meuTurno)}`)
