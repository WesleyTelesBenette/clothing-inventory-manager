import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app-main.component';

describe('AppComponent', () =>
{
	beforeEach(async () =>
	{
		await TestBed.configureTestingModule
		({
			imports: [AppComponent],
		})
		.compileComponents();
	});

	it('should create the app', () =>
	{
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have the 'clothing-inventory-manager' title`, () =>
	{
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('clothing-inventory-manager');
	});

	it('should render title', () =>
	{
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('h1')?.textContent).toContain('Hello, clothing-inventory-manager');
	});
});