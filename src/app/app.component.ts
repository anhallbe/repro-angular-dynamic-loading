import { Compiler, Component, Injector, ViewContainerRef } from '@angular/core';

declare const SystemJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private compiler: Compiler, private vcr: ViewContainerRef) { }

  async loadTheExternalComponent() {
    const { TheModule, TheComponent } = await this.importTheModuleUsingSystemJS();
    console.log("TheModule:", TheModule);
    console.log("TheComponent:", TheComponent);
    const mFactory = await this.compiler.compileModuleAsync(TheModule);
    const moduleRef = mFactory.create(this.vcr.injector);
    const cFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(TheComponent);
    const injector = Injector.create({ providers: [], parent: moduleRef.injector });
    this.vcr.createComponent(cFactory, undefined, injector);
  }

  private async importTheModuleUsingSystemJS(): Promise<any> {
    const mod = await SystemJS.import("assets/the-module.js");
    if (mod.TheModule) {
      return mod;
    } else {
      const mod2 = await SystemJS.import("the-module");
      if (mod2.TheModule) {
        return mod2;
      } else {
        throw new Error("Failed to import the module!");
      }
    }
  }
}
