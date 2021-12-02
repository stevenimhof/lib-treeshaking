import { NgModule } from '@angular/core';
import { TestAComponent } from './test-a/test-a.component';
import { TestBComponent } from './test-b/test-b.component';
import { TestCComponent } from './test-c/test-c.component';
import { TestDComponent } from './test-d/test-d.component';

@NgModule({
  declarations: [
    TestAComponent,
    TestBComponent,
    TestCComponent,
    TestDComponent,
  ],
  imports: [],
  exports: [TestAComponent, TestBComponent, TestCComponent, TestDComponent],
})
export class LibModule {}
