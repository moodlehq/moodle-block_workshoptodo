/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todolist
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import { Button, Checkbox } from '@moodlehq/design-system';

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export type Props = {
    todos: Todo[];
    rootid: string;
    onDelete: (id: number) => Promise<void>;
    onToggle: (todo: Todo, completed: boolean) => Promise<void>;
};

const TodoList = ({todos, rootid, onDelete, onToggle}: Props) => (
    <ul className="list-group mb-3 workshop-todo" aria-label="Todo list">
        {todos.map((todo) => (
            <li key={todo.id} className="list-group-item d-flex align-items-center justify-content-between">
                <Checkbox
                    className={`${todo.completed ? 'text-decoration-line-through' : ''}`}
                    id={`todo-${rootid}-${todo.id}`}
                    checked={todo.completed}
                    onChange={(event) => void onToggle(todo, event.target.checked)}
                    label={todo.text}
                />
                <Button label="Delete" variant="outline-danger" size="sm" onClick={() => void onDelete(todo.id)} />
            </li>
        ))}
    </ul>
);

export default TodoList;
