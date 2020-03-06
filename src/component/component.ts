namespace App {
  //Redundant component
  export abstract class Component<
    T extends HTMLElement,
    U extends HTMLElement
  > {
    //this class is mandatory
    // the reason I used generic type is to give it flexibility in type definition because hostElement and element cannot guarantee their type as one type.
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(
      templateId: string,
      hostElementId: string,
      insertStart: boolean, // which determine where hostelement would be imposed according to whether it is a acttive bar or a finished bar.
      newElementId?: string
    ) {
      this.templateElement = document.getElementById(
        templateId
      )! as HTMLTemplateElement; //access to the list template
      this.hostElement = document.getElementById(hostElementId)! as T;

      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );

      this.element = importedNode.firstElementChild as U;

      if (newElementId) {
        this.element.id = newElementId;
      }
      this.attach(insertStart);
    }

    private attach(insertStart: boolean) {
      this.hostElement.insertAdjacentElement(
        insertStart ? "afterbegin" : "beforeend",
        this.element
      ); // if insertStart is true, return 'afterbegin'. if not, return beforeend
    }

    abstract configure(): void;
    abstract renderContent(): void;
  }
}
