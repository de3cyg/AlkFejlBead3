import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        login(formData) {
            var cl = this;
            this.store.queryRecord('user', { filter: {neptun: formData.neptun, password: formData.password} }).then(function(user){
                if(user.length>0){
                    //console.log(user[0]);
                    user[0].set('online',true);
                    user[0].save();
                    cl.transitionToRoute('subjects.list');
                }
            });
        }
    }
});
