///<reference path="models/project.ts"/>
///<reference path="models/drag-drop.ts" />
///<reference path="state/project-state.ts" />
///<reference path="util/validation.ts" />
///<reference path="decorator/autobind.ts" />
///<reference path="component/component.ts"/>
///<reference path="component/project-input.ts"/>
///<reference path="component/project-item.ts"/>
///<reference path="component/project-list.ts"/>
//encompass the whole codes inside namespace App{}
//and then, It doesn't matter any more if I instantiate classes by putting like "const ~~~ =" just "new ~~~" is enough
// to compile all reference files into one javascript file, go to tsconfig.json and activate "outfile", then set "amd" in lib
namespace App {
  //Project Type = to separate the values stored in both activate bar and finishied bar

  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
