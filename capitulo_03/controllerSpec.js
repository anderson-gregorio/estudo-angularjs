describe('Controller: ListCtrl', function () {

    beforeEach(module('notesApp'));

    var ctrl;

    beforeEach(inject(function ($controller) {
        ctrl = $controller('ListCtrl');
    }));

    it('deve ter itens no carregamento', function () {
        expect(ctrl.items).toEqual([
            { id: 1, label: 'First', done: true },
            { id: 2, label: 'Second', done: false }
        ]);
    });

    it('deve ter itens de destaque com base no estado', function () {
        var item = { id: 1, label: 'First', done: true };

        var actualClass = ctrl.getDoneClass(item);
        expect(actualClass.finished).toBeTruthy();
        expect(actualClass.unfinished).toBeFalsy();

        item.done = false;
        actualClass = ctrl.getDoneClass(item);
        expect(actualClass.finished).toBeFalsy();
        expect(actualClass.unfinished).toBeTruthy();
    });

});