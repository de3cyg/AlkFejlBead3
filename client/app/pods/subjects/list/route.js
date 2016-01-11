import Ember from 'ember';

export default Ember.Route.extend({
    //model(params) {
    model(){

        
        //return  this.store.find('subject', {filter: {user: params.user_id}});
        return this.store.findAll('subject');
    },
});
