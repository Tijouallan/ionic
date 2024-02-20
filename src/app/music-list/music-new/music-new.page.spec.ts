import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicNewPage } from './music-new.page';

describe('MusicNewPage', () => {
  let component: MusicNewPage;
  let fixture: ComponentFixture<MusicNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MusicNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
