'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('emiApp'));

  var MainCtrl,
    scope;

  var mockLocalStorageService =  {
    get : function(index) {
      return index;
    }
  }

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      localStorageService: mockLocalStorageService
      // place here mocked dependencies
    });
  }));

  it('should hane no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('shoudl add item to the list', function () {
    scope.todo = 'My Todo';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });


});
