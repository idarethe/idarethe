  //Sentences array
  const sentences = [
    'В своём стремлении улучшить пользовательский опыт мы упускаем, что непосредственные участники технического прогресса неоднозначны и будут своевременно верифицированы. Глубокий уровень погружения напрямую зависит от вывода текущих активов. Господа, повышение уровня гражданского сознания не даёт нам иного выбора, кроме определения первоочередных требований. Современные технологии достигли такого уровня, что глубокий уровень погружения способствует повышению качества существующих финансовых и административных условий.',
    'Также как сложившаяся структура организации создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы массового участия. А ещё действия представителей оппозиции своевременно верифицированы. Предварительные выводы неутешительны: выбранный нами инновационный путь способствует повышению качества своевременного выполнения сверхзадачи. Кстати, независимые государства неоднозначны и будут призваны к ответу.',
    'В своём стремлении улучшить пользовательский опыт мы упускаем, что явные признаки победы институционализации, вне зависимости от их уровня, должны быть преданы социально-демократической анафеме. Лишь явные признаки победы институционализации, инициированные исключительно синтетически, подвергнуты целой серии независимых исследований. В частности, постоянный количественный рост и сфера нашей активности однозначно фиксирует необходимость укрепления моральных ценностей.',
    'Идейные соображения высшего порядка, а также высокое качество позиционных исследований обеспечивает широкому кругу (специалистов) участие в формировании поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, действия представителей оппозиции описаны максимально подробно. В рамках спецификации современных стандартов, независимые государства ассоциативно распределены по отраслям.',
    'Для современного мира внедрение современных методик требует анализа первоочередных требований. Современные технологии достигли такого уровня, что семантический разбор внешних противодействий представляет собой интересный эксперимент проверки дальнейших направлений развития. В целом, конечно, высокотехнологичная концепция общественного уклада обеспечивает актуальность распределения внутренних резервов и ресурсов.'
  ];

  //Game
  const textType = document.querySelector('.typing-text p');
  const inputField = document.querySelector('.box .input-field');
  const errorsAmount = document.querySelector('.error span');
  const timer = document.querySelector('.time span');
  const cpmAmount = document.querySelector('.CPM span');
  const tryAgain = document.querySelector('.again');

  let characterIndex = 0;
  let errors = 0;
  let isTyping = 0;
  let time;
  let timeMax = 60;
  let timeLeft = timeMax;

  function randomSent() {
    let randomIndex = Math.floor(Math.random() * sentences.length);
    textType.innerHTML = "";
    sentences[randomIndex].split("").forEach(span=>{
        let spanTag = `<span>${span}</span>`;
        textType.innerHTML += spanTag;
    });

    document.addEventListener("keydown", () => inputField.focus());
    textType.addEventListener("click", () => inputField.focus());
  }

  function initType() {
    const character = textType.querySelectorAll("span");
    let typeChar = inputField.value.split("")[characterIndex];
  if(characterIndex < character.length - 1 && timeLeft > 0){
    if(!isTyping){
      time = setInterval(initTimer, 1000);
      isTyping = true;
    }
    
    if(typeChar == null){
        characterIndex--;
        if( character[characterIndex].classList.contains("wrong")){
          errors--;
        }
        character[characterIndex].classList.remove("correct",'wrong');
    }else{
        
        if(character[characterIndex].innerText === typeChar){
      character[characterIndex].classList.add("correct")
    }else{
      errors++;
      character[characterIndex].classList.add("wrong")
    }
    characterIndex++;
  }
  errorsAmount.innerText = errors;
  cpmAmount.innerText = characterIndex - errors;
} else {
  inputField.value = '';
  clearInterval(time);
}
}

function initTimer() {
    if(timeLeft > 0){
    timeLeft--;
    timer.innerText = timeLeft;
  }else{
    clearInterval(time);
  }
}

function restart(){
  randomSent();
  inputField.value = '';
  clearInterval(time);
  characterIndex = 0;
  errors = 0;
  isTyping = 0;
  timeLeft = timeMax;
  timer.innerText = timeLeft;
  errorsAmount.innerText = 0;
  cpmAmount.innerText = 0;
}


  randomSent();
  inputField.addEventListener("input", initType)
  tryAgain.addEventListener("click", restart)