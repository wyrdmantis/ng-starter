import {AdjustContentHeightDirective} from './adjust-content-height.directive';

describe('AdjustContentHeightDirective', () => {
  let directive: AdjustContentHeightDirective;
  let rendererStub;
  let elementRefStub;
  let windowStub;

  beforeEach(() => {
    elementRefStub = {nativeElement: {offsetTop: 10}};
    rendererStub = {setStyle: jasmine.createSpy('setStyle')};
    windowStub = {onresize: null, innerHeight: 1000};
    directive = new AdjustContentHeightDirective(windowStub, elementRefStub, rendererStub);
  });

  it('ngOnInit should initialize window.onresize listener', () => {
    expect(windowStub.onresize).toBeNull();

    directive.ngOnInit();

    expect(typeof windowStub.onresize).toBe('function');
  });

  it('ngOnInit should call resize', () => {
    spyOn(directive, 'resize');

    directive.ngOnInit();

    expect(directive.resize).toHaveBeenCalledTimes(1);
  });

  it('resize should update element\'s height', () => {
    directive.resize();

    expect(rendererStub.setStyle).toHaveBeenCalledTimes(1);
    expect(rendererStub.setStyle).toHaveBeenCalledWith(elementRefStub.nativeElement, 'min-height', '990px');
  });
});
