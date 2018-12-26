import CmsModule from './cms'
import CmsController from './cms.controller';
import CmsComponent from './cms.component';
import CmsTemplate from './cms.html';

describe('Cms', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CmsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CmsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CmsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CmsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CmsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CmsController);
      });
  });
});
