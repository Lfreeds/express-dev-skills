const skills = [
  {
    id: 1,
    skill: "HTML",
    title: "Hero",
    detail: "headers",
    rhyme: "headaches",
  },
  {
    id: 2,
    skill: "CSS",
    title: "Styling Sensei",
    detail: "pseudo selectors",
    rhyme: "neck protectors",
  },
  {
    id: 3,
    skill: "Javascript",
    title: "Genie",
    detail: "callback functions",
    rhyme: "injunctions",
  },
  {
    id: 4,
    skill: "Node.js",
    title: "Ninja",
    detail: "routes",
    rhyme: "doubts",
  },
  {
    id: 5,
    skill: "MongoDB",
    title: "Master",
    detail: "maxConns",
    rhyme: "stacks withdrawn",
  },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}

function create(skill) {
  skill.id = Math.floor(Math.random() * 1000000);
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}
