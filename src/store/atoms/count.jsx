import { atom, selector } from "recoil";

export const countAtom = atom({
    key : "countAtom",
    default : 0
})

// const todoAtom = atom({
//     key : "todoAtom",
//     default : []
// })

export const evenSelecter = selector({
    key : "evenSelecter",
    get : ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
})

//input boxes {titke, description} => atoms
//buttons
//todos => atom
//filte\

// const todoList = atom({
//     key : "todoList",
//     default : []
// })

// const todoFilter = atom({
//     key : "todoFilter",
//     default : "all"
// })

// const todoFilterSelector = selector({
//     key : "todoFilterSelector",
//     get : ({get}) => {
//         const filter = get(todoFilter);
//         return todos.filyer(x => x.title.includes(filter) || x.description.includes(filter));



//         const list = get(todoList);
//         if(filter === "all") return list;
//         if(filter === "completed") return list.filter((todo) => todo.completed);
//         if(filter === "uncompleted") return list.filter((todo) => !todo.completed);
//     }
// })

// const todoInput = atom({
//     key : "todoInput",
//     default : ""
// })