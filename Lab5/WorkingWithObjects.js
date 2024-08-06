const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };

  const module = {
    id: "CS101", name: "Web Development",
    description: "Introduction to Web Development", course: "CS",
  };

  export default function WorkingWithObjects(app) {

    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
      });

      app.get("/lab5/module", (req, res) => {
        res.json(module);
      });
    
      app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
      });

      app.get("/lab5/assignment/score/:score", (req, res) => {
        const { score } = req.params;
        assignment.score = parseInt(score, 10);
        res.json(assignment);
      });
    
      app.get("/lab5/assignment/completed/:completed", (req, res) => {
        const { completed } = req.params;
        assignment.completed = completed === 'true';
        res.json(assignment);
      });
    
      app.get("/lab5/module/description/:description", (req, res) => {
        const { description } = req.params;
        module.description = description;
        res.json(module);
      });
    };