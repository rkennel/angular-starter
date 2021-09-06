import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { render, RenderResult } from "@testing-library/angular";

describe("AppComponent", () => {
  let renderResult: RenderResult<AppComponent>;
  beforeEach(async () => {
    renderResult = await render(AppComponent);
  });

  it("should create the app", () => {
    expect(renderResult.fixture.componentInstance).toBeTruthy();
  });

  it(`should have as title 'angular-starter'`, () => {
    expect(renderResult.fixture.componentInstance.title).toEqual("angular-starter");
  });

  it("should render title", () => {
    expect(renderResult.getByText("angular-starter app is running!"));
  });
});
