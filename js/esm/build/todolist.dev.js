var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsxDEV } from "react/jsx-dev-runtime";
/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todolist
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
import { Button, Checkbox } from "@moodlehq/design-system";
const TodoList = /* @__PURE__ */ __name(({ todos, rootid, onDelete, onToggle }) => /* @__PURE__ */ jsxDEV("ul", { className: "list-group mb-3 workshop-todo", "aria-label": "Todo list", children: todos.map((todo) => /* @__PURE__ */ jsxDEV("li", { className: "list-group-item d-flex align-items-center justify-content-between", children: [
  /* @__PURE__ */ jsxDEV(
    Checkbox,
    {
      className: `${todo.completed ? "text-decoration-line-through" : ""}`,
      id: `todo-${rootid}-${todo.id}`,
      checked: todo.completed,
      onChange: (event) => void onToggle(todo, event.target.checked),
      label: todo.text
    },
    void 0,
    false,
    {
      fileName: "public/blocks/workshoptodo/js/esm/src/todolist.tsx",
      lineNumber: 28,
      columnNumber: 17
    }
  ),
  /* @__PURE__ */ jsxDEV(Button, { label: "Delete", variant: "outline-danger", size: "sm", onClick: () => void onDelete(todo.id) }, void 0, false, {
    fileName: "public/blocks/workshoptodo/js/esm/src/todolist.tsx",
    lineNumber: 35,
    columnNumber: 17
  })
] }, todo.id, true, {
  fileName: "public/blocks/workshoptodo/js/esm/src/todolist.tsx",
  lineNumber: 27,
  columnNumber: 13
})) }, void 0, false, {
  fileName: "public/blocks/workshoptodo/js/esm/src/todolist.tsx",
  lineNumber: 25,
  columnNumber: 5
}), "TodoList");
var todolist_default = TodoList;
export {
  todolist_default as default
};
//# sourceMappingURL=todolist.dev.js.map
