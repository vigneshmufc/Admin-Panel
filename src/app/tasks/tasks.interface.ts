export interface ITask {
  id: number;
  project: string;
  name: string;
  comments: string;
}


export const TASK_DATA: ITask[] = [
  { id: 1, name: 'Task 1', project: "Project 1", comments: 'Comments 1' },
  { id: 2, name: 'Task 2', project: "Project 2", comments: 'Comments 4' },
  { id: 3, name: 'Task 3', project: "Project 3", comments: 'Comments 3' },
];
