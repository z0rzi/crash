# Angular!

Every element is split into 3 parts, to follow the MVC pattern, although it seems like the model and the controller are mixed together..

The view is definitely separated though, splitted between the `css` and `html` files


## NG Cli

Angular has a pretty complete CLI that alllows you to create stuff.

Create new service
```bash
# g s for generate service
ng g s services/my-service
```

Create new component
```bash
# g c for generate component
ng g c components/my-comp
```

## HTML

The `HTML` gets parsed, which allows us to use a special syntax within it. We also have access to all class methods and parameters declared in the corresponding `ts` file

```html
<div [ngClass]="setClasses()">
    <input (change)="onToggle(todo)" type="checkbox" [checked]="todo.completed"/>
    {{ todo.title }}
    <button (click)="onDelete(todo)" type="del">x</button>
</div>
```

- `[ ... ]` is a directive that allows you to dynamically define element attributes. In this case the classes. It can also be used for custom elements. See the Typescript section bellow
- `( ... )` is an event. In this case, when the checkbox change, the function `onToggle` will get called.
- `{{ ... }}` is interpollation, you can put any javascript in there


## TypeScript

This looks like basic Typescript, but has some Angular specific vocabulary:

### Services

The services are the model part of the MVC, they provide the Data.

```typescript
@Injectable({ providedIn: 'root' })
```
The `@Injectable` decorator is usally applied to services, it means that this class can be used as a dependency

To use a service in a component:
```typescript
import MySerice from "wherever";

class MyComp {
    data: number=0;

    constructor(private myService: MySerice) {}

    ngOnInit() {
        this.data = this.myService.getNumber();
    }
}
```


### Components

The components are the controller part.

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```
The `@Component` decorator is used for all components. it defines an Angular component


To comunicate values from parent to child:
```typescript
In parent HTML:
    <comp [param]="5" />

In the ts of the child component:
import { Input } from '@angular/core';
class Comp {
    @Input() param: int;
}
```
`@Input` allows you to receive elements from the parent element. Like the `this.props` in React.


To comunicate values from child to parent:
```typescript
In the HTML calling the component:
    <comp [param]="5" />

In the ts of the child component:
import { EventEmitter, Output } from '@angular/core';
class Comp {
    @Output() doStuff: EventEmitter<number>;

    someFunc() {
        this.doStuff.emit(435);
    }
}
```

### Lifecycle

```typescript
class MyComp {
  ngOnInit(): void { }
  ngAfterContentInit(): void { }
  ngAfterViewInit(): void { }
  ngOnChanges(): void { }
  ngOnDestroy(): void { }
}
```

### Imports

Each time something new is added to angular, new imports have to be made in the main files. The "main files" are:
- /src/app/app.module  
    For everything related with external modules, e.g. `http`

- /src/app/app.component  
    For everything new internal component. This is automatically done when using the CLI
