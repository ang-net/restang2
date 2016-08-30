import template from './student.html';
import controller from './student.controller';


let studentComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default studentComponent;
