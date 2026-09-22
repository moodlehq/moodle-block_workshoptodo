import{Button as s,Checkbox as a}from"@moodlehq/design-system";import{jsx as o,jsxs as m}from"react/jsx-runtime";/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todolist
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */const r=({todos:t,rootid:i,onDelete:l,onToggle:d})=>o("ul",{className:"list-group mb-3 workshop-todo","aria-label":"Todo list",children:t.map(e=>m("li",{className:"list-group-item d-flex align-items-center justify-content-between",children:[o(a,{className:`${e.completed?"text-decoration-line-through":""}`,id:`todo-${i}-${e.id}`,checked:e.completed,onChange:n=>void d(e,n.target.checked),label:e.text}),o(s,{label:"Delete",variant:"outline-danger",size:"sm",onClick:()=>void l(e.id)})]},e.id))});var p=r;export{p as default};
