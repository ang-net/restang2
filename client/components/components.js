import angular from 'angular';
import About from './about/about';
import Draft from './draft/draft';
import Student from './student/student';


let componentModule = angular.module('app.components', [
    About.name,
    Draft.name,
    Student.name
    
]);
export default componentModule;


