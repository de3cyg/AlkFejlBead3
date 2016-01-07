import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifySubject(formData) {
            // console.log(formData);
            let subject = this.get('model');
            console.log(subject);
            subject.setProperties(formData);
            return subject.save().then(() => {
                this.transitionToRoute('subjects.list');
            });
        }
    }
});
