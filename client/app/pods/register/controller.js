import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newUser(formData) {
            var user = this.store.createRecord(
                'user', 
                Object.assign(
                    {
                        firstName: 'Asd',
                        lastName: 'sdasd',
                        neptun: 'asdasd',
                        password: 'dholS',
                        online: false,
                    }, 
                    formData
                )
            );
            user.save();
            this.transitionToRoute('login');
        }
    }
});
