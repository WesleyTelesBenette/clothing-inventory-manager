import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () =>
{
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

  	beforeEach(async () =>
	{
		await TestBed.configureTestingModule
		({
			imports: [HeaderComponent]
		})
		.compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should show the header', () =>
	{
		const header = fixture.debugElement.query(By.css('header'));
		expect(header).toBeTruthy();
	});

	it('should show the title', () =>
	{
		const title = fixture.debugElement.query(By.css('h2'));

		expect(title).toBeTruthy();
		expect(title.nativeElement.textContent.trim()).toBe('Clothing Inventory Manager');
	});

	it('should show two links with correct titles and hrefs', () =>
	{
		const links = fixture.debugElement.queryAll(By.css('a'));

		const expectedLinksProperties: string[][] =
		[
			['ajuda', 'https://github.com/WesleyTelesBenette/clothing-inventory-manager?tab=readme-ov-file#manual-do-usu%C3%A1rio'],
			['repositório do projeto (github)', 'https://github.com/WesleyTelesBenette/clothing-inventory-manager?tab=readme-ov-file#clothing-inventory-manager']
		];
		expect(links).toHaveSize(expectedLinksProperties.length);

		for (let c = 0; c < links.length; c++)
		{
			expect(links[c].nativeElement.title).toBe(expectedLinksProperties[c][0]);
			expect(links[c].nativeElement.href).toBe(expectedLinksProperties[c][1]);
		}
	});
});
