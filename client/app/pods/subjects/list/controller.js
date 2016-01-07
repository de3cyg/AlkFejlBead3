import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newSubject(formData) {
            var subject = this.store.createRecord(
                'subject', 
                Object.assign(
                    {
                        //date: Date.now().toLocaleString(),
                        name: 'Anal3',
                        credit: 3
                    }, 
                    formData
                )
            );
            subject.save();
            $('.modal').modal('hide');
            //this.transitionToRoute('errors.list');
        }
    }
});
