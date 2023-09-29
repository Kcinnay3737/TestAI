let project = new Project('TestAI');

project.setCmd();

project.addFile('Sources/**');
project.setDebugDir('Deployment');

project.flatten();

resolve(project);
