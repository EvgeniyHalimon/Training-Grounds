import { Controller, Get } from '@nestjs/common';
import { Prototype as DemoPrototype, ComponentWithBackReference } from './job.model';

@Controller('prototype')
export class PrototypeController {
  @Get()
  demo() {
    const results: string[] = [];

    const demoPrototype = new DemoPrototype();
    demoPrototype.primitive = 245;
    demoPrototype.component = new Date();
    demoPrototype.circularReference = new ComponentWithBackReference(demoPrototype);

    const cloneOfDemoPrototype = demoPrototype.clone();

    if (demoPrototype.primitive === cloneOfDemoPrototype.primitive) {
      results.push('Primitive field values have been carried over to a clone. Yay!');
    } else {
      results.push('Primitive field values have not been copied. Booo!');
    }

    if (demoPrototype.component === cloneOfDemoPrototype.component) {
      results.push('Simple component has not been cloned. Booo!');
    } else {
      results.push('Simple component has been cloned. Yay!');
    }

    if (demoPrototype.circularReference === cloneOfDemoPrototype.circularReference) {
      results.push('Component with back reference has not been cloned. Booo!');
    } else {
      results.push('Component with back reference has been cloned. Yay!');
    }

    if (
      demoPrototype.circularReference.prototype === cloneOfDemoPrototype.circularReference.prototype
    ) {
      results.push('Component with back reference is linked to original object. Booo!');
    } else {
      results.push('Component with back reference is linked to the clone. Yay!');
    }
    
    results.forEach((r) => console.log(r));

    return { results };
  }
}
