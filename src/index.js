const categoryIds = {
  first: 1,
  second: 2,
  third: 3,
  forth: 4,
  fifth: 5,
  sixth: 6,
  seventh: 7,
  eighth: 8,
  ninth: 9,
  tenth: 10,
  eleventh: 11,
  last: 12,
};

const psyQuestions = [
  {
    text: 'Я обуза для других',
    category: categoryIds.first,
  },
  {
    text: 'Мне не нравится мой пол',
    category: categoryIds.second,
  },
  {
    text: 'Другие принимают более удачные решения, чем я',
    category: categoryIds.third,
  },
  {
    text: 'Я забочусь о других даже за счет себя',
    category: categoryIds.forth,
  },
  {
    text: 'Другие более важны, чем я',
    category: categoryIds.fifth,
  },
  {
    text: 'Для меня любовь — «все или ничего»',
    category: categoryIds.sixth,
  },
  {
    text: 'Я не умею поступать правильно',
    category: categoryIds.seventh ,
  },
  {
    text: 'У меня бывают неожиданные приливы энергии',
    category: categoryIds.eighth,
  },
  {
    text: 'Если удача покинет меня, я могу сойти с ума',
    category: categoryIds.ninth,
  },
  {
    text: 'Я — аутсайдер',
    category: categoryIds.tenth,
  },
  {
    text: 'Я нездоров с рождения',
    category: categoryIds.eleventh,
  },
  {
    text: 'Когда я хочу сосредоточиться, меня что-то отвлекает или я полностью теряюсь',
    category: categoryIds.last,
  },
  {
    text: 'Я делаю что-то одно или более из: переедаю, перерабатываю, пью слишком много алкоголя, слишком многое прощаю и т.д.',
    category: categoryIds.first,
  },
  {
    text: 'Как жаль, что я не родилась мужчиной (для женщин)',
    category: categoryIds.second,
  },
  {
    text: 'Как жаль, что я не родился женщиной (для мужчин)',
    category: categoryIds.third,
  },
  {
    text: 'Мне нужно одобрение людей, имеющих авторитет',
    category: categoryIds.forth,
  },
  {
    text: 'Веселье для меня — потеря времени',
    category: categoryIds.fifth,
  },
  {
    text: 'Обычно я жду, пока другие люди первыми удовлетворят свои потребности',
    category: categoryIds.sixth,
  },
  {
    text: 'Я боюсь, что случится что-то плохое, если я установлю с кем-то слишком близкие отношения',
    category: categoryIds.seventh,
  },
  {
    text: 'Я почти достигаю своей цели, а затем что-то «случается»',
    category: categoryIds.eighth,
  },
  {
    text: 'Я боюсь, что мои чувства могут возобладать надо мной',
    category: categoryIds.ninth,
  },
  {
    text: 'Я часто думаю, что люди настроены против меня',
    category: categoryIds.tenth,
  },
  {
    text: 'Другие не принимают меня',
    category: categoryIds.eleventh,
  },
  {
    text: 'Я просто отдыхаю, когда болен',
    category: categoryIds.last,
  },
  {
    text: 'Мне трудно думать самостоятельно',
    category: categoryIds.first,
  },
  {
    text: 'Я не отдыхаю и не забочусь о себе',
    category: categoryIds.second,
  },
  {
    text: 'Я постоянно сравниваю себя с другими',
    category: categoryIds.third,
  },
  {
    text: 'Мне не нравится брать на себя ответственность',
    category: categoryIds.forth,
  },
  {
    text: 'Я предпочитаю взаимоотношения, в которых являюсь помощником',
    category: categoryIds.fifth,
  },
  {
    text: 'Я не люблю беспокоить других, даже если нуждаюсь в помощи',
    category: categoryIds.sixth,
  },
  {
    text: 'Люди, которых я люблю, обычно покидают меня',
    category: categoryIds.seventh,
  },
  {
    text: 'Я так стараюсь, но ничего не получается',
    category: categoryIds.eighth,
  },
  {
    text: 'Когда чувства выражаются, я испытываю смущение',
    category: categoryIds.ninth,
  },
  {
    text: 'Я думаю, что жизнь не имеет смысла',
    category: categoryIds.tenth,
  },
  {
    text: 'Я чувствую, что «не принадлежу» (не являюсь частью компании), даже когда нахожусь вместе со своими друзьями',
    category: categoryIds.eleventh,
  },
  {
    text: 'Я боюсь, что я заболею',
    category: categoryIds.last,
  },
  {
    text: 'Я неуспешен в учебе',
    category: categoryIds.first,
  },
  {
    text: 'Они пожалеют, когда я уйду',
    category: categoryIds.second,
  },
  {
    text: 'Я не чувствую, что могу свободно быть самим собой',
    category: categoryIds.third,
  },
  {
    text: 'Я считаю себя ребенком или младшим членом семьи или группы',
    category: categoryIds.forth,
  },
  {
    text: 'Если я получаю что-то, я обязан отдать что-то взамен',
    category: categoryIds.fifth,
  },
  {
    text: 'Мне нравится быть на заднем плане',
    category: categoryIds.sixth,
  },
  {
    text: 'Я боюсь, что я не понравился бы своим друзьям, если бы они узнали меня по-настоящему',
    category: categoryIds.seventh,
  },
  {
    text: 'Я никогда не завершаю начатое',
    category: categoryIds.eighth,
  },
  {
    text: 'Только интенсивные чувства реальны для меня',
    category: categoryIds.ninth,
  },
  {
    text: 'Я совершаю странные действия и затем испытываю смущение',
    category: categoryIds.tenth,
  },
  {
    text: 'Я предпочитаю наблюдать за группой, а не вовлекаться в ее деятельность',
    category: categoryIds.eleventh,
  },
  {
    text: 'Люди уделяют мне больше внимания, когда я болен, а не когда я здоров',
    category: categoryIds.last,
  },
  {
    text: 'Мне трудно сказать то, что я знаю',
    category: categoryIds.first,
  },
  {
    text: 'В течение моей жизни со мной случались опасные ситуации и несчастные случаи',
    category: categoryIds.second,
  },
  {
    text: 'Я хотел бы быть другим человеком',
    category: categoryIds.third,
  },
  {
    text: 'Другие должны узнать, что мне нужно, а затем дать мне это',
    category: categoryIds.forth,
  },
  {
    text: 'Мне не следует иметь много потребностей',
    category: categoryIds.fifth,
  },
  {
    text: 'Других я люблю больше, чем себя',
    category: categoryIds.sixth,
  },
  {
    text: 'Мне не легко выражать привязанность',
    category: categoryIds.seventh,
  },
  {
    text: 'Я не думаю, что добился успеха, даже когда так думают другие',
    category: categoryIds.eighth,
  },
  {
    text: 'Я борюсь со своими чувствами страха, гнева и печали',
    category: categoryIds.ninth,
  },
  {
    text: 'Я быстро меняю свое мнение о том, что мне нравится или не нравится',
    category: categoryIds.tenth,
  },
  {
    text: 'Другим было бы легче, если бы я жил один',
    category: categoryIds.eleventh,
  },
  {
    text: 'Я получаю удовольствие от бесед о недугах и болезнях',
    category: categoryIds.last,
  },
];

const results = {
  [categoryIds.first]: 0,
  [categoryIds.second]: 0,
  [categoryIds.third]: 0,
  [categoryIds.forth]: 0,
  [categoryIds.fifth]: 0,
  [categoryIds.sixth]: 0,
  [categoryIds.seventh]: 0,
  [categoryIds.eighth]: 0,
  [categoryIds.ninth]: 0,
  [categoryIds.tenth]: 0,
  [categoryIds.eleventh]: 0,
  [categoryIds.last]: 0,
};

outer: for (let i = 0; i < psyQuestions.length; i += 1) {
  let newQuestion;
  do {
    const userInput = prompt(psyQuestions[i].text);

    if (userInput === null || userInput === '') {
      alert('You cancelled operation');
      break outer;
    }

    newQuestion = +userInput;

    if (isFinite(newQuestion) && newQuestion >= 0) {
      results[psyQuestions[i].category] += newQuestion;
      break;
    }
  } while (true);
}

let output = 'Problem detected in categories:\n';

for (const category in results) {
  if (results[category] >= 30) {
    output = `${output} - Category ${category}: ${results[category]}`;
  }
}

alert(output);
