
const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

function uncompletedNotes(notes) {

  let uncompletedTask = []
  for (let notesKey = 0; notesKey < notes.length; notesKey++){
    for (let todosKey = 0; todosKey < notes[notesKey].todos.length; todosKey++){
      if(notes[notesKey].todos[todosKey].done == false){
        uncompletedTask.push(notes[notesKey].todos[todosKey])
      }
    }

  }

  return uncompletedTask
}

let undone = uncompletedNotes(notes);

console.log(undone);
