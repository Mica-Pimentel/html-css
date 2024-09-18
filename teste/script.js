function calculateResult() {
  let dev = 0,
    data = 0,
    sec = 0

  // Obter valores das respostas
  const q1 = document.querySelector('input[name="q1"]:checked')
  const q2 = document.querySelector('input[name="q2"]:checked')
  const q3 = document.querySelector('input[name="q3"]:checked')
  const q4 = document.querySelector('input[name="q4"]:checked')
  const q5 = document.querySelector('input[name="q5"]:checked')
  const q6 = document.querySelector('input[name="q6"]:checked')
  const q7 = document.querySelector('input[name="q7"]:checked')
  const q8 = document.querySelector('input[name="q8"]:checked')
  const q9 = document.querySelector('input[name="q9"]:checked')
  const q10 = document.querySelector('input[name="q10"}:checked')

  if (q1) {
    if (q1.value === 'dev') dev++
    else if (q1.value === 'data') data++
    else if (q1.value === 'sec') sec++
  }

  if (q2) {
    if (q2.value === 'dev') dev++
    else if (q2.value === 'data') data++
    else if (q2.value === 'sec') sec++
  }

  if (q3) {
    if (q3.value === 'dev') dev++
    else if (q3.value === 'data') data++
    else if (q3.value === 'sec') sec++
  }

  if (q4) {
    if (q4.value === ' dev') dev++
    else if (q4.value == 'data') data++
    else if (q4.value == 'sec') sec++
  }

  if (q5) {
    if (q5.value == ' dev') dev++
    else if (q5.value == 'data') data++
    else if (q5.value == ' sec') sec++
  }

  if (q6) {
    if (q6.value == 'dev') dev++
    else if (q6.value == 'data') data++
    else if (q6.value == 'sec') sec++
  }

  if (q7) {
    if (q7.value == 'dev') dev++
    else if (q7.value == 'data') data++
    else if (q7.value == 'sec') sec++
  }

  if (q8) {
    if (q8.value == 'dev') dev++
    else if (q8.value == 'data') data++
    else if (q8.value == 'sec') sec++
  }

  if (q9) {
    if (q9.value == 'dev') dev++
    else if (q9.value == 'data') data++
    else if (q9.value == 'sec') sec++
  }

  if (q10) {
    if (q10.value == 'dev') dev++
    else if (q10.value == 'data') data++
    else if (q10.value == 'sec') sec++
  }

  // Exibir resultado com base nas respostas
  let resultText = ''
  if (dev > data && dev > sec) {
    resultText = 'Você se encaixa mais na área de Desenvolvimento de Software!'
  } else if (data > dev && data > sec) {
    resultText = 'Você se encaixa mais na área de Análise de Dados!'
  } else if (sec > dev && sec > data) {
    resultText = 'Você se encaixa mais na área de Segurança da Informação!'
  } else {
    resultText =
      'Você tem interesses variados! Explore as diferentes áreas de TI.'
  }

  // Exibir resultado no HTML
  document.getElementById('result').textContent = resultText
}
